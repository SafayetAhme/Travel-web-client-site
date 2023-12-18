import { Outlet } from "react-router-dom";
import Navbar from "../pages/home/Navbar";
import Footer from "../pages/home/Footer";


const Router = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Router;