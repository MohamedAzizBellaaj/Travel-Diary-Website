import { useState } from 'react';
import { Box, Input, FormControl, FormLabel, Image } from '@chakra-ui/react';

function ImageInput({ onChange }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onChange(file);

    // Generate preview URL
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <FormControl>
      <FormLabel>Upload Image</FormLabel>
      <Box borderWidth="1px" p="2" rounded="md">
        <Input type="file" onChange={handleFileChange} />
      </Box>
      {previewUrl && (
        <Box mt="2">
          <Image src={previewUrl} alt="Preview" boxSize="200px" objectFit="cover" />
        </Box>
      )}
    </FormControl>
  );
}

export default ImageInput;
