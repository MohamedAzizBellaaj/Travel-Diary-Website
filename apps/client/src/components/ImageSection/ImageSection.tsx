
import ImageContainer from '../ImageContainer/ImageContainer';

import PostCard from "../PostCard";
import SectionTitle from '../SectionTitle/SectionTitle';



const ImageSection = ({ posts }) => {
  return (
    <>
    <SectionTitle 
    title="Discover unique places to stay, experiences to try." subTitle="Latest Stories"/>
      <ImageContainer 
>
              {posts.map((item) => (
                  <PostCard
                      key={item.title}
                      title={item.title}
                      text={item.text}
                      images={[item.image]} />
              ))}
          </ImageContainer></>
  );
};

export default ImageSection;
