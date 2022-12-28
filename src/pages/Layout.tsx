import AsideNav from "../components/AsideNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-initial w-6">
          <AsideNav />
        </div>
        <div className="flex-initial w-screen">
          <Outlet />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
