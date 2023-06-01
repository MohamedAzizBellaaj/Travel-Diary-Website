import { Box } from '@chakra-ui/react';
import { Sign } from '../components/Sign';

export function SignUpIn() {
  return (
    <Box
      boxShadow='md'
      bgGradient='linear(to-r, blue.700, blue.200)'
    >
      <Sign />
    </Box>
  );
}
