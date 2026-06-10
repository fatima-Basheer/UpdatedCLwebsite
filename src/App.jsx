import "./index.css";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import StepsPage from "./pages/StepsPage";
import TrustedPage from "./pages/TrustedPage";
import ResultPage from "./pages/ResultPage";
import GetInTouchPage from "./pages/GetInTouchPage";
import TopicsPage from "./pages/TopicsPage";
import FooterPage from "./pages/FooterPage";

import Slider from "./pages/Slider";
function App() {
  return (
    <>
      <HomePage />
      <TrustedPage />
      <ServicesPage />
      <StepsPage />
      <ResultPage />
      <Slider />
      <TopicsPage />
      <GetInTouchPage />
      <FooterPage />
    </>
  );
}

export default App;
