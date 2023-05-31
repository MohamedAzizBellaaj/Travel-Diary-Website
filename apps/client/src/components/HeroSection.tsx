import { Box } from '@chakra-ui/react';
import heroImage from '../assets/hero.png';
import Header from './Header';
import HeroText from './HeroText';

function HeroSection() {
  return (
    <Box
      height='100vh'
      //  bgGradient='linear(to-r, blue.700, blue.200)'
      backgroundImage={`url(${heroImage})`}
      backgroundSize='cover'
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      // position="relative"
    >
      <Header />
      <HeroText />
    </Box>
  );
}

export default HeroSection;
