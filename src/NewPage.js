import { Button, Center, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function NewPage() {
  return (
    <>
      <Center>
        <Text fontSize={"2xl"}>Welcome to this page</Text>
      </Center>
      <Text>
        Kindly click <Link to="/"><Button bg={'yellow'} color={'red'}>here</Button></Link>. to go back
      </Text>
    </>
  );
}

export default NewPage;
