import {
  Center,
  Image,
  Flex,
  Text,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  useDisclosure,
  Icon,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../assests/Images/sneha_logo.png";
import "../assests/Fonts/Raleway-Bold.ttf";
import Sidebar from "./Sidebar";
import { HamburgerIcon } from "@chakra-ui/icons";

function Topbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box>
      <Center bg="#E2E2E2">
        <Button
          ref={btnRef}
          colorScheme="#D61119"
          onClick={onOpen}
          display={{ base: "block", lg: "none" }}
        >
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
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Sidebar />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

export default Topbar;
