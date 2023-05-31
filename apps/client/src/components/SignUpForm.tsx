import {  useState } from 'react';
import { PasswordInput, FormButton, AvatarInput, AlotOfText } from '.';
import { TextInput } from './TextInput';
import { FormLabel, Image } from '@chakra-ui/react'
// import { Textarea } from '@chakra-ui/react';
interface FormState {
  firstName:string,
  lastName:string,
  userName:string,
  email: string,
  password: string,
  bio: string,
  avatar: File | null
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
    console.log(formState);

  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleImageChange = (file) => {
    // Update the form state with the selected file
    setFormState((prevState) => ({
      ...prevState,
      avatar: file,
    }));
    console.log(formState.avatar);
    
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
      <AvatarInput value={formState.avatar} changeHandler={handleImageChange} /> 
      <FormLabel>First name</FormLabel>
      <TextInput value={formState.firstName} changeHandler={handleChange } type ="text" placeholder='First name' />
      <FormLabel>Last name</FormLabel>

      <TextInput  value={formState.lastName} changeHandler={handleChange }type ="text" placeholder='Last name' />
      <FormLabel>Username</FormLabel>


      <TextInput value={formState.userName} changeHandler={handleChange } type ="text" placeholder='Username' />
      <FormLabel>bio</FormLabel>
      <AlotOfText value={formState.bio} changeHandler={handleChange } placeholder='tell us about you !'/> 

      <FormLabel>email</FormLabel>
      <TextInput value={formState.email} changeHandler={handleChange } type ="email" placeholder='Email address' />

      <FormLabel>password</FormLabel>
      <PasswordInput changeHandler={handleChange} value={formState.password}/>
      <FormButton text="Continue"/>

   

    </form>
    </>
  );
}
