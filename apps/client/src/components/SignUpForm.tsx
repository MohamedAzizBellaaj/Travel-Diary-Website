import { useState } from 'react';
import { PasswordInput, FormButton, AlotOfText } from '.';
import { TextInput } from './TextInput';
import { FormLabel } from '@chakra-ui/react';
import FileControl from './FileControl';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
interface FormState {
  firstname: string;
  lastname: string;
  username: string;
  mail: string;
  password: string;
  bio: string;
  avatar: File | null;
  coverPhoto: File | null;
}

export function SignUpForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formState, setFormState] = useState<FormState>({
    firstname: '',
    lastname: '',
    username: '',
    mail: '',
    password: '',
    bio: '',
    avatar: null,
    coverPhoto: null,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    
    const formData = new FormData();
    for (const [key, value] of Object.entries(formState)) {
      formData.append(key, value);
      
    }
    try {
      const response = await axios.post('/api/auth/register', formData);
      setIsSubmitted(true);

    } catch (error) {
      console.error(error);
    }
  };
  const handleImageChange = (file: File, type: string) => {
    switch (type) {
      case 'avatar':
        setFormState((prevState) => ({
          ...prevState,
          avatar: file,
        }));
        break;
      case 'coverPhoto':
        setFormState((prevState) => ({
          ...prevState,
          coverPhoto: file,
        }));
        break;
      default:
        break;
    }
  };
  if(isSubmitted) return <Navigate to="/signin" replace={false} />
  return (
    <>
      <form onSubmit={handleSubmit}>
        <FileControl
          index={0}
          onChange={(file) => handleImageChange(file, 'avatar')}
        />
        <FileControl
          index={1}
          onChange={(file) => handleImageChange(file, 'coverPhoto')}
        />

        <FormLabel>First name</FormLabel>
        <TextInput
          name='firstname'
          changeHandler={handleChange}
          type='text'
          placeholder='First name'
        />
        <FormLabel>Last name</FormLabel>

        <TextInput
          name='lastname'
          changeHandler={handleChange}
          type='text'
          placeholder='Last name'
        />
        <FormLabel>Username</FormLabel>

        <TextInput
          name='username'
          changeHandler={handleChange}
          type='text'
          placeholder='Username'
        />
        <FormLabel>bio</FormLabel>
        <AlotOfText
          name='bio'
          changeHandler={handleChange}
          placeholder='tell us about you !'
        />

        <FormLabel>Mail</FormLabel>
        <TextInput
          name='mail'
          changeHandler={handleChange}
          type='email'
          placeholder='Email address'
        />

        <FormLabel>password</FormLabel>
        <PasswordInput
          name='password'
          changeHandler={handleChange}
        />
        <FormButton text='Continue' />
      </form>
    </>
  );
}
