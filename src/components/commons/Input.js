import { Input } from "@chakra-ui/react";
import React from "react";

function CommonInput(props) {
  return (
    <Input
      readOnly={props.readOnly}
      name={props.name}
      defaultValue={props.defaultValue}
      color={props.color}
      value={props.value}
      disabled={props.disabled}
      borderLeftRadius={props.borderLeftRadius}
      borderLeft={props.borderLeft}
      placeholder={props.placeholder}
      borderRadius={props.borderRadius}
      onChange={props.onChange}
    />
  );
}

export default CommonInput;
