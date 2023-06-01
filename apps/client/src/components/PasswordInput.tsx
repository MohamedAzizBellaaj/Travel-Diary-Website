import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import React from "react"

interface PasswordInputProps {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
name: string
}

export function PasswordInput({ name,changeHandler}: PasswordInputProps) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <InputGroup size='md'>
      <Input
      name={name}
      variant='flushed'
        // pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        
      onChange={changeHandler }
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}
