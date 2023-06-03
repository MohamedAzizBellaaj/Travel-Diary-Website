import { Box } from '@chakra-ui/react';
import { Sign } from '../components/Sign';

export function SignUpIn() {
  return (
    <Box
      boxShadow='md'
      height="100vh"
      bgGradient='linear(to-r, blue.700, blue.200)'
    >
      <Sign />
    </Box>
  );
}
