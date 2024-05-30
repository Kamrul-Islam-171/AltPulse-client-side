import axios from "axios";
import { useEffect, useRef, useState } from "react";
import AllQueryCard from "../../Components/AllQueryCard/AllQueryCard";
import { Helmet } from "react-helmet-async";
import { SyncLoader } from "react-spinners";


const Queries = () => {

    const [allQuery, setAllQuery] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const [gridLayout, setGridLayout] = useState('grid-cols-1');
    // const [inputValue, setInputValue] = useState('');
    // const [isSearched, setIsSearched] = useState(false);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [asc, setAsc] = useState(true);
    const inputValue = useRef('');
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);



    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/queries?sort=${asc ? 'asc' : 'dsc'}&min=${min}&max=${max}&search=${search}`)
            .then(data => {
                setAllQuery(data.data);
                setLoading(false);
            });
    }, [asc, min, max, search])

    const getData = () => {

    }

    const handleChekced = (e, x, y, index) => {
        console.log(e.target.checked);
        console.log(x, y);
        setSelectedOption(index)
        if (e.target.checked) {
            setMin(x);
            setMax(y);
        }
        else {
            setMin(0);
            setMax(100);
        }
    }

    // console.log('min = ', min);
    // console.log('max= ', max);



    const handleSerach = () => {
        

        // axios.get(`${import.meta.env.VITE_API_URL}/queries`)
        //     .then(data => {
                
        //         const searchResult = data.data.filter(item => item.ProductName.toLowerCase().includes(inputValue.current.value.toLowerCase()));
                
        //         setAllQuery(searchResult);

        //     });
        setSearch(inputValue.current.value)

        
    }
    // console.log(isSearched)

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><SyncLoader color="#36d7b7" /></div>
    }

    // console.log(allQuery)
    return (
        <>
            <div className=" h-[500px] relative">
                <img className="h-full w-full" src={'https://i.ibb.co/FhphGXG/360-F-303123713-D396-PWXk-VS4p-LX9uc-Yws-Ra8-X3yby-MJFP.jpg'} alt="" />
                <div className="absolute md:w-2/3 md:left-40 lg:w-1/2 w-2/3 left-20 lg:left-1/4 top-1/2">
                    <div className="mb-10 relative">
                        <input ref={inputValue} type="text" placeholder="Search by product name... " className="text-white bg-transparent border px-4 py-3 rounded-lg w-full" />
                        <button onClick={handleSerach} className="absolute top-[8px] right-[15px]  w-[30px] h-[30px] text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 "><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                    </div>
                </div>
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



                {/* new features */}
                <div className="flex justify-center my-10">
                    <button onClick={() => setAsc(!asc)} className="btn bg-red-500 text-white text-lg px-10">{asc ? 'High to Low Recommendation' : 'Low to High Recommendation'}</button>
                </div>

                <div className="my-5 flex justify-center gap-2 flex-col lg:ml-[40%] ml-[20%] md:ml-[30%]">
                    <div className="">
                        <input checked={selectedOption === 1} onChange={(e) => handleChekced(e, 0, 1, 1)} className="" type="checkbox" name="lessThan2" id="" /> Less than 2 Recommendation
                    </div>
                    <div>
                        <input checked={selectedOption === 2} onChange={(e) => handleChekced(e, 2, 5, 2)} type="checkbox" name="greaterThan3" id="" /> 2-5 Recommendation
                    </div>
                </div>

                {/* <div className="mb-10">
                <label className="border-primary input input-bordered flex items-center gap-2 ">
                    <input type="text" className="grow " placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div> */}

                {/* <div className="mb-10 relative">
                    <input ref={inputValue} type="text" placeholder="Search by product name... " className="border border-primary-color px-4 py-3 rounded-lg w-full" />
                    <button onClick={handleSerach} className="absolute top-[8px] right-[15px]  w-[30px] h-[30px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 "><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
                </div> */}
                <div className={`grid gap-5 ${gridLayout}`}>
                    {
                        allQuery?.map(queryData => <AllQueryCard key={queryData._id} queryData={queryData}></AllQueryCard>)
                    }
                </div>
            </div></>
    );
};

export default Queries;