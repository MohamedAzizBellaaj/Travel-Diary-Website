import { Textarea } from '@chakra-ui/react';

interface AlotOfTextProps {
  placeholder: string; 
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
 
}

export function AlotOfText({placeholder, changeHandler}: AlotOfTextProps) {
  return (
    <>
      <Textarea placeholder={placeholder} onChange={changeHandler}/>
     
    </>
  );
}
