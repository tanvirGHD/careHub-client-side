import { Outlet } from "react-router-dom";
import Navbar from "../components/commonPage/Navbar";
import Footer from "../components/commonPage/Footer";



const MainLayout = () => {
     return (
          <div>
               <Navbar></Navbar>
               <div className={`${location.pathname === "/" ? "w-full" : "max-w-7xl"} mx-auto`}>
                    <Outlet></Outlet>
               </div>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;
