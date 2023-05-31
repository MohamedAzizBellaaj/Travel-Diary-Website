import { Button } from '@chakra-ui/react';

interface FormButtonProps {
  text: string;
}

export function FormButton({ text }: FormButtonProps) {
  return (
    <>
      <Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
  type="submit"
>
  {text}
</Button>
    </>
  );
}
