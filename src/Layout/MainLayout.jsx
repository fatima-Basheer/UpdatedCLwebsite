import { useEffect, useRef } from "react"; // 1. Added useRef
import { useLocation, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Result from "../pages/Home/Result";
import Slider from "../pages/Home/Slider";
import Topics from "../pages/Home/Topics";

function MainLayout() {
  const { pathname } = useLocation();
  const wrapperRef = useRef(null);

  useEffect(() => {

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const rootDiv = document.getElementById("root");
    if (rootDiv) rootDiv.scrollTop = 0;

    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = 0;
    }
  }, [pathname]);

  return (
  
    <div id="app-layout-wrapper" ref={wrapperRef} className="w-full min-h-screen native-scroll-fix">
      <Header />
      <main>
        <Outlet />
      </main>
      <Result />
      <Slider />
      <Topics />
      <Footer />
    </div>
  );
}

export default MainLayout;
