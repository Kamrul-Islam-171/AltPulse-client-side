
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
import { useParams } from "react-router-dom";


const UpdateQuery = () => {

    const {id} = useParams();
   
    const { user } = useContext(AuthContext);
    // console.log(user.displayName)
    // console.log(user.email);

    // useEffect(() => {
    //     AOS.init();
    // }, [])

    const [queryData, setQueryData] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/query/${id}`)
        .then(data => setQueryData(data.data))
    }, [])

    // console.log(id);

    const {ProductName, ProductBrand, ProductImage, QueryTItle, BoycottingReason, email, name, image, recommendationCount, curTime, curDate} = queryData;







  
    const handleSubmit = async  (e) => {
        e.preventDefault();
        const ProName = e.target.ProName.value;
        const ProBrand = e.target.ProBrand.value;
        const ProImage = e.target.ProImage.value;
        const QTItle = e.target.QTItle.value;
        const BoyReason = e.target.BoyReason.value;

        console.log("hello")


        // const email = user?.email;
        // const name = user?.displayName;
        // const image = user?.photoURL;
        // const recommendationCount = 0;
        // const currentDate = new Date();

        // const year = currentDate.getFullYear();
        // const month = currentDate.getMonth() + 1;
        // const day = currentDate.getDate();


        // let hours = currentDate.getHours();
        // const minutes = currentDate.getMinutes();
        // const seconds = currentDate.getSeconds();

        // const amPM = hours >= 12 ? 'PM' : 'AM';

       
        // hours = hours % 12 || 12;

        // const curDate = `${day}/${month}/${year}`;
        // const curTime = `${hours}:${minutes}:${seconds}, ${amPM}`;
        // console.log(curDate);
        // console.log(curTime);

        const query = { ProductName:ProName, ProductBrand:ProBrand, ProductImage:ProImage, QueryTItle:QTItle, BoycottingReason:BoyReason };
        

        try {
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/update-query/${id}`, query);
            console.log(data);
            toast.success('Query updated Successfully')
        } catch (error) {
            console.log(error)
            toast.warning('Something Wrong!')
        }

        
        

    }
    return (
        <div className="container mx-auto bg-third-color px-6 py-3 rounded-md mb-8">
            <Helmet>
                <title>Add Query</title>
            </Helmet>
            <h1 className="text-5xl text-center font-medium mt-5">Add Query</h1>
            <div className="">
                <form noValidate="" className="space-y-3 mt-10 mb-6 " onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-2 gap-3 md:grid-cols-2">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="ProductName" className="block  text-lg ">Product Name</label>
                            {/* <input defaultValue={queryData?.ProductName} type="text" {...register("ProductName", { required: true })} placeholder="Product Name" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" /> */}
                            <input type="text" name="ProName" defaultValue={queryData?.ProductName} className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                            {/* {errors?.ProductName?.types?.required && <p className="text-red-500">This field is required</p>} */}

                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="ProductBrand" className="block  text-lg">Product Brand</label>
                            {/* <input defaultValue={queryData?.ProductBrand} type="text" {...register('ProductBrand', { required: true })} placeholder="Product Brand" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" /> */}

                            <input type="text" name="ProBrand" defaultValue={queryData?.ProductBrand} className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />

                            {/* {errors?.ProductBrand?.types?.required && <p className="text-red-500">This field is required</p>} */}
                        </div>
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="ProductImageURL" className="block text-lg">Product Image</label>
                        {/* <input defaultValue={queryData?.ProductImage} type="text" {...register('ProductImage', { required: true })} placeholder="URL" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" /> */}
                        {/* {errors?.ProductImage?.types?.required && <p className="text-red-500">This field is required</p>} */}

                        <input type="text" name="ProImage" defaultValue={queryData?.ProductImage} className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />

                    </div>
                    <div className="grid lg:grid-cols-1 gap-3 md:grid-cols-1 ">
                        <div className="space-y-1 text-sm">
                            <label htmlFor=" QueryTItle" className="block  text-lg"> Query TItle</label>
                            {/* <input defaultValue={queryData?.QueryTItle} type="text" {...register("QueryTItle", { required: true })} placeholder="Title" className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" /> */}
                            {/* {errors?.QueryTItle?.types?.required && <p className="text-red-500">This field is required</p>} */}

                            <input type="text" name="QTItle" defaultValue={queryData?.QueryTItle} className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />

                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="BoycottingReason" className="block  text-lg">Boycotting Reason</label>
                            {/* <input defaultValue={queryData?.BoycottingReason} type="text" {...register('BoycottingReason', { required: true })} placeholder="Description...." className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" /> */}
                            {/* {errors?.BoycottingReason?.types?.required && <p className="text-red-500">This field is required</p>} */}

                            <input type="text" name="BoyReason" defaultValue={queryData?.BoycottingReason} className="border border-primary-color w-full px-4 py-3 rounded-md border-gray-700  focus:border-violet-400" />
                        </div>
                    </div>


                    <button className="block  w-full p-3 text-center rounded-sm  bg-primary-color text-gray-100 hover:bg-secondary-color font-medium">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateQuery;