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
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
// import { Textarea } from '@chakra-ui/react';
interface FormState {
  title:string,
  text: string,
  location:string,
  files:  File[],
  // tags: string[]
 
}


export function AddPostForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formState, setFormState] = useState<FormState>({
    title:'',
    text: '',
    location:'',
    files:[null, null,null,null,null],
    // tags:[ ]

  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      
    }));
    console.log(formState);

  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    let token=localStorage.getItem("access_token")
     token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVuaUBlbmkuZW5pIiwidXNlcklkIjoiNjFiOTNjN2QtYzI3YS00MmY3LTkyMmItZDZmN2YwY2Y5NjNkIiwiaWF0IjoxNjg1NzUxOTczLCJleHAiOjE2ODU3NTU1NzN9.JhS1OHOEkVCKHbFTb0wqIp9XRv0d1AVzCa2vyOma868'

    const formData = new FormData();
    console.log(formState);
    
    for (const [key, value] of Object.entries(formState)) {
      formData.append(key, value);
      console.log(key);
      
      if(key=="files"){
        for ( const file of value ){
          formData.append("files", file);
        }
      }
     
    }
    
      const response = await axios.post(
        '/api/posts',
        formData, {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        }
      ).then(( response ) => {
        console.log( response )
      setIsSubmitted(true);
        
      postId=response.data.result['id']
      console.log(postId
        );
      
      } ).catch()
    
   
    
  };
  let postId=''
  const handleImageChange = (file,index) => {
    setFormState((prevState) =>{ 
      const updatedImages=[...prevState.files];
      updatedImages[index]=file
      return(
      {
      ...prevState,
      files:updatedImages,
      
    })}
    );
    
  };
  const navigate = useNavigate();

if( isSubmitted)     navigate(`/details/${postId}`)

// return <Navigate to={"/details/"+ postId} replace={true} />
 
 
  
  return (
   
    <>
  
    <Tabs size='md' variant='enclosed'>
  <TabList>
    <Tab>Tell us your story</Tab>
    <Tab>Upload files</Tab>
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
        { formState.files.map((img, index)=>{
      return (
     
      <FileControl index={index} onChange={handleImageChange}/>
     

       )
        })}
      
      </Center> 

    </TabPanel>
    <TabPanel>
    <CountryDropdown onChange={handleChange} name="location" />
    <TagInput />
    <FormButton text="Share !"/>
  
    </TabPanel>

  </TabPanels>
   </form>
</Tabs>



     
  


















    </>
  );
}