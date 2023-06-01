import { ReactNode } from 'react';
import { Box, Image, IconButton, Flex } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useState } from 'react';
interface ImageCarouselProps {
  images: string[];
  children?: ReactNode;
}

function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Flex
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <Box
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        borderRadius='2xl'
        overflow='hidden'
        boxShadow='lg'
        maxW='lg'
        position='relative'
      >
        <Image
          src={images[currentImageIndex]}
          alt='Carousel Image'
        />
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label='Previous Image'
          onClick={handlePrev}
          position='absolute'
          top='50%'
          left='4'
          transform='translateY(-50%)'
          variant='ghost'
        />
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label='Next Image'
          onClick={handleNext}
          position='absolute'
          top='50%'
          right='4'
          transform='translateY(-50%)'
          variant='ghost'
        />
      </Box>
    </Flex>
  );
}

export default ImageCarousel;
