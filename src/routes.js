import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUs";
import AlmostTherePage from "./pages/AlmostThere";
import EditProfilePage from "./pages/EditProfile";
import ImportantInformationPage from "./pages/ImportantInformation";
import LoginPage from "./pages/Login";
import MainPage from "./pages/MainPage";
import PersonalInfoPage from "./pages/PersonalInfo";
import TestPage from "./pages/TestPage";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/teste" element={<TestPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/almost-there" element={<AlmostTherePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/personal-info" element={<PersonalInfoPage />} />
      <Route path="/edit-profile" element={<EditProfilePage />} />
      <Route path="/important-info" element={<ImportantInformationPage />} />
    </Routes>
  )
}

export default RoutesComponent;