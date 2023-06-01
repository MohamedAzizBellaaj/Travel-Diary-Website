import { useState } from 'react';
import { Box,  Flex,  FormControl, Image, Input } from '@chakra-ui/react';
import { FileInput } from '.';
import cameraIcon from "../assets/camera-icon.png"
import uploadPhoto from "../assets/upload_photo.png"


function FileControl({ name, onChange }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onChange(file);
  console.log(file);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <FormControl>
      <Box borderWidth="1px" p="2" rounded="md">

        {previewUrl ? <Box mt="2">
             <Image  boxSize='150px' src={previewUrl} alt="Preview" objectFit="cover" />     
        </Box> : 
        <Flex  backgroundImage={`url(${uploadPhoto})`}
        backgroundSize='cover'
      backgroundPosition='center'boxSize='150px' >
        <label style={{cursor: 'pointer', color:'transparent'}}  htmlFor="inputTag">
        Select Image
        <Input name ={name} style={{display: 'none'}} id="inputTag" type="file" onChange={handleFileChange} />
      </label>
      </Flex>
}
      </Box>



    </FormControl>
  );
}

export default FileControl;
