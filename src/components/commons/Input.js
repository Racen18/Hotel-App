import { Input } from "@chakra-ui/react";
import React from "react";

function CommonInput(props) {
  return (
    <Input
      borderLeftRadius={props.borderLeftRadius}
      borderLeft={props.borderLeft}
      placeholder={props.placeholder}
      borderRadius={props.borderRadius}
    />
  );
}

export default CommonInput;
