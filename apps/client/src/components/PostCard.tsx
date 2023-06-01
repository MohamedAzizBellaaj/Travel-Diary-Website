import { ReactNode } from 'react';
import IPost from '../models/IPost';
import { Box, Text, Avatar, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import getUploadsURI from '../utils/getUploadsURI';

export interface PostCardProps {
  post: IPost;
  children?: ReactNode;
}

function PostCard({ post }: PostCardProps) {
  const { id, title, image, text, user } = post;
  const postImages = image.map((x) => getUploadsURI() + x.image);
  const truncatedText = text?.slice(0, 300) + '...';
  const { username, avatarLink } = user;
  return (
    <Link to={`/details/${id}`}>
      <Box
        borderRadius='2xl'
        overflow='hidden'
        boxShadow='lg'
        w='50vw'
        h='50vh'
        maxW='lg'
        position='relative'
        transition='all 0.2s ease-out'
        margin='2'
        _hover={{ transform: 'scale(1.05)' }}
      >
        {postImages && (
          <Image
            src={postImages[0]}
            alt={title}
            height='100%'
            width='100%'
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
            name={username}
            src={avatarLink}
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
            {username} wrote:
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
        </Box>
      </Box>
    </Link>
  );
}

export default PostCard;
