import { ReactNode } from 'react';
import eiffelTower from '../assets/eiffel-tower.webp';
import avatar from '../assets/avatar.jpg';
import PostCard from './PostCard';
import { Flex } from '@chakra-ui/react';
import IUser from '../models/IUser';
import IPost from '../models/IPost';

interface FeedProps {
  children?: ReactNode;
}

function Feed({ children }: FeedProps) {
  const tags: ITag[] = [
    { id: '1', name: 'Paris' },
    { id: '2', name: 'Fun' },
    { id: '3', name: 'Travel' },
    { id: '4', name: 'Baaarcha Jaw' },
  ];
  const user: IUser = {
    userName: 'Kyle',
    avatar: avatar,
  };
  const post: IPost = {
    title: 'Paris',
    text: 'Sint aute cillum voluptate eiusmod nostrud eu proident ex nostrud elit proident anim labore in. Nostrud ad non dolor sit consectetur excepteur culpa veniam. Qui ipsum ex ut qui dolor ipsum fugiat id excepteur culpa. Duis reprehenderit do eu voluptate proident. Aliqua ex nulla magna commodo veniam elit ex.',
    images: [eiffelTower],
    user: user,
    tags: tags,
  };
  return (
    <>
      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
        <PostCard post={post} />
      </Flex>
    </>
  );
}

export default Feed;
