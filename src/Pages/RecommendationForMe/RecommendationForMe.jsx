import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { SyncLoader } from "react-spinners";


const RecommendationForMe = () => {
    const [reccomForMe, setRecomForMe] = useState([]);
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recommendation-for-me/${user?.email}`, { withCredentials: true })
            .then(data => {
                setRecomForMe(data.data);
                setLoading(false)
            })
    }, [user])


    // if (loading) {
    //     return <div className="flex justify-center items-center h-screen"><SyncLoader color="#36d7b7" /></div>
    // }

    // console.log(reccomForMe)
    return (
        <>
            <div className=" h-[100px]">
                <img className="h-full w-full" src={'https://i.ibb.co/FhphGXG/360-F-303123713-D396-PWXk-VS4p-LX9uc-Yws-Ra8-X3yby-MJFP.jpg'} alt="" />
            </div>
            <div className="container mx-auto space-y-8 pt-10">
                <Helmet>
                    <title>Recommendations For Me</title>
                </Helmet>

                <h1 className="text-4xl text-center font-medium">Recommendations For Me</h1>
                {
                    loading === false ? <div className="overflow-x-auto">
                        <table className="table">

                            <thead>
                                <tr>
                                    <th></th>
                                    <th className="text-lg">Product Name</th>
                                    <th className="text-lg">Recommendation Reason</th>
                                    <th className="text-lg">Recommender</th>
                                    <th className="text-lg">Recommender Email</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    reccomForMe?.map((item, idx) =>
                                        <tr key={item._id}>
                                            <th>{idx + 1}</th>
                                            <td>{item.RecommendationProductName}</td>
                                            <td title={item.RecommendationReason}>{item.RecommendationReason.slice(0, 50)}...</td>
                                            <td >{item.RecommendationName}</td>
                                            <td >{item.RecommendationEmail}</td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                        :

                        <div className="flex justify-center items-center "><SyncLoader color="#36d7b7" /></div>
                }
            </div>
        </>
    );
};

export default RecommendationForMe;