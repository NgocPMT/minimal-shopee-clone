import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-dvh grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
