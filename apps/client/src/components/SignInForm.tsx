import { TextInput } from './TextInput';
import { FormButton, PasswordInput } from '.';
import { useState } from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import axios, { formToJSON } from 'axios';
import Feed from '../pages/Feed';
interface FormState {
  password: string;
  mail: string;
}



export function SignInForm() {
  const [formState, setFormState] = useState<FormState>({
    mail: '',
    password: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    
    
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData();
    
    for (const [key, value] of Object.entries(formState)) {
      formData.append(key, value);
      
    }
    try {
      const response = await axios.post('/api/auth/login', formToJSON(formData));
  
      const token  = response.data["access_token"];
      console.log(response.data["access_token"]);
      
  
      localStorage.setItem('access_token', token);
      
      setIsAuthenticated(true);
      
     
      
    } catch (error) {
      console.log('Error during login:', error);
    }
  };
  if(isAuthenticated) return <Navigate to="/feed" replace={true} />
  return (
    <> 
 
    <form onSubmit={handleSubmit}>
      <TextInput name="mail" changeHandler={handleChange} placeholder='Email address' type='email'/>
      <br />
      <PasswordInput name="password"  changeHandler={handleChange}  />
      <br />
      <FormButton text="Continue"/>

    </form>
    
    </>
  );
}
