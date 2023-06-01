import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, Center } from '@chakra-ui/react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';




export function Sign() {
  return (
    
<Center >
{/* <Box  w="50vh" p={4} > */}
  <Tabs  borderRadius="md"  isFitted bg='white' variant='enclosed' >
  <TabList mb='1em'>
    <Tab>Sign up </Tab>
    <Tab>Sign Up</Tab>
  </TabList>

  <TabPanels>
    <TabPanel >
      <SignInForm />
    </TabPanel>
    <TabPanel>
    <SignUpForm/>
    </TabPanel>
  </TabPanels>
</Tabs>
{/* </Box> */}

</Center >

   
  );
}
