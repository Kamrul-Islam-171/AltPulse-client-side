import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const QueryDetails = () => {
    const { id } = useParams();
    const [queryDetails, setQueryDetails] = useState({});
    // console.log(id);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/query/${id}`)
            .then(data => setQueryDetails(data.data))
    }, [])
    // console.log(spotDetails)
    const { _id, ProductImage, ProductBrand, ProductName, QueryTItle, BoycottingReason, recommendationCount, curTime, curDate } = queryDetails;
    return (
        <div className="pt-1">
            <Helmet><title>{ProductName}</title></Helmet>
            <div className=' flex flex-col items-center lg:flex-row gap-8 mt-[90px] container mx-auto pb-10'>
                {/* <h1>hello</h1> */}
                <div className='lg:w-[50%] ' >

                    <Fade direction="left" duration={1000}><img src={ProductImage} className=' w-full object-cover rounded-lg' alt="" /></Fade>
                    {/* <img src={property[0]?.insideImage1} className='w-full object-cover rounded-lg' alt="" /> */}
                    {/* image */}
                </div>
                <div className='space-y-3 lg:w-[49%]'>

                    <Fade direction="right" duration={1000}>
                        <h1 className='text-2xl font-semibold text-primary-color'>{ProductName}</h1>
                        <p className=''><span className='font-semibold '>Brand : </span>{ProductBrand}, {}</p>
                        <p className='text-justify'><span className='font-semibold '>Query :</span> {QueryTItle}</p>


                        <p><span className='font-semibold '>BoyCotting Reasons : </span>{BoycottingReason} </p>
                        <p><span className='font-semibold '>Recomendation : </span>{recommendationCount}</p>
                        
                    </Fade>


                </div>
            </div>
        </div>
    );
};

export default QueryDetails;