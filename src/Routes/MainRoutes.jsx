import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import NavBar2 from "../Components/Navbar2/NavBar2";


const MainRoutes = () => {
    // const navigation = useNavigation();
    return (
        <div>
            {/* <Header></Header> */}
            <NavBar2></NavBar2>
            
            <div>
                <Outlet></Outlet>
            </div>
            {/* <div className={`mt-[80px]`}>
                <Outlet></Outlet>
            </div> */}
            <div className="mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainRoutes;