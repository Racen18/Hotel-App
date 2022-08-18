import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react/";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";
import store from "./store";
import theme from "./assests/Css/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  </Provider>
);
