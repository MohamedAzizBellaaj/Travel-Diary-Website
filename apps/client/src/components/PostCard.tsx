import { ReactNode } from 'react';
import IPost from '../models/IPost';
import { Box, Text, Avatar } from '@chakra-ui/react';

export interface PostCardProps {
  post: IPost;
  children?: ReactNode;
}

function PostCard({ post }: PostCardProps) {
  const { title, images, text, user, tags } = post;
  const { userName, avatar } = { ...user };
  return (
    <Box
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='lg'
      maxW='sm'
      position='relative'
      transition='all 0.2s ease-out'
      margin='2'
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
        top='1'
        left='1'
      >
        <Avatar
          size='md'
          name={userName}
          src={avatar}
        />
      </Box>
      <Box
        position='absolute'
        top='0'
        left='0'
        width='100%'
        height='100%'
        backgroundColor='rgba(0,0,0,0.5)'
        padding='4'
        display='flex'
        justifyContent='center'
        flexDirection='column'
        color='white'
        opacity='0'
        transition='all 0.2s ease-out'
        _hover={{ opacity: '1' }}
      >
        <Text
          marginTop='2'
          color='#33CCCC'
        >
          {userName} wrote:
        </Text>
        <Text
          alignSelf='center'
          fontWeight='bold'
          fontSize='xl'
          marginBottom='2'
        >
          {title}
        </Text>
        <Text
          color='yellow.500'
          textShadow='1px 1px 2px rgba(0, 0, 0, 0.4)'
        >
          {text}
        </Text>
        {tags && (
          <Box marginTop='4'>
            {tags.map((tag) => (
              <Box
                key={tag.id}
                display='inline-block'
                borderRadius='full'
                bg='#33CCCC'
                color='white'
                fontSize='xs'
                fontWeight='bold'
                padding='2'
                marginRight='2'
              >
                {tag.name}
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PostCard;
