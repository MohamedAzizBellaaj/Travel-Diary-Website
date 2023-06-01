import { ReactNode, useEffect, useState } from 'react';

import { Avatar, Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import IUser from '../models/IUser';
import { Link, useParams } from 'react-router-dom';
import PostCard from '../components/PostCard';
import axios from 'axios';
import getUploadsURI from '../utils/getUploadsURI';

interface ProfileProps {
  children?: ReactNode;
}

function Profile({ children }: ProfileProps) {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(`/api/posts/user/${userId}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const { username, firstname, lastname, bio, avatar, coverPhoto } =
    user as IUser;
  const avatarLink = getUploadsURI() + avatar;
  const coverPhotoLink = getUploadsURI() + coverPhoto;
  const myUser = {
    username,
    firstname,
    lastname,
    bio,
    avatarLink,
    coverPhotoLink,
  };
  const userPosts = posts.map((post) => (post.user = myUser));
  console.log(userPosts);
  const postElements = posts.map((post) => <PostCard post={post} />);
  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        background='gray.200'
        width='60vw'
        height='50vh'
        marginBottom='4'
      >
        <Image
          src={coverPhotoLink}
          alt='cover image'
          w='100%'
          h='100%'
          objectFit='cover'
        />
        <Flex flexDirection='row'>
          <Link to={`/profile/${userId}`}>
            <Avatar
              height='120'
              width='120'
              borderRadius='full'
              name={username}
              src={avatarLink}
              bottom='12'
              left='-3'
              marginRight='4'
            />
          </Link>
          <Box marginRight='auto'>
            <Text>
              {firstname} {lastname} (@{username})
            </Text>
            <Divider
              borderWidth='1px'
              borderColor='#0F4C81'
            />
          </Box>
        </Flex>
        <Box
          padding='5rem 10rem'
          border='2px solid #D2B48C'
          boxShadow='10px 11px 4px rgba(0, 0, 0, 0.25);'
          borderRadius='12rem'
          marginBottom='4'
        >
          <Text>{bio}</Text>
        </Box>
        <Flex
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          {postElements}
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
