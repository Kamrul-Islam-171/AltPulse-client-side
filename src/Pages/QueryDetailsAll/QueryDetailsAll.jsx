import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import RecommendCard from "../../Components/RecommendCard/RecommendCard";


const QueryDetailsAll = () => {
    const { id } = useParams();
    const [queryDetails, setQueryDetails] = useState({});
    const [allRecommendation, setAllRecommendation] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    // console.log(id);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/query/${id}`)
            .then(data => setQueryDetails(data.data))

        axios.get(`${import.meta.env.VITE_API_URL}/query-recommendation/${id}`)
            .then(data => setAllRecommendation(data.data))
    }, [])
    console.log(allRecommendation)
    let { _id, ProductImage, ProductBrand, ProductName, email, name, image, QueryTItle, BoycottingReason, recommendationCount, curTime, curDate } = queryDetails;

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { isSubmitSuccessful },
        formState: { errors },
    } = useForm({
        criteriaMode: "all",
        // mode: "onChange"
    })

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

    const onSubmit = async (data) => {
        const RecommendationProductName = data.RecommendationProductName;
        const RecommendationTitle = data.RecommendationTitle;
        const RecommendationProductImage = data.RecommendationProductImage;
        const RecommendationReason = data.RecommendationReason;
        const queryId = _id;



        const RecommendationEmail = user?.email;
        const RecommendationName = user?.displayName;
        const RecommendationImage = user?.photoURL;
        // recommendationCount = recommendationCount + 1;
        const currentDate = new Date();

        // if(RecommendationEmail === email) {
        //     alert('You can not recomend')
        // }

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();


        let hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        const amPM = hours >= 12 ? 'PM' : 'AM';


        hours = hours % 12 || 12;

        const curDate = `${day}/${month}/${year}`;
        const curTime = `${hours}:${minutes}:${seconds}, ${amPM}`;


        const recommendation = { RecommendationProductName, RecommendationProductImage, RecommendationTitle, RecommendationReason, queryId, QueryTItle, ProductName, RecommendationEmail, RecommendationName, RecommendationImage, recommendationCount, curTime, curDate, queryEmail: email, queryName: name, queryImage: image };

        // console.log(recommendation)

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/recommendation`, recommendation);
            await axios.patch(`${import.meta.env.VITE_API_URL}/recommendation/${_id}`)

            console.log(data);
            toast.success('Recommendation  Successful');
            navigate('/queries');
        } catch (error) {
            console.log(error)
            toast.warning('Something Wrong!')
        }




    }


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
                        <p className=''><span className='font-semibold '>Brand : </span>{ProductBrand}, { }</p>
                        <p className='text-justify'><span className='font-semibold '>Query :</span> {QueryTItle}</p>


                        <p><span className='font-semibold '>Alternation Reasons : </span>{BoycottingReason} </p>
                        <p><span className='font-semibold '>Recomendation : </span>{recommendationCount}</p>

                        <div className="flex gap-5">
                            <p className="font-semibold">Posted time : </p>
                            <p>{curTime}</p>
                            <p>{curDate}</p>
                        </div>

                    </Fade>


                </div>
            </div>

            <div className="container mx-auto space-y-5">
                <h1 className="text-2xl font-medium">Posted By : </h1>
                <div className="flex gap-10">
                    <div>
                        <p>{name}</p>
                        <p>{email}</p>
                    </div>
                    <div className="w-[50px] h-[50px] rounded-full">
                        <img className="w-full h-full rounded-full" src={image} alt="" />
                    </div>
                </div>
            </div>

            {
                allRecommendation?.length > 0 &&
                    <div>
                        <div className="container mx-auto mt-16 space-y-8">
                            <h1 className="text-5xl">Recommendation : </h1>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                                {
                                    allRecommendation?.map(recommend => <RecommendCard key={recommend._id} recommend={recommend}></RecommendCard>)
                                }
                            </div>
                        </div>
                    </div>
                    
                    
            }

            <div className="mt-16 container mx-auto">
                <h1 className="text-center text-5xl font-medium">Add A Recommendation</h1>
                <form noValidate="" className="space-y-3 mt-10 mb-6 " onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid lg:grid-cols-2 gap-3 md:grid-cols-2">


                        <div className="space-y-1 text-sm">
                            <label htmlFor="title" className="block  text-lg">Title</label>
                            <input type="text" {...register('RecommendationTitle', { required: true })} placeholder="title" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />

                            {errors?.RecommendationTitle?.types?.required && <p className="text-red-500">This field is required</p>}
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="ProductName" className="block  text-lg ">Product Name</label>
                            <input type="text" {...register("RecommendationProductName", { required: true })} placeholder="Product Name" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {errors?.RecommendationProductName?.types?.required && <p className="text-red-500">This field is required</p>}

                        </div>

                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="RecommendationProductImageURL" className="block text-lg">Product Image</label>
                        <input type="text" {...register('RecommendationProductImage', { required: true })} placeholder="URL" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                        {errors?.RecommendationProductImage?.types?.required && <p className="text-red-500">This field is required</p>}
                    </div>
                    <div className=" ">


                        <div className="space-y-1 text-sm">
                            <label htmlFor="RecommendationReason" className="block  text-lg">Reason</label>
                            <input type="text" {...register('RecommendationReason', { required: true })} placeholder="Description...." className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {errors?.RecommendationReason?.types?.required && <p className="text-red-500">This field is required</p>}
                        </div>
                    </div>


                    <button className="block  w-full p-3 text-center rounded-sm  bg-primary-color text-gray-100 hover:bg-secondary-color font-medium">Add Recommendation</button>
                </form>
            </div>
        </div>
    );
};

export default QueryDetailsAll;