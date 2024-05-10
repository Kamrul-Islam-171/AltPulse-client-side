import { Link } from "react-router-dom";

import { CiEdit } from "react-icons/ci";
import { MdAutoDelete, MdDelete } from "react-icons/md";
const QueryCard = ({ queryData }) => {
    const { _id, ProductImage, ProductBrand, ProductName, QueryTItle, BoycottingReason, recommendationCount, curTime, curDate } = queryData;
    return (
        <div>
            <div className="shadow-md border border-gray-200 h-[655px] ">
                <div className="w-full h-[400px] overflow-hidden" id="container">
                    <img className="w-full object-cover h-full image1" src={ProductImage} alt="" />
                </div>
                <div className="flex gap-3 justify-end px-2">
                    <p>Posted Time : </p>
                    <p>{curTime}</p>
                    <p>{curDate}</p>
                </div>
                <div className="space-y-1 px-5 py-5 relative">

                    <h1 className="text-xl font-medium">{ProductName}</h1>
                    <p>Brands : {ProductBrand}</p>
                    <p className="absolute  text-lg py-2 font-semibold -top-24 bg-base-100 px-2">{QueryTItle}!!</p>
                    <p title={BoycottingReason} className="cursor-pointer">Boycotting Reasons : {BoycottingReason.slice(0, 40)}...</p>

                    <p>Recomendation  : <span>{recommendationCount}</span></p>


                    <div className="flex gap-4">
                        <Link to={`/query/${_id}`}><button className="btn mt-2 bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5">View Details</button></Link>
                        <Link to={`/update/${_id}`}><button  title="Edit" className="btn mt-2 text-2xl bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5"><CiEdit></CiEdit></button></Link>
                        <button title="Delete" className="btn text-2xl mt-2 bg-white text-primary-color hover:bg-primary-color hover:text-white border border-primary-color px-5"><MdDelete></MdDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;


