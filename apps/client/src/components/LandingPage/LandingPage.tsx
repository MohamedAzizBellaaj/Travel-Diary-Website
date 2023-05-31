import HeroSection from "../HeroSection/HeroSection";
import LatestStories from "../LatestStories/LatestStories";
import eiffelTower from '../../assets/eiffel-tower.webp';
import ImageSection from "../ImageSection/ImageSection";




const obj ={
    title : 'Paris',
    text :
     'Sint aute cillum voluptate eiusmod nostrud eu proident ex nostrud elit proident anim labore in. Nostrud ad non dolor sit consectetur excepteur culpa veniam. Qui ipsum ex ut qui dolor ipsum fugiat id excepteur culpa. Duis reprehenderit do eu voluptate proident. Aliqua ex nulla magna commodo veniam elit ex.',
    image : eiffelTower
}
const posts= new Array(8).fill(obj)



export default function LandingPage(){
    return (
        <>
        <HeroSection />
        {/* <LatestStories posts={posts}/> */}
        <ImageSection posts={posts} />
        </> 
    )
}