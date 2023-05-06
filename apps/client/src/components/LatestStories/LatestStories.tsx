import {
    Box,
    Heading,
    SimpleGrid
} from "@chakra-ui/react"
import eiffelTower from '../../assets/eiffel-tower.webp';

import PostCard from "../PostCard";
export default function LatestStories(){
    const obj ={

         title : 'Paris',
         text :
          'Sint aute cillum voluptate eiusmod nostrud eu proident ex nostrud elit proident anim labore in. Nostrud ad non dolor sit consectetur excepteur culpa veniam. Qui ipsum ex ut qui dolor ipsum fugiat id excepteur culpa. Duis reprehenderit do eu voluptate proident. Aliqua ex nulla magna commodo veniam elit ex.',
         image : eiffelTower
    }
    const posts= new Array(8).fill(obj)
    
    const cards= posts.map((item) =>{
        return (
        <PostCard
        key={item.title}
        title={item.title}
        text={item.text}
        images={[item.image]}
      />
      )
    })
    return(
     <Box padding="4">
  <Heading as="h2" size="lg" marginBottom="4" color="blue.800" marginTop="1rem">
    Latest Stories
  </Heading>
  <SimpleGrid columns={[1,2,3]} >
    {cards}
  </SimpleGrid>
</Box>);
}


