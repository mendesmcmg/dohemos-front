import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUs";
import AlmostTherePage from "./pages/AlmostThere";
import EditProfilePage from "./pages/EditProfile";
import LoginPage from "./pages/Login";
import PersonalInfoPage from "./pages/PersonalInfo";
import TestPage from "./pages/TestPage";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="/teste" element={<TestPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/almost-there" element={<AlmostTherePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/personal-info" element={<PersonalInfoPage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
    </Routes>
  )
}

export default RoutesComponent;