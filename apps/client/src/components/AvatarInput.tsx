import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';
import FileControl from './FileControl';

// interface AvatarInputProps {
//   children: ReactNode;
// }
// { children }: AvatarInputProps
const handleImageChange = (file) => {
  // Do something with the selected file
  console.log(file);
};


export function AvatarInput() {
  
  return (
    <>
        
      <FileControl onChange={handleImageChange} />
          
    </>
  );
}
