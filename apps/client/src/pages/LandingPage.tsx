import HeroSection from '../components/HeroSection';
import eiffelTower from '../assets/eiffel-tower.webp';
import ImageSection from '../components/ImageSection';
import IComment from '../models/IComment';
import IPost from '../models/IPost';
import ITag from '../models/ITag';
import IUser from '../models/IUser';
import avatar from '../assets/avatar.jpg';

const user: IUser = {
  userName: 'xXKyle420Xx',
  firstName: 'Kyle',
  lastName: 'El Chebi',
  bio: 'كي الزير المتكي، لا إضحك لايبكي. عريان الترمة في صبعو خاتم. سارق في يدو شمعة. عزوزة شدت سارق. بات يحلم بعنبة، مات جابولوا عنقود. تعلم الحجامة على ريوس الإتاماء. الفم الحارك، الزك البارك.',
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

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ImageSection posts={posts} />
    </>
  );
}
