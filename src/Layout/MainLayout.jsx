import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Result from "../pages/Home/Result";
import Slider from "../pages/Home/Slider";
import Topics from "../pages/Home/Topics";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Result />
      <Slider />
      <Topics/>
      <Footer />
    </>
  );
}

export default MainLayout;
