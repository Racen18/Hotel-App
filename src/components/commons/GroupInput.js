import { InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";
import CommonInput from "./Input";

function CommonGroupInput(props) {
  return (
    <InputGroup>
      <InputLeftAddon children={props.children} bg={props.bg} />
      <CommonInput
        name={props.name}
        value={props.value}
        color={props.color}
        onChange={props.onChange}
        disabled={props.disabled}
        placeholder={props.placeholder}
        borderLeftRadius={props.borderLeftRadius}
        borderLeft={props.borderLeft}
      />
    </InputGroup>
  );
}

export default CommonGroupInput;
