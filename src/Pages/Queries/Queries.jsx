import axios from "axios";
import { useEffect, useState } from "react";
import AllQueryCard from "../../Components/AllQueryCard/AllQueryCard";
import { Helmet } from "react-helmet-async";


const Queries = () => {

    const [allQuery, setAllQuery] = useState([]);
    const [gridLayout, setGridLayout] = useState('grid-cols-1');

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
            <div className="flex gap-5 justify-center mb-10 pt-10">
                <button onClick={() => setGridLayout('grid-cols-1')} className="btn mt-2 bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5">1 Column Layout</button>
                <button  onClick={() => setGridLayout('grid-cols-2')} className="lg:block md:block hidden btn mt-2 bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5">2 Column Layout</button>
                <button onClick={() => setGridLayout('grid-cols-3')} className="hidden lg:block btn mt-2 bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5">3 Column Layout</button>
            </div>
            <div className={`grid gap-5 ${gridLayout}`}>
                {
                    allQuery?.map(queryData => <AllQueryCard key={queryData._id} queryData={queryData}></AllQueryCard>)
                }
            </div>
        </div>
    );
};

export default Queries;