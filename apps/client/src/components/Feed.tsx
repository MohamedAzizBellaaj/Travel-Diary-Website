import { ReactNode } from 'react';
import eiffelTower from '../assets/eiffel-tower.webp';
import PostCard from './PostCard';
import { Flex } from '@chakra-ui/react';

interface FeedProps {
  children?: ReactNode;
}

function Feed({ children }: FeedProps) {
  const title = 'Paris';
  const text =
    'Sint aute cillum voluptate eiusmod nostrud eu proident ex nostrud elit proident anim labore in. Nostrud ad non dolor sit consectetur excepteur culpa veniam. Qui ipsum ex ut qui dolor ipsum fugiat id excepteur culpa. Duis reprehenderit do eu voluptate proident. Aliqua ex nulla magna commodo veniam elit ex.';
  const image = eiffelTower;
  return (
    <>
      <Flex flexDirection='column'>
        <PostCard
          key={title}
          title={title}
          text={text}
          images={[image]}
        />
        <PostCard
          key={title}
          title={title}
          text={text}
          images={[image]}
        />
        <PostCard
          key={title}
          title={title}
          text={text}
          images={[image]}
        />
      </Flex>
    </>
  );
}

export default Feed;
