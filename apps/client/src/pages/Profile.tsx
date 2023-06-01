import { ReactNode } from 'react';
import eiffelTower from '../assets/eiffel-tower.webp';
import avatar_image from '../assets/avatar.jpg';

import { Avatar, Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import IUser from '../models/IUser';
import { Link, useParams } from 'react-router-dom';
import IComment from '../models/IComment';
import IPost from '../models/IPost';
import ITag from '../models/ITag';
import PostCard from '../components/PostCard';

interface ProfileProps {
  children?: ReactNode;
}

function Profile({ children }: ProfileProps) {
  const { id } = useParams();
  // Fetch post using id
  const user: IUser = {
    id: '1',
    userName: 'xXKyle420Xx',
    firstName: 'Kyle',
    lastName: 'El Chebi',
    bio: 'Sample Bio',
    avatar: avatar_image,
    backgroundImage: eiffelTower,
  };
  const comments: IComment[] = [
    {
      id: '1',
      text: 'Nice wish you the best',
      user: user,
      heart: 0,
    },
    {
      id: '2',
      text: 'Very beautiful photos',
      user: user,
      heart: 2,
    },
  ];
  const tags: ITag[] = [
    { id: '1', name: 'Paris' },
    { id: '2', name: 'Fun' },
    { id: '3', name: 'Travel' },
    { id: '4', name: 'Barcha Jaw' },
  ];
  const post: IPost = {
    id: '42',
    title: 'Paris',
    text: 'Sint aute cillum voluptate eiusmod nostrud eu proident ex nostrud elit proident anim labore in. Nostrud ad non dolor sit consectetur excepteur culpa veniam. Qui ipsum ex ut qui dolor ipsum fugiat id excepteur culpa. Duis reprehenderit do eu voluptate proident. Aliqua ex nulla magna commodo veniam elit ex.',
    images: [
      eiffelTower,
      'https://placehold.co/800?text=Hello+World&font=roboto',
      'https://placehold.co/840?text=Hello&font=roboto',
      'https://placehold.co/840?text=Hi+Everyone&font=roboto',
    ],
    user: user,
    location: 'France',
    comments: comments,
    tags: tags,
    createdAt: new Date(),
  };
  const { userName, firstName, lastName, bio, avatar, backgroundImage } = {
    ...user,
  };
  const coverImage = backgroundImage;
  const posts = new Array(8).fill(post);
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
          src={coverImage}
          alt='cover image'
          w='100%'
          h='100%'
          objectFit='cover'
        />
        <Flex flexDirection='row'>
          <Link to={`/profile/${user.id}`}>
            <Avatar
              height='120'
              width='120'
              name={userName}
              src={avatar}
              bottom='12'
              left='-3'
              marginRight='4'
            />
          </Link>
          <Box marginRight='auto'>
            <Text>
              {firstName} {lastName} (@{userName})
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
