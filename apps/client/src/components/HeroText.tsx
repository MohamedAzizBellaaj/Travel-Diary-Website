import { Flex, Heading, Text } from '@chakra-ui/react';

export default function HeroText() {
  return (
    <Flex
      position='absolute'
      top='10%'
      left='10%'
      transform='translate(-10%, -10%)'
      flexDirection='column'
      textAlign='center'
      padding='1rem'
      borderRadius='md'
    >
      <Heading
        as='h1'
        size='2xl'
        color='white'
      >
        Welcome to Wanderlust
      </Heading>
      <Text
        fontSize='xl'
        color='blue.800'
        marginTop='1rem'
      >
        Discover unique places to stay, experiences to try.{' '}
      </Text>
    </Flex>
  );
}
