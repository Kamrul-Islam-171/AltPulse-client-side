import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import QueryCard from "../../Components/QueryCard/QueryCard";
import { SyncLoader } from "react-spinners";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { motion } from "framer-motion";


const MyQuery = () => {

    // useEffect(() => {
    //     window.location.reload();
    // }, [])
    // setTimeout(function() {
    //     window.location.reload();
    // }, 1);

    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [gridLayout, setGridLayout] = useState('grid-cols-1');



    const [myQuery, setMyQuery] = useState([]);
    const [isdeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        // axios.get(`${import.meta.env.VITE_API_URL}/queries/${user?.email}`, {withCredentials:true})
        //     .then(data => setMyQuery(data.data))
        axiosSecure(`/queries/${user?.email}`)
            .then(data => setMyQuery(data.data))
    }, [user, isdeleted])

    console.log(myQuery)


    if (loading) {
        return <div className="flex justify-center items-center h-screen"><SyncLoader color="#36d7b7" /></div>
    }





    return (
        <div>
            <Helmet>
                <title>My Queries</title>
            </Helmet>
            <div>
                {/* bannar */}
                <div className="  ">
                    <div className="bg-[url('https://i.ibb.co/ygQ24Nd/sale-banner-poster-flyer-design-with-pattern-on-dark-black-canvas-and-grunge-texture-background-mode.jpg')] h-[500px] bg-no-repeat object-cover bg-center w-full">
                        <div className="flex flex-col gap-8 justify-center items-center  px-10 h-[500px] bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                            <h1 className="lg:text-5xl text-2xl md:text-3xl text-white font-medium">Add Your Query now!</h1>
                            {/* <Link to={'/add-query'}><button className="lg:text-lg md:text-lg btn hover:text-primary-color hover:bg-white rounded-full hover:border-primary-color bg-primary-color text-white font-medium  border-none px-8"> Add Query</button></Link> */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ rotate: 360, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 250,
                                    damping: 100
                                }}
                                className=""
                            >
                                <Link to={'/add-query'}><button className="lg:text-lg md:text-lg btn hover:text-primary-color hover:bg-white rounded-full hover:border-primary-color bg-primary-color text-white font-medium  border-none px-8"> Add Query</button></Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-16 space-y-10">
                <h1 className="text-5xl font-medium text-center">My Queries</h1>
                <div className="flex gap-5 justify-center mb-10 pt-10">
                    <button onClick={() => setGridLayout('grid-cols-1')} className="btn mt-2 bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5">1 Column Layout</button>
                    <button onClick={() => setGridLayout('grid-cols-2')} className="lg:block md:block hidden btn mt-2 bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5">2 Column Layout</button>
                    <button onClick={() => setGridLayout('grid-cols-3')} className="hidden lg:block btn mt-2 bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5">3 Column Layout</button>
                </div>
                <div>
                    {
                        myQuery.length > 0 ? <div className={`grid gap-5 ${gridLayout}`}>
                            {
                                myQuery?.map(item => <QueryCard key={item._id} queryData={item} isdeleted={isdeleted} setIsDeleted={setIsDeleted}></QueryCard>)
                            }
                        </div> :
                            <div className=" flex flex-col items-center gap-5 justify-center">
                                <div className="lg:w-1/3">
                                    <img className="w-full h-full" src={'https://i.ibb.co/Y7gxLpX/no-data-found-illustration-sites-banner-design-vector-illustration-620585-1690.jpg'} alt="" />
                                </div>
                                <Link to={'/add-query'}><button className="lg:text-lg md:text-lg btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-medium  border-none px-5"> Add Query</button></Link>

                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyQuery;