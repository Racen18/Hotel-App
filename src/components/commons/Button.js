import { Button } from "@chakra-ui/react";
import React from "react";

function CommonButton(props) {
  return (
    <Button
      w={props.width}
      marginY={props.marginY}
      color={props.color}
      bg={props.bg}
      border={props.border}
      marginBottom={props.marginBottom}
    >
      {props.value}
    </Button>
  );
}

export default CommonButton;
