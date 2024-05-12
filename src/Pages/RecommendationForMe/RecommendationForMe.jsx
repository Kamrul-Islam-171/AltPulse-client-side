import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";


const RecommendationForMe = () => {
    const [reccomForMe, setRecomForMe] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recommendation-for-me/${user?.email}`)
            .then(data => setRecomForMe(data.data))
    }, [user])

    // console.log(reccomForMe)
    return (
        <div className="container mx-auto space-y-8 pt-10">
            <Helmet>
                <title>Recommendations For Me</title>
            </Helmet>

            <h1 className="text-4xl text-center font-medium">Recommendations For Me</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
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
                        {/* row 1 */}
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

        </div>
    );
};

export default RecommendationForMe;