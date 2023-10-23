import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import { ButtonStyle } from "./components/Button.tsx";
import { RadioStyle } from "./components/Radio.tsx";

const theme = extendTheme({
  fonts: {
    body: "Lato",
  },
  components: {
    Button: ButtonStyle,
    RadioGroup: RadioStyle,
    Radio: RadioStyle,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
