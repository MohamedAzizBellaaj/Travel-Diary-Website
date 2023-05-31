import { Input } from "@chakra-ui/react";

interface TextInputProps {
  type: string;
  placeholder: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void

}

export function TextInput({ type, placeholder,changeHandler }: TextInputProps) {
  return (
    <>
      <Input variant='flushed' type= {type} placeholder={ placeholder } 
      onChange={changeHandler } /> 
      
    </>
  );
}
