import ImageContainer from './ImageContainer';
import PostCard from './PostCard';
import SectionTitle from './SectionTitle';
import Feed from '../pages/Feed'
const ImageSection = ({ posts }) => {
  return (
    <>
      <SectionTitle
        title='Discover unique places to stay, experiences to try.'
        subTitle='Latest Stories'
      />
      {/* <ImageContainer>
        {posts.map((item) => (
          <PostCard post={item} />
        ))}
      </ImageContainer> */}
      <Feed /> 
    </>
  );
};

export default ImageSection;
