import { Select } from "@chakra-ui/react";
import React from "react";

function CommonSelect(props) {
  return (
    <Select
      disabled={props.disabled}
      onChange={(e) => props.handleSelectedValue(e.target.value)}
      placeholder={props.placeholder}
      borderRadius={props.borderRadius}
      borderLeft={props.borderLeft}
      borderLeftRadius={props.borderLeftRadius}
    >
      {props.option &&
        props.option.map((data, index) => (
          <option key={index}>{data.name}</option>
        ))}
    </Select>
  );
}

export default CommonSelect;
