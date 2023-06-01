import { ReactNode } from 'react';
import eiffelTower from '../assets/eiffel-tower.webp';
import avatar from '../assets/avatar.jpg';
import { Flex } from '@chakra-ui/react';
import IUser from '../models/IUser';
import IPost from '../models/IPost';
import ITag from '../models/ITag';
import IComment from '../models/IComment';
import PostCard from '../components/PostCard';
import AddPost from '../components/AddPost';

interface FeedProps {
  children?: ReactNode;
}

function Feed({ children }: FeedProps) {
  const user: IUser = {
    userName: 'xXKyle420Xx',
    firstName: 'Kyle',
    lastName: 'El Chebi',
    bio: 'Sample Bio',
    avatar: avatar,
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
  const posts = new Array(8).fill(post);
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
