import { Link } from "react-router-dom";


const RecentQueryCard = ({ queryData }) => {
    // console.log(queryData)
    const { _id, ProductImage, ProductBrand, ProductName, QueryTItle, BoycottingReason, recommendationCount, curTime, curDate, email, name, image } = queryData;

    return (
        <div>
            <div className="shadow-xl  h-[660px] rounded-md overflow-hidden">
                <div className="w-full h-[400px] " id="container">
                    <img className="w-full overflow-hidden object-cover h-full image1" src={ProductImage} alt="" />
                </div>
                <div className="flex gap-3 justify-end px-2">
                    <p>Posted Time : </p>
                    <p>{curTime}</p>
                    <p>{curDate}</p>
                </div>
                <div className="space-y-1 px-5 py-5 relative ">

                    <h1 className="text-xl font-medium">{ProductName}</h1>
                    <p><span className="font-medium">Brands :</span> {ProductBrand}</p>
                    <p className="absolute  lg:text-lg py-2 font-semibold -top-24 bg-base-100 px-2">{QueryTItle}!!</p>
                    <p title={BoycottingReason} className="cursor-pointer"><span className="font-medium"> Alternation Reasons : </span>{BoycottingReason.slice(0, 40)}...</p>

                    <p><span className="font-medium">Recomendation  :</span> <span>{recommendationCount}</span></p>

                    <div className="">
                        <div className="flex items-center justify-between ">
                            <p><span className="font-medium">Name : </span> {name}</p>
                            <div tabIndex={0} role="button" className=" avatar">
                                <div className="w-8 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={image} />
                                </div>
                            </div>
                        </div>
                        <p className="font-medium">{email}</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default RecentQueryCard;