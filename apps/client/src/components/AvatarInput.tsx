import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';
import FileControl from './FileControl';



export function AvatarInput({name ,changeHandler}) {
  
  return (
    <>
        
      <FileControl name={name} onChange={changeHandler} />
          
    </>
  );
}
