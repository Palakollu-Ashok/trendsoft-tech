import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import About from "./Components/About/About";
import Homepage from "./Components/Pages/Homepage";
import Footer from "./Components/Common/Footer";
import DigitalAccessibility from "./Components/Pages/DigitalAccessibility/DigitalAccessibilityPage";
import TestingPage from "./Components/Pages/Testing/TestingPage";
import CyberSecurityPage from "./Components/Pages/CyberSecurity/CyberSecurityPage";
import WebAccessibilityPage from "./Components/Pages/DigitalAccessibility/WebAccessibilityPage";
import MobileAccessPage from "./Components/Pages/DigitalAccessibility/MobileAccessPage";
import DocumentAccessibilityPage from "./Components/Pages/DigitalAccessibility/DocumentAccessibilityPage";
import IndesignAccessibilitypage from "./Components/Pages/DigitalAccessibility/IndesignAccessibilitypage";

import ThickClientPage from "./Components/Pages/CyberSecurity/ThickClientPage";
import SecureCodePage from "./Components/Pages/CyberSecurity/SecureCodePage";
import DataBaseSecurityPage from "./Components/Pages/CyberSecurity/DataBaseSecurityPage";
import FunctionalTestingPage from "./Components/Pages/Testing/FunctionalTestingPage";
import PerformanceTestingPage from "./Components/Pages/Testing/PerformanceTestingPage";
import UsabilityTestingPage from "./Components/Pages/Testing/UsabilityTestingPage";
import GetStartPage from "./Components/Pages/GetStartPage";
import PrivacyPolicy from "./Components/GetStarted/PrivacyPolicy";

import WhoWeServePage from "./Components/Pages/WhoWeServePage";
import CareerPage from "./Components/Pages/CareerPage";
import SkipToMainContent from "./Components/Common/SkipToMainContent";
import ApiKeyPage from "./Components/Pages/CyberSecurity/ApiKeyPage";
import MobileApiPage from "./Components/Pages/CyberSecurity/MobileAccessibilitypage";
import WebApiPage from "./Components/Pages/CyberSecurity/WebApiPage";
import AboutPage from "./Components/Pages/AboutPage";
function App() {
  return (
    <>
      <SkipToMainContent />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        {/* Our Solutions */}
        {/* Digital Accessibility */}
        <Route
          path="/DigitalAccessibility"
          element={<DigitalAccessibility />}
        />
        <Route
          path="/TrendSoft/oursolutions/WebAccess-DigitalAccessibility"
          element={<WebAccessibilityPage />}
        />
        <Route
          path="/TrendSoft/oursolutions/Mobile-Acessibility"
          element={<MobileAccessPage />}
        />
        <Route
          path="/TrendSoft/oursolutions/DocumentAccessibilityPage"
          element={<DocumentAccessibilityPage />}
        />
        <Route
          path="/TrendSoft/oursolutions/IndesignAccessibilitypage"
          element={<IndesignAccessibilitypage />}
        />
        {/* Cyber Security Accessibility */}
        <Route
          path="/TrendSoft/oursolutions/CyberSecurity"
          element={<CyberSecurityPage />}
        />
        <Route
          path="/TrendSoft/oursolutions/CyberSecurity/WebApiSecurity"
          element={<WebApiPage />}
        />
        <Route
          path="/TrendSoft/oursolutions/CyberSecurity/ApiKey"
          element={<ApiKeyPage />}
        />
        <Route
          path="/TrendSoft/oursolutions/CyberSecurity/MobApiSecurity"
          element={<MobileApiPage />}
        />

        <Route
          path="/TrendSoft/oursolutions/CyberSecurity/ThickClientPage"
          element={<ThickClientPage />}
        />

        <Route
          path="/TrendSoft/oursolutions/CyberSecurity/SecureCodePage"
          element={<SecureCodePage />}
        />
        <Route
          path="/TrendSoft/oursolutions/CyberSecurity/DataBaseSecurityPage"
          element={<DataBaseSecurityPage />}
        />

        {/* Testing Accessibility */}
        <Route
          path="/TrendSoft/oursolutions/Testing"
          element={<TestingPage />}
        />
        <Route
          path="/TrendSoft/oursolutions/Testing/FunctionalTesting"
          element={<FunctionalTestingPage />}
        />

        <Route
          path="/TrendSoft/oursolutions/Testing/PerformanceTesting"
          element={<PerformanceTestingPage />}
        />
        <Route
          path="/TrendSoft/oursolutions/Testing/UsabilityTesting"
          element={<UsabilityTestingPage />}
        />

        {/* GetStarted */}

        <Route path="/TrendSoft/ContactUs" element={<GetStartPage />} />

        {/* Privacy policy */}
        <Route path="/TrendSoft/Privacy-Policy" element={<PrivacyPolicy />} />

        {/* About Us */}

        <Route path="/TrendSoft/about-Us" element={<AboutPage />} />
        {/* Career */}
        <Route path="/TrendSoft/Career" element={<CareerPage />} />

        {/* WhoWeServe */}

        <Route path="/TrendSoft/WhoWeServe" element={<WhoWeServePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
