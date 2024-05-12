

const RecommendCard = ({recommend}) => {

    const { RecommendationProductName, RecommendationProductImage, RecommendationTitle, RecommendationReason, queryId, QueryTItle, ProductName, RecommendationEmail, RecommendationName, RecommendationImage, curTime, curDate, queryEmail: email, queryName: name, queryImage: image } = recommend;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure className="h-[300px]"><img className="h-full w-full" src={RecommendationProductImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{RecommendationProductName}</h2>
                    <p title={RecommendationReason}>{RecommendationReason.slice(0, 70)}...</p>
                    <div className=" text-end">
                        <p className=" ">{curTime}</p>
                        <p className=" ">{curDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendCard;