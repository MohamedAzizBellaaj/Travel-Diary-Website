import { ReactNode } from 'react';
import IPost from '../models/IPost';
import eiffelTower from '../assets/eiffel-tower.webp';
import avatar_image from '../assets/avatar.jpg';

import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import IUser from '../models/IUser';
import IComment from '../models/IComment';
import ITag from '../models/ITag';
import { Link, useParams } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

interface PostDetailsProps {
  children?: ReactNode;
}

function PostDetails({ children }: PostDetailsProps) {
  const { id } = useParams();
  // Fetch post using id
  const user: IUser = {
    id: '1',
    username: 'xXKyle420Xx',
    firstname: 'Kyle',
    lastname: 'El Chebi',
    bio: 'Sample Bio',
    avatar: avatar_image,
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
    image: [
      eiffelTower,
      'https://placehold.co/800?text=Hello+World&font=roboto',
      'https://placehold.co/840?text=Hello&font=roboto',
      'https://placehold.co/840?text=Hi+Everyone&font=roboto',
    ],
    user: user,
    location: 'France',
  };
  const { title, image, text, location } = post;
  const { username, firstname, lastname, bio, avatar } = { ...user };
  const coverImage = image && image[0];
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
