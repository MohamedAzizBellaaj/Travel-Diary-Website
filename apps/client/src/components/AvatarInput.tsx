import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';
import FileControl from './FileControl';

// interface AvatarInputProps {
//   children: ReactNode;
// }
// { children }: AvatarInputProps



export function AvatarInput({changeHandler}) {
  
  return (
    <>
        
      <FileControl onChange={changeHandler} />
          
    </>
  );
}
