import { Center, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CommonButton from "./components/commons/Button";

function NewPage() {
  return (
    <>
      <Center>
        <Text fontSize={"2xl"}>Welcome to this page</Text>
      </Center>
      <Text>
        Kindly click{" "}
        <Link to="/">
          <CommonButton
            bg={"button.yellow"}
            color={"button.red"}
            value={"here"}
          />
        </Link>
        . to go back
      </Text>
    </>
  );
}

export default NewPage;
