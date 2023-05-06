import { ReactNode } from 'react';
import IPost from '../models/IPost';
import { Box, Text } from '@chakra-ui/react';

export interface PostCardProps extends IPost {
  children?: ReactNode;
}

function PostCard({ title, images, text }: PostCardProps) {
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='lg'
      maxW='sm'
      position='relative'
      transition='all 0.2s ease-out'
      _hover={{ transform: 'scale(1.05)' }}
    >
      {images && (
        <img
          src={images[0]}
          alt={title}
        />
      )}
      <Box
        position='absolute'
        top='0'
        left='0'
        w='100%'
        h='100%'
        bg='rgba(0,0,0,0.5)'
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        color='white'
        opacity='0' // hide text by default
        transition='all 0.2s ease-out' // added transition for smooth opacity change
        _hover={{ opacity: '1' }}
      >
        <Text
          fontWeight='bold'
          fontSize='xl'
          mb='2'
        >
          {title}
        </Text>
        <Text color='gray.500'>{text}</Text>
      </Box>
    </Box>
  );
}

export default PostCard;
