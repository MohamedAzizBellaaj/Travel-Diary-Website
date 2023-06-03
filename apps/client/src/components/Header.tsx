import { Flex, Box, Button } from '@chakra-ui/react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding='1.5rem'
      bg='transparent'
      zIndex='1'
    >
      <Box>
        <img
          src={logo}
          alt='Logo'
        />
      </Box>

      <Box
        display={{ base: 'none', md: 'flex' }}
        alignItems='center'
      >
        <Link to='/signin'>

        <Button
          as='a'
          colorScheme='blue'
          variant='outline'
          mr={4}
        >
          Login
        </Button>
        </Link>
        <Link to='/signin'>
        <Button
          as='a'
          colorScheme='blue'
        >
          Join 
        </Button>
             
            </Link>
      </Box>
    </Flex>
  );
}
