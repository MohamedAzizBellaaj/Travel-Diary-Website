import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, Center } from '@chakra-ui/react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

import lovelyPlanet from '../assets/lovelyplanet.png'

// interface SignProps {
//   children: ReactNode;
// }

export function Sign() {
  return (
    
<Center  h="100vh" >
 

    <Box w="300px" h="100vh" p={4} >
      
     
      <Tabs  variant='enclosed'>
  <TabList mb='1em'>
    <Tab>Sign up </Tab>
    <Tab>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <SignInForm />
      
    </TabPanel>
    <TabPanel>

    <SignUpForm/>


    </TabPanel>
  </TabPanels>
</Tabs>
</Box>

</Center >

   
  );
}
