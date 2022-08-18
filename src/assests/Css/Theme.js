import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    button: {
      white: "#FFFFFF",
      green: "#18B83B",
      orange: "#D61119",
      red: "red",
      yellow: "yellow",
    },
    input: {
      red: "red",
    },
    text: {
      orange: "#D61119",
      gray: "#C2C2C2",
      white: "#FFFFFF",
    },
  },
});

export default theme;
