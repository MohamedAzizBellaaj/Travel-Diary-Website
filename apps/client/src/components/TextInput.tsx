import { Input } from "@chakra-ui/react";

interface TextInputProps {
  type: string;
  placeholder: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  name:string;
}

export function TextInput({ name, type, placeholder,changeHandler }: TextInputProps) {
  return (
    <>
      <Input variant='flushed' name={name} type= {type} placeholder={ placeholder } 
      onChange={changeHandler } /> 
      
    </>
  );
}
