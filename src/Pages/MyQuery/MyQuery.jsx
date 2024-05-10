import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import QueryCard from "../../Components/QueryCard/QueryCard";


const MyQuery = () => {

    const { user } = useContext(AuthContext);


    const [myQuery, setMyQuery] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/queries/${user?.email}`)
            .then(data => setMyQuery(data.data))
    }, [user])

    console.log(myQuery)
    // if(myQuery) {
    //     return <p className="text-7xl">NO Data.....</p>
    // }


    return (
        <div>
            <Helmet>
                <title>My Queries</title>
            </Helmet>
            <div>
                {/* bannar */}
                <div className=" container mx-auto mt-16">
                    <div className="bg-[url('https://i.ibb.co/88pGFfS/k-ZYEd-UGVyymd9-Jqo-CUL2-B4.jpg')] h-[500px] bg-no-repeat object-cover bg-center w-full">
                        <div className="flex flex-col gap-8 justify-center items-center  px-10 h-[500px] bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                            <h1 className="lg:text-5xl text-2xl md:text-3xl text-white font-medium">Add Your Query now!</h1>
                            <Link to={'/add-query'}><button className="lg:text-lg md:text-lg btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-medium  border-none px-5"> Add Query</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-16 space-y-10">
                <h1 className="text-5xl font-medium">My Queries</h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        myQuery?.map(item => <QueryCard key={item._id} queryData={item}></QueryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyQuery;