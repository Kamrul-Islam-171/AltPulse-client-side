import axios from "axios";
import { useEffect, useRef, useState } from "react";
import AllQueryCard from "../../Components/AllQueryCard/AllQueryCard";
import { Helmet } from "react-helmet-async";
import { SyncLoader } from "react-spinners";


const Queries = () => {

    const [allQuery, setAllQuery] = useState([]);
    const [gridLayout, setGridLayout] = useState('grid-cols-1');
    // const [inputValue, setInputValue] = useState('');
    const [isSearched, setIsSearched] = useState(false);
    const [loading, setLoading] = useState(true)
    const inputValue = useRef('');

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/queries`)
            .then(data => {
                setAllQuery(data.data);
                setLoading(false);
            });
    }, [])

    const getData = () => {

    }

    const handleSerach = () => {
        // setLoading(true);
        // console.log(inputValue.current.value)
        // setIsSearched(!isSearched)

        axios.get(`${import.meta.env.VITE_API_URL}/queries`)
            .then(data => {
                // setAllQuery(data.data)
                const searchResult = data.data.filter(item => item.ProductName.toLowerCase().includes(inputValue.current.value.toLowerCase()));
                // console.log(searchResult)
                setAllQuery(searchResult);

            });

        // const searchResult = allQuery.filter(item => item.ProductName.toLowerCase().includes(inputValue.current.value.toLowerCase()));

        // setAllQuery(searchResult);
    }

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><SyncLoader color="#36d7b7" /></div>
    }

    // console.log(allQuery)
    return (
        <>
        <div className="bg-black h-[100px]">

        </div>
            <div className="container mx-auto">
                <Helmet>
                    <title>All Queries</title>
                </Helmet>



                <div className="flex gap-5 justify-center mb-10 pt-10">
                    <button onClick={() => setGridLayout('grid-cols-1')} className="btn mt-2 bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5">1 Column Layout</button>
                    <button onClick={() => setGridLayout('grid-cols-2')} className="lg:block md:block hidden btn mt-2 bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5">2 Column Layout</button>
                    <button onClick={() => setGridLayout('grid-cols-3')} className="hidden lg:block btn mt-2 bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5">3 Column Layout</button>
                </div>

                {/* <div className="mb-10">
                <label className="border-primary input input-bordered flex items-center gap-2 ">
                    <input type="text" className="grow " placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div> */}

                <div className="mb-10 relative">
                    <input ref={inputValue} type="text" placeholder="Search by product name... " className="border border-primary-color px-4 py-3 rounded-lg w-full" />
                    <button onClick={handleSerach} className="absolute top-[8px] right-[15px]  w-[30px] h-[30px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 "><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                </div>
                <div className={`grid gap-5 ${gridLayout}`}>
                    {
                        allQuery?.map(queryData => <AllQueryCard key={queryData._id} queryData={queryData}></AllQueryCard>)
                    }
                </div>
            </div></>
    );
};

export default Queries;