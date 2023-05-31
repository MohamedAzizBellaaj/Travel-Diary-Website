import { Flex } from "@chakra-ui/react";

const ImageContainer = ({ children }) => {
  return (
    <Flex
      w="100%"
      // maxW="1200px"
      mx="auto"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      mt={6}
 gap="16px"

    >
      {children}
    </Flex>
  );
};

export default ImageContainer;
