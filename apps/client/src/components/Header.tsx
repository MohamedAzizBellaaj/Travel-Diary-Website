import { Flex, Box, Button } from "@chakra-ui/react";
import logo  from '../assets/logo.svg'

export default function Header() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="transparent"
      zIndex="1"
      // position="absolute"
      //   top="0"
      //   left="0"
      //   right="0"
    >
      <Box>
        <img src={logo} alt="Logo" />
      </Box>

      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center">
        <Button as='a' colorScheme="blue" variant="outline" mr={4}>Login</Button>
        <Button as='a' colorScheme="blue" >Register</Button>
      </Box>
    </Flex>
  );
}

