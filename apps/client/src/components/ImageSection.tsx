import ImageContainer from './ImageContainer';

import PostCard from './PostCard';
import SectionTitle from './SectionTitle';

const ImageSection = ({ posts }) => {
  return (
    <>
      <SectionTitle
        title='Discover unique places to stay, experiences to try.'
        subTitle='Latest Stories'
      />
      <ImageContainer>
        {posts.map((item) => (
          <PostCard post={item} />
        ))}
      </ImageContainer>
    </>
  );
};

export default ImageSection;
