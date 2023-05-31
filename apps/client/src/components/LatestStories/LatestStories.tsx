import {
    Box,
    Grid,
    GridItem,
    Heading,
    SimpleGrid
} from "@chakra-ui/react"

import PostCard from "../PostCard";
export default function LatestStories({posts}){
    const cards= posts.map((item,index) =>{
      const dict=[2,1,1,1];
      return (
          <GridItem colSpan={ dict[index%4]}>      
        <PostCard
        key={item.title}
        title={item.title}
        text={item.text}
        images={[item.image]}
      />
        </GridItem>
      )
    })
    return(
     <Box padding="4">
  <Heading as="h2" size="lg" marginBottom="4" color="blue.800" marginTop="1rem">
    Latest Stories
  </Heading>
  <Grid templateColumns="repeat(2, 1fr)"
      templateRows="repeat(5, 1fr)"
      gap={1} 
      >
  
 {cards}
 
</Grid>

</Box>);
}


