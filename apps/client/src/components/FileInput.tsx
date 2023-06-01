import { Input,Box,Image, Flex } from "@chakra-ui/react";
import cameraIcon from "../assets/camera-icon.png"
interface FileInputProps {
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void ,
    name: string
  
  
  }

export function FileInput({name, changeHandler} : FileInputProps) {
  return (
    <>
        <Box borderWidth="1px" p="2" rounded="md">
            <Flex  align="center" gap="4">
        <Image  boxSize='16px' src={cameraIcon} alt="icon" objectFit="cover" />   
        <label style={{cursor: 'pointer'}}  htmlFor="inputTag">
        Select Image
        <Input name ={name} style={{display: 'none'}} id="inputTag" type="file" onChange={changeHandler} />
      </label>
      </Flex>
      </Box>
          
    </>
  );
}
