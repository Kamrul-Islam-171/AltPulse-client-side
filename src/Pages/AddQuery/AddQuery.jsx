
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";


import { FaEyeSlash } from "react-icons/fa";

// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from "react";

import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";


const AddQuery = () => {
    const [showPass, setShowPass] = useState(false);
    const { user } = useContext(AuthContext);
    // console.log(user.displayName)
    // console.log(user.email);

    // useEffect(() => {
    //     AOS.init();
    // }, [])



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
        const ProductName = data.ProductName;
        const ProductBrand = data.ProductBrand;
        const ProductImage = data.ProductImage;
        const QueryTItle = data.QueryTItle;
        const BoycottingReason = data.BoycottingReason;


        const email = user?.email;
        const name = user?.displayName;
        const image = user?.photoURL;
        const recommendationCount = 0;
        const currentDate = new Date();

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
        // console.log(curDate);
        // console.log(curTime);

        const query = { ProductName, ProductBrand, ProductImage, QueryTItle, BoycottingReason, email, name, image, recommendationCount, curTime, curDate };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/queries`, query);
            // console.log(data);
            toast.success('Query added Successfully')
        } catch (error) {
            console.log(error)
            toast.warning('Something Wrong!')
        }


        // console.log(query)




        //new registration

    }
    return (
        <>
            <div className=" h-[850px] relative">
                <img className="h-full w-full" src={'https://i.ibb.co/FhphGXG/360-F-303123713-D396-PWXk-VS4p-LX9uc-Yws-Ra8-X3yby-MJFP.jpg'} alt="" />
            </div>
            <div className="container mx-auto border border-gray-400 px-6 py-3 mt-8 rounded-md mb-8 absolute top-32 md:left-[9%] lg:left-[6%]">
                <Helmet>
                    <title >Add Query</title>
                </Helmet>
                <h1 className="text-5xl text-white  text-center font-medium mt-5">Add Query</h1>
                <div className="">
                    <form noValidate="" className="space-y-3 mt-10 mb-6 " onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid lg:grid-cols-2 gap-3 md:grid-cols-2">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="ProductName" className="block  text-lg text-white">Product Name</label>
                                <input type="text" {...register("ProductName", { required: true })} placeholder="Product Name" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.ProductName?.types?.required && <p className="text-red-500">This field is required</p>}

                            </div>

                            <div className="space-y-1 text-sm">
                                <label htmlFor="ProductBrand" className="block  text-lg text-white">Product Brand</label>
                                <input type="text" {...register('ProductBrand', { required: true })} placeholder="Product Brand" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />

                                {errors?.ProductBrand?.types?.required && <p className="text-red-500">This field is required</p>}
                            </div>
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="ProductImageURL" className="block text-lg text-white">Product Image</label>
                            <input type="text" {...register('ProductImage', { required: true })} placeholder="URL" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {errors?.ProductImage?.types?.required && <p className="text-red-500">This field is required</p>}
                        </div>
                        <div className="grid lg:grid-cols-1 gap-3 md:grid-cols-1 ">
                            <div className="space-y-1 text-sm">
                                <label htmlFor=" QueryTItle" className="block  text-lg text-white"> Query TItle</label>
                                <input type="text" {...register("QueryTItle", { required: true })} placeholder="Title" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.QueryTItle?.types?.required && <p className="text-red-500">This field is required</p>}

                            </div>

                            <div className="space-y-1 text-sm">
                                <label htmlFor="BoycottingReason" className="block  text-lg text-white">Boycotting Reason</label>
                                <input type="text" {...register('BoycottingReason', { required: true })} placeholder="Description...." className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                                {errors?.BoycottingReason?.types?.required && <p className="text-red-500">This field is required</p>}
                            </div>
                        </div>


                        <button className="block  w-full p-3 text-center rounded-sm  bg-primary-color text-gray-100 hover:bg-secondary-color font-medium">Add Query</button>
                    </form>
                </div>
            </div></>
    );
};

export default AddQuery;