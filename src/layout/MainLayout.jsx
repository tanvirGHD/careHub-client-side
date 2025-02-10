import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/commonPage/Navbar";
import Footer from "../components/commonPage/Footer";

const MainLayout = () => {
     const location = useLocation();
     const isHomeOrDashboard = location.pathname === "/" || location.pathname === "/dashboard";

     return (
          <div className="bg-gradient-to-r from-[#E0EAFD] via-[#CAE4F7] to-[#D2F4F4]">
               <Navbar />
               <div className={`${isHomeOrDashboard ? "w-full" : "max-w-7xl"} mx-auto`}>
                    <Outlet />
               </div>
               <Footer />
          </div>
     );
};

export default MainLayout;
