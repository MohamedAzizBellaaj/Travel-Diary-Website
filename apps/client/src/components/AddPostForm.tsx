import {  useState } from 'react';
import { PasswordInput, FormButton, AvatarInput, AlotOfText } from '.';
import { TextInput } from './TextInput';
import { Box, Button, Center, FormLabel, Image, Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea} from '@chakra-ui/react'
import CountryDropdown from './CountriesDropdown';
import FileControl from './FileControl';
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
    console.log(formState);
    
  };


  
  return (
   
    <>
  
    <Tabs size='md' variant='enclosed'>
  <TabList>
    <Tab>One</Tab>
    <Tab>Two</Tab>
    <Tab>Three</Tab>
  </TabList>
  <form onSubmit={handleSubmit}>
  <TabPanels>
    <TabPanel>
    <Input name="title" value={formState.title} onChange={handleChange} type= "text" placeholder = "title" size="lg" />
    <Textarea 
      resize="none"
      border="none"
      bg="transparent"
      color="gray.500"
      fontSize="2xl"
      _placeholder={{ fontSize: '2xl', color: 'gray.300' }}name= "text" placeholder="tell us your story..." onChange={handleChange}
      width="80%"
      height="50vh"/>
    </TabPanel>
    <TabPanel>
      <FileControl name="image"  onChange={handleImageChange}/>
      <FileControl name="image"  onChange={handleImageChange}/>
      <FileControl name="image"  onChange={handleImageChange}/>
      <FileControl name="image"  onChange={handleImageChange}/>
    </TabPanel>
    <TabPanel>
    <CountryDropdown onChange={handleChange} name="country" />

    </TabPanel>

  </TabPanels>
   </form>
</Tabs>



     
  


















    </>
  );
}