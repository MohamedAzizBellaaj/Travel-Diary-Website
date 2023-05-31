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
import { useParams } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';

interface ProfileProps {
  children?: ReactNode;
}

function Profile({ children }: ProfileProps) {
  const { user_id } = useParams();
  // Fetch post using user_id
  const user: IUser = {
    userName: 'xXKyle420Xx',
    firstName: 'Kyle',
    lastName: 'El Chebi',
    bio: 'كي الزير المتكي، لا إضحك لايبكي. عريان الترمة في صبعو خاتم. سارق في يدو شمعة. عزوزة شدت سارق. بات يحلم بعنبة، مات جابولوا عنقود. تعلم الحجامة على ريوس الإتاماء. الفم الحارك، الزك البارك.',
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
    id: 42,
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
  const { title, images, text, location, createdAt } = post;
  const { userName, firstName, lastName, bio, avatar } = { ...user };
  const coverImage = images && images[0];
  const formattedDate = createdAt?.toLocaleDateString('fr-Fr', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
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
          <Avatar
            height='120'
            width='120'
            name={userName}
            src={avatar}
            bottom='12'
            left='-3'
            marginRight='4'
          />
          <Box marginRight='auto'>
            <Text>
              {firstName} {lastName} (@{userName})
            </Text>
            <Divider
              borderWidth='1px'
              borderColor='#0F4C81'
            />
            <Text>{formattedDate}</Text>
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

export default Profile;
