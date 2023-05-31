import {  useState } from 'react';
import { PasswordInput, FormButton, AvatarInput, AlotOfText } from '.';
import { TextInput } from './TextInput';
import { Center, FormLabel, Image, Input } from '@chakra-ui/react'
import CountryDropdown from './CountriesDropdown';
// import { Textarea } from '@chakra-ui/react';
interface FormState {
  title:string,
  text: string,
  country:string,
  image: File | null
 
}


export function AddPostForm() {
  const [formState, setFormState] = useState<FormState>({
    title:'',
    text: '',
    country:'',
    image:null
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
      image: file,
    }));
    console.log(formState.image);
    
  };
  return (
    <>
    <Center boxShadow="lg">
      <form onSubmit={handleSubmit}>
     
      <TextInput value={formState.title} changeHandler={handleChange } type ="text" placeholder='Title' />

      
      <Input value={formState.title} onChange={handleChange} type= "text" placeholder = "title" size="lg" />
      
      <FormLabel>text</FormLabel>
      <AlotOfText size="lg" value={formState.text} changeHandler={handleChange } placeholder='tell us about you !'/> 

      
    <CountryDropdown onChange={handleChange} value= {formState.country} />
    {/* <AvatarInput value={formState.avatar} changeHandler={handleImageChange} />  */}
      <FormButton text="Continue"/>


    </form>
    </Center>
    </>
  );
}
