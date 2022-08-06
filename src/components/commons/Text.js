import { Text } from "@chakra-ui/react";
import React from "react";

function CommonText(props) {
  return (
    <Text
      paddingY={props.paddingY}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
    >
      {props.value}
    </Text>
  );
}

export default CommonText;
