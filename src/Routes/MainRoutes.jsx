import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const MainRoutes = () => {
    // const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            {/* <Outlet></Outlet> */}
            <div className={`mt-[80px]`}>
                <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainRoutes;