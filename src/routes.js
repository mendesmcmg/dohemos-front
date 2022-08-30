import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUs";
import AlmostTherePage from "./pages/AlmostThere";
import LoginPage from "./pages/Login";
import TestPage from "./pages/TestPage";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="/teste" element={<TestPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/almost-there" element={<AlmostTherePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default RoutesComponent;