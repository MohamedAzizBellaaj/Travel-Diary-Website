import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
} from '@chakra-ui/react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

export function Sign() {
  return (
    <Center  bgGradient='linear(to-r, blue.700, blue.200)'>
      {/* <Box  w="50vh" p={4} > */}
      <Tabs
        borderRadius='md'
        isFitted
        bg='white'
        variant='enclosed'
        w="40vw"
        
      >
        <TabList mb='1em'>
          <Tab>Sign In</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel >
            <SignInForm />
          </TabPanel>
          <TabPanel>
            <SignUpForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
}
