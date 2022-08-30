import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUs";
import TestPage from "./pages/TestPage";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="/teste" element={<TestPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  )
}

export default RoutesComponent;