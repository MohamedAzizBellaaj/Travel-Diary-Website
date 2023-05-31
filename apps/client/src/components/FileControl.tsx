import { useState } from 'react';
import { Box,  FormControl, Image } from '@chakra-ui/react';
import { FileInput } from '.';

function FileControl({ onChange }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onChange(file);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <FormControl>
      
      {previewUrl && (
        <Box mt="2">
             <Image borderRadius='full' boxSize='150px' src={previewUrl} alt="Preview" objectFit="cover" />     
        </Box>
      )}


      <FileInput changeHandler={handleFileChange}/>

      
    </FormControl>
  );
}

export default FileControl;
