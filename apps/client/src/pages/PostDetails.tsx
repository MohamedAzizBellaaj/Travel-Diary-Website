import { ReactNode } from 'react';

import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

import { Link, useParams } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import { useQuery } from '@tanstack/react-query';
import getUploadsURI from '../utils/getUploadsURI';

interface PostDetailsProps {
  children?: ReactNode;
}

function PostDetails({ children }: PostDetailsProps) {
  const { postId } = useParams();
  console.log(postId);
  async function fetchData() {
    const response = await fetch(`/api/posts/${postId}`);
    const data = await response.json();
    return data;
  }
  // Fetch post using id
  const { data, isLoading } = useQuery({
    queryKey: ['post'],
    queryFn: () => fetchData(),
  });
  if (isLoading) {
    return <Box>Loading...</Box>;
  }
  console.log(data);
  const { title, image, text, location, user } = data;
  const { username, firstname, lastname, bio, avatar, coverPhoto } = user;
  const images = image && image.map((x) => getUploadsURI() + x.image);
  const coverImage = getUploadsURI() + coverPhoto;
  const avatarLink = getUploadsURI() + avatar
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
              borderRadius='full'
              src={avatarLink}
              name={username}
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
          <HStack
            spacing='4'
            align='stretch'
          >
            <Text>❤️</Text>
            <Text>😯</Text>
            <Text>😡</Text>
            <Text>👏</Text>
          </HStack>
        </Flex>
        <Text
          color='#0F4C81'
          textAlign='center'
          marginBottom='4'
        >
          {title}
        </Text>
        <Box
          padding='5rem 10rem'
          border='2px solid #D2B48C'
          boxShadow='10px 11px 4px rgba(0, 0, 0, 0.25);'
          borderRadius='12rem'
          marginBottom='4'
        >
          <Text>{text}</Text>
        </Box>
        <ImageCarousel images={images} />
      </Box>
    </Flex>
  );
}

export default PostDetails;
