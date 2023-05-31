import {Avatar, Box, Button, Fade, Image, Text, useDisclosure} from "@chakra-ui/react";
import heart from '../assets/navbar_icons/heart.png';
import discover from '../assets/navbar_icons/discover.png';
import city from '../assets/navbar_icons/city-hall.png';
import user from '../assets/navbar_icons/user.png';
import house from '../assets/navbar_icons/house.png';
import navBar from '../assets/navbar_icons/menu.png';
function NavBarIcon(props) {
        return (
            <Box
                borderRadius="30"
                width={"5vw"}
                _hover={{ transform: 'scale(1.4) ' ,margin:"0 40px",}}
                transition='all 0.2s ease' display="flex" flexDirection={"column"} alignItems="Center" >
                    <Avatar
                        size='sm'
                        src={props.image}
                    />
                    <Text fontWeight={"bold"} p={"5px"}> {props.title}</Text>
            </Box>
        );
}
function Navbar(props) {
        const { isOpen, onToggle } = useDisclosure()

        return (
            <>
                    <Button
                        width={"10vw"}
                        bg={"rgb(230,239,246)"}
                        bottom={5}
                        left={"3%"}
                        position={"fixed"}
                        onClick={onToggle}
                        zIndex={5}
                    ><Image src={navBar}
                            width={"20px"}/>
                    </Button>
                    <Fade in={isOpen}  >
                            <div>
                                    <Box backgroundColor="rgb(230,239,246)" position={"fixed"} zIndex={"3"}  width="100px" height="80vh"  m="5vh 5vw 10vh 5vw"     borderRadius="30" display="flex" flexDirection={"column"}
                                         justifyContent="space-evenly" alignItems="Center">
                                            <NavBarIcon image={heart} title={"WishList"} />
                                            <NavBarIcon image={discover} title={"WishList"}/>
                                            <NavBarIcon image={city} title={"WishList"}/>
                                            <NavBarIcon image={user} title={"Account"}/>
                                            <NavBarIcon image={house} title={"Home"}/>
                                    </Box>
                            </div>
                    </Fade>
            </>
        )

}

export default Navbar;

