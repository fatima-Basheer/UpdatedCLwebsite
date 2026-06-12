import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutUsPage";
import BlogPage from "./pages/Blog/BlogPage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import CareersPage from "./pages/Careers/CareersPage";
import AiMl from "./pages/Services/AiMl";
import Automation from "./pages/Services/Automation";
import Cybersecurity from "./pages/Services/Cybersecurity";
import Devops from "./pages/Services/Devops";
import Enterprise from "./pages/Services/Enterprise";
import WebMobile from "./pages/Services/WebMobile";
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/services/ai-ml" element={<AiMl />} />
        <Route path="/services/web-mobile" element={<WebMobile />} />
        <Route path="/services/automation" element={<Automation />} />
        <Route path="/services/devops" element={<Devops />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/enterprise" element={<Enterprise />} />
      </Route>
    </Routes>
  );
}

export default App;
