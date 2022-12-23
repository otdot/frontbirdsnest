import AsideNav from "../components/AsideNav";
import DroneInfo from "../components/DroneInfo";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <div className="flex-initial w-6">
        <AsideNav />
      </div>
      <div className="flex-initial w-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
