import { ReactNode, useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import PostCard from '../components/PostCard';
import AddPost from '../components/AddPost';
import axios from 'axios';

interface FeedProps {
  children?: ReactNode;
}

function Feed({ children }: FeedProps) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/posts/all`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(posts);
  
  const postElements = posts.map((post) => <PostCard post={post} />);
  return (
    <>
      <AddPost />
      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        {postElements}
      </Flex>
    </>
  );
}

export default Feed;
