import { InputGroup, InputLeftAddon } from "@chakra-ui/react";
import React from "react";
import CommonSelect from "./Select";

function CommonGroupSelect(props) {
  return (
    <InputGroup>
      <InputLeftAddon children={props.children} bg={props.bg} />
      <CommonSelect
        placeholder={props.placeholder}
        borderLeft={props.borderLeft}
        borderLeftRadius={props.borderLeftRadius}
      />
    </InputGroup>
  );
}

export default CommonGroupSelect;
