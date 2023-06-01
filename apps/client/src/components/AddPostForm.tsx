import {  useState } from 'react';
import {  FormButton} from '.';
import { Box, Button, Center, Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea} from '@chakra-ui/react'
import CountryDropdown from './CountriesDropdown';
import FileControl from './FileControl';
import TagInput from './TagInput';
// import { Textarea } from '@chakra-ui/react';
interface FormState {
  title:string,
  text: string,
  country:string,
  images:  File[],
  // tags: string[]
 
}


export function AddPostForm() {
  const [formState, setFormState] = useState<FormState>({
    title:'',
    text: '',
    country:'',
    images:[null, null,null,null,null],
    // tags:[ ]

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
    
  };
  const handleImageChange = (file,index) => {
    setFormState((prevState) =>{ 
      const updatedImages=[...prevState.images];
      updatedImages[index]=file
      console.log(index, file);
      console.log(updatedImages);
      return(
      {
      ...prevState,
      images:updatedImages,
      
    })}
    );
    
  };
  

 
 
  
  return (
   
    <>
  
    <Tabs size='md' variant='enclosed'>
  <TabList>
    <Tab>Tell us your story</Tab>
    <Tab>Upload images</Tab>
    <Tab>Add some tags</Tab>
  </TabList>
  <form onSubmit={handleSubmit}>
  <TabPanels>
    <TabPanel>
    <Input     bg="transparent"   border="none"
name="title" value={formState.title} onChange={handleChange} type= "text" placeholder = "title" size="lg" />
    <Textarea resize="none"
      border="none"
      bg="transparent"
      color="gray.500"
      fontSize="2xl"
      _placeholder={{ fontSize: '2xl', color: 'gray.300' }}name= "text" placeholder="tell us your story..." onChange={handleChange}
      // width="80%"
      height="50vh"/>
    </TabPanel>
    <TabPanel>
      <Center> 
        { formState.images.map((img, index)=>{
      return (
     
      <FileControl index={index} onChange={handleImageChange}/>
     

       )
        })}
      
      </Center> 

    </TabPanel>
    <TabPanel>
    <CountryDropdown onChange={handleChange} name="country" />
    <TagInput />
    <FormButton text="Share !"/>
  
    </TabPanel>

  </TabPanels>
   </form>
</Tabs>



     
  


















    </>
  );
}