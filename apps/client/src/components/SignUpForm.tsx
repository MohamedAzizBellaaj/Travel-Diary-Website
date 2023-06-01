import {  useState } from 'react';
import { PasswordInput, FormButton, AlotOfText } from '.';
import { TextInput } from './TextInput';
import { FormLabel, Image } from '@chakra-ui/react'
import FileControl from './FileControl';
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
    console.log(formState);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(formState, null, 2))
        resolve()
      }, 1000)
    })
  };
  const handleImageChange = (file) => {
    // Update the form state with the selected file
    setFormState((prevState) => ({
      ...prevState,
      avatar: file,
    }));
    console.log(file);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
      
      <FileControl  index= {0} onChange={handleImageChange} />

      <FormLabel>First name</FormLabel>
      <TextInput name="firstName" value={formState.firstName} changeHandler={handleChange } type ="text" placeholder='First name' />
      <FormLabel>Last name</FormLabel>

      <TextInput name="lastName" value={formState.lastName} changeHandler={handleChange }type ="text" placeholder='Last name' />
      <FormLabel>Username</FormLabel>


      <TextInput name="userName" value={formState.userName} changeHandler={handleChange } type ="text" placeholder='Username' />
      <FormLabel>bio</FormLabel>
      <AlotOfText name="bio" value={formState.bio} changeHandler={handleChange } placeholder='tell us about you !'/> 

      <FormLabel>email</FormLabel>
      <TextInput name="email" value={formState.email} changeHandler={handleChange } type ="email" placeholder='Email address' />

      <FormLabel>password</FormLabel>
      <PasswordInput name="password" changeHandler={handleChange} value={formState.password}/>
      <FormButton text="Continue"/>

   

    </form>
    </>
  );
}
