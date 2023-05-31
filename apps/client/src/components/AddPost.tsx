import { Button, Image } from '@chakra-ui/react';
import { ReactNode } from 'react';
import pen from '../assets/pen.png';
interface AddPostProps {
  children?: ReactNode;
}

function AddPost({ children }: AddPostProps) {
  return (
    <Button
      borderRadius='100'
      bg='#D1FFBD'
      bottom={5}
      right={'3%'}
      position={'fixed'}
      zIndex={5}
    >
      <Image
        src={pen}
        width={'20px'}
      />
    </Button>
  );
}

export default AddPost;
