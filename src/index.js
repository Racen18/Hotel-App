import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react/";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ChakraProvider>
      <AppRoutes />
    </ChakraProvider>
  </Provider>
);
