import { Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="/teste" element={<TestPage />} />
    </Routes>
  )
}

export default RoutesComponent;