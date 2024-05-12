import axios from "axios";
import { useEffect, useState } from "react";
import AllQueryCard from "../../Components/AllQueryCard/AllQueryCard";
import { Helmet } from "react-helmet-async";


const Queries = () => {

    const [allQuery, setAllQuery] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/queries`)
            .then(data => setAllQuery(data.data));
    }, [])

    console.log(allQuery)
    return (
        <div className="container mx-auto">
            <Helmet>
                <title>All Queries</title>
            </Helmet>
            <div className="grid gap-5 grid-cols-3">
                {
                    allQuery?.map(queryData => <AllQueryCard key={queryData._id} queryData={queryData}></AllQueryCard>)
                }
            </div>
        </div>
    );
};

export default Queries;