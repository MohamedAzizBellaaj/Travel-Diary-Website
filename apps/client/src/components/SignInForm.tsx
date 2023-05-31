import { TextInput } from './TextInput';
import { FormButton, PasswordInput } from '.';
import { useState } from 'react';
interface FormState {
  password: string;
  email: string;
}



export function SignInForm() {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    
    
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Access formState.name and formState.email for further processing
  };
  return (
    <> 
    <form onSubmit={handleSubmit}>
      <TextInput value={formState.email} changeHandler={handleChange} placeholder='Email address' type='email'/>
      <br />
      <PasswordInput value={formState.password} changeHandler={handleChange}  />
      <br />
      <FormButton text="Continue"/>

   

    </form>
    </>
  );
}
