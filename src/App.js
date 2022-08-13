import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesComponent from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <RoutesComponent />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
