import { ReactNode } from 'react';
import IPost from '../models/IPost';
import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

interface PostDetailsProps {
  post: IPost;
  children?: ReactNode;
}

function PostDetails({ post }: PostDetailsProps) {
  const { title, images, text, user, location, comments, tags, createdAt } =
    post;
  const { userName, firstName, lastName, bio, avatar } = { ...user };
  const coverImage = images && images[0];
  const formattedDate = createdAt?.toLocaleDateString('fr-Fr', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <>
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
      </Box>
    </>
  );
}

export default PostDetails;
