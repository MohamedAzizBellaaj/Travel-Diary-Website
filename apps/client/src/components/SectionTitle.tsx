import { Heading } from '@chakra-ui/react';

interface SectionTitleProps {
  title: string;
  subTitle: string;
}
export default function SectionTitle(props: SectionTitleProps) {
  return (
    <>
      <Heading
        as='h1'
        size='lg'
        marginBottom='4'
        color='blue.800'
        marginTop='1rem'
        //  bgGradient='linear(to-r, blue.200, blue.700)'
      >
        {props.title}
      </Heading>
      <Heading
        as='h3'
        size='md'
        marginBottom='4'
        color='blue.600'
        marginTop='1rem'
      >
        {props.subTitle}
      </Heading>
    </>
  );
}
