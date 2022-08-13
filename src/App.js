import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutesComponent from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
  );
}

export default App;
