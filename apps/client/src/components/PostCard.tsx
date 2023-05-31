import { ReactNode } from 'react';
import IPost from '../models/IPost';
import { Box, Text, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export interface PostCardProps {
  post: IPost;
  children?: ReactNode;
}

function PostCard({ post }: PostCardProps) {
  const { id, title, images, text, user, tags } = post;
  const truncatedText = text?.slice(0, 300) + '...';
  const { userName, avatar } = { ...user };
  return (
    <Link to={`/details/:${id}`}>
      <Box
        borderRadius='2xl'
        overflow='hidden'
        boxShadow='lg'
        maxW='lg'
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
          padding='2'
          top='0'
          left='1.5'
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
          _hover={{ opacity: '1', cursor: 'pointer' }}
        >
          <Text
            marginTop='2'
            fontSize='lg'
            color='#33CCCC'
          >
            {userName} wrote:
          </Text>
          <Text
            alignSelf='center'
            fontWeight='bold'
            fontSize='2xl'
            marginBottom='2'
          >
            {title}
          </Text>
          <Text
            color='yellow.500'
            fontSize='xl'
            textShadow='1px 1px 2px rgba(0, 0, 0, 0.4)'
          >
            {truncatedText}
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
                  fontSize='md'
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
    </Link>
  );
}

export default PostCard;
