import { Button } from "@chakra-ui/react";
import React from "react";

function CommonButton(props) {
  return (
    <Button
      children={props.value}
      type={props.type}
      onClick={props.onClick}
      w={props.width}
      marginY={props.marginY}
      color={props.color}
      bg={props.bg}
      border={props.border}
      marginBottom={props.marginBottom}
    />
  );
}

export default CommonButton;
