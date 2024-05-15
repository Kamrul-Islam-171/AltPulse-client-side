import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";

import { MdDeleteOutline } from "react-icons/md";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { SyncLoader } from "react-spinners";


const MyRecommendations = () => {
    const { user } = useContext(AuthContext);
    const [myRecommendation, setMyRecommendation] = useState([]);
    const [isDelete, SetIsDelete] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/my-recommendation/${user?.email}`, { withCredentials: true })
            .then(data => {
                setMyRecommendation(data.data);
                setLoading(false)
            })

    }, [user, isDelete])



    const handleDelete = (id, queryId) => {
        console.log(queryId);
        axios.delete(`${import.meta.env.VITE_API_URL}/deleteRecommendation/${id}`)
            .then(data => {
                if (data.data.deletedCount) {
                    toast.success('Successfully deleted');
                    SetIsDelete(!isDelete)
                }
                console.log(data.data)
            })
        axios.patch(`${import.meta.env.VITE_API_URL}/recommendation-decrease/${queryId}`)
            .then(data => console.log(data.data))
    }


    // if (loading) {
    //     return <div className="flex justify-center items-center h-screen"><SyncLoader color="#36d7b7" /></div>
    // }
    return (
        <>
            <div className=" h-[100px]">
                <img className="h-full w-full" src={'https://i.ibb.co/FhphGXG/360-F-303123713-D396-PWXk-VS4p-LX9uc-Yws-Ra8-X3yby-MJFP.jpg'} alt="" />
            </div>
            <div className="container mx-auto pt-10 space-y-5">
                <Helmet>
                    <title>My Recommendations</title>
                </Helmet>
                <h1 className="text-4xl text-center font-medium">My Recommendations</h1>
                {
                    loading === false ? 
                    <div className="overflow-x-auto">
                    <table className="table">
                        
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-lg">Product Name</th>
                                <th className="text-lg">Recommendation Reason</th>
                                <th className="text-lg">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                myRecommendation?.map((item, idx) =>
                                    <tr key={item._id}>
                                        <th>{idx + 1}</th>
                                        <td>{item.RecommendationProductName}</td>
                                        <td title={item.RecommendationReason}>{item.RecommendationReason.slice(0, 50)}...</td>
                                        <td ><button className="text-xl " title="Remove" onClick={() => handleDelete(item._id, item.queryId)}><MdDeleteOutline /></button></td>
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

export default MyRecommendations;