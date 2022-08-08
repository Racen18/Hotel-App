import { Input } from "@chakra-ui/react";
import React from "react";

function CommonInput(props) {
  return (
    <Input
      color={props.color}
      value={props.value !== 0 ? props.value : ""}
      disabled={props.disabled}
      borderLeftRadius={props.borderLeftRadius}
      borderLeft={props.borderLeft}
      placeholder={props.placeholder}
      borderRadius={props.borderRadius}
      onChange={(e) => props.handleSelectedValue(e.target.value)}
    />
  );
}

export default CommonInput;
