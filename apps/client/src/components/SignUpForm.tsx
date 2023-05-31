import {  useState } from 'react';
import { PasswordInput, FormButton, AvatarInput } from '.';
import { TextInput } from './TextInput';
import { Image } from '@chakra-ui/react'
// import { Textarea } from '@chakra-ui/react';
interface FormState {
  firstName:string,
  lastName:string,
  userName:string,
  email: string,
  password: string,
  bio: string,
  avatar: string,
}


export function SignUpForm() {
  const [formState, setFormState] = useState<FormState>({
    firstName:'',
    lastName:'',
    userName:'',
    email: '',
    password: '',
    bio: '',
    avatar: null ,
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      
    }));

  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formState.email)
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
   
      <AvatarInput value={formState.email}/> 
      <TextInput value={formState.email} changeHandler={handleChange } type ="email" placeholder='Email address' />
      <TextInput value={formState.userName} changeHandler={handleChange } type ="text" placeholder='Username' />
      <TextInput value={formState.firstName} changeHandler={handleChange } type ="text" placeholder='First name' />
      <TextInput  value={formState.lastName} changeHandler={handleChange }type ="text" placeholder='Last name' />
      {/* <Textarea placeholder='Tell us about you !' value={formState.bio} onChange={handleChange}/> */}
      <br />
      <br />
      <PasswordInput changeHandler={handleChange} value={formState.password}/>
      <FormButton text="Continue"/>

   

    </form>
    </>
  );
}
