import { Textarea } from '@chakra-ui/react';

interface AlotOfTextProps {
  placeholder: string; 
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
 name: string;
}

export function AlotOfText({name,placeholder, changeHandler}: AlotOfTextProps) {
  return (
    <>
      <Textarea name= {name} placeholder={placeholder} onChange={changeHandler}/>
     
    </>
  );
}
