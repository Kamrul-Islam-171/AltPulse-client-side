import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

import { MdDeleteOutline } from "react-icons/md";


const MyRecommendations = () => {
    const { user } = useContext(AuthContext);
    const [myRecommendation, setMyRecommendation] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/my-recommendation/${user?.email}`)
            .then(data => setMyRecommendation(data.data))
    }, [user])

    // console.log(myRecommendation)

    const handleDelete = (id) => {
        console.log(id);
    }
    return (
        <div className="container mx-auto pt-10 space-y-5">
            <h1 className="text-5xl text-center font-medium">My Recommendations</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="text-lg">Product Name</th>
                            <th className="text-lg">Recommendation Reason</th>
                            <th className="text-lg">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myRecommendation?.map((item, idx) =>
                                <tr key={item._id}>
                                    <th>{idx + 1}</th>
                                    <td>{item.RecommendationProductName}</td>
                                    <td title={item.RecommendationReason}>{item.RecommendationReason.slice(0,50)}...</td>
                                    <td ><button className="text-xl " title="Remove" onClick={() => handleDelete(item._id)}><MdDeleteOutline /></button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRecommendations;