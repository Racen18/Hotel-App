import { Select } from "@chakra-ui/react";
import React from "react";

function CommonSelect(props) {
  return (
    <Select
      placeholder={props.placeholder}
      borderRadius={props.borderRadius}
      borderLeft={props.borderLeft}
      borderLeftRadius={props.borderLeftRadius}
    />
  );
}

export default CommonSelect;
