import { Center, Image, Flex, Text, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Drawer, useDisclosure, Icon, Button } from "@chakra-ui/react";
import React from "react";
import Logo from "../assests/Images/sneha_logo.png";
import "../assests/Fonts/Raleway-Bold.ttf";
import Sidebar from "./Sidebar";
import { HamburgerIcon } from '@chakra-ui/icons'

function Topbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <div>
      {/* {props.view ? (
        <>
        
        <Box h="60px" bg="#E2E2E2">
          
          <Flex>
          <Icon as={HamburgerIcon}/>
            <Center w="100%">
              <Image h={[4, 8]} src={Logo} alt="logo" /> &nbsp;&nbsp;
              <Text fontWeight="bold" fontSize={[20, 38]} color="#D61119">
                HOTEL TEAM
              </Text>
            </Center>
          </Flex>
        </Box>
          <Flex h="60px" alignItems="center" bg="#E2E2E2">
          
          <Box>
            
          </Box>
          </Flex>
        
        </>
      ) : (
        <Center bg="#E2E2E2">
          <Flex h="60px" alignItems="center">
            <Image h={[4, 8]} src={Logo} alt="logo" /> &nbsp;&nbsp;
            <Text fontWeight="bold" fontSize={[20, 38]} color="#D61119">
              HOTEL TEAM
            </Text>
          </Flex>
        </Center>
      )} */}
      
       <Center bg="#E2E2E2">
          <Button ref={btnRef} colorScheme='#D61119' onClick={onOpen} display={{base:"block",lg:"none"}}>
            <Icon as={HamburgerIcon} />
          </Button>
          <Flex h="60px" alignItems="center">
            <Image h={[4, 8]} src={Logo} alt="logo" /> &nbsp;&nbsp;
            <Text fontWeight="bold" fontSize={[20, 38]} color="#D61119">
              HOTEL TEAM
            </Text>
          </Flex>
        </Center>
      
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
        <DrawerContent >
          <DrawerCloseButton />

          <DrawerBody>
          
            <Sidebar/>
          </DrawerBody>

        </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  );
}

export default Topbar;
