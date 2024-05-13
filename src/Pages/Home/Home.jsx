import React, { useEffect, useState } from 'react';
import Slider from '../../Components/Slider/Slider';
import { Helmet } from 'react-helmet-async';
import Bannar from '../../Components/Bannar/Bannar';
import axios from 'axios';
import RecentQueryCard from '../../Components/RecentQueryCard/RecentQueryCard';
import Marquee from "react-fast-marquee";

const Home = () => {
    const [recentQueries, setRecentQueries] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recent-six`)
            .then(data => setRecentQueries(data.data))
    }, [])
    // console.log(recentQueries)
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>

            <div>
                <Bannar></Bannar>
            </div>

            <div className='container mx-auto space-y-8 mt-16'>
                <h1 className='text-4xl font-medium text-center'>Recent Queries</h1>
                <div className='flex justify-center'>
                    <p className='text-center lg:w-2/3 md:w-2/3'>Explore the latest queries across diverse product lines, gaining insights into varying customer interests and preferences. Uncover valuable trends and demands unique to each product category, guiding strategic decisions and optimizations</p>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 '>
                    {
                        recentQueries?.map(queryData => <RecentQueryCard key={queryData._id} queryData={queryData}></RecentQueryCard>)
                    }
                </div>

            </div>

            <div className='mt-20 mb-12 space-y-10'>
                <h1 className='text-4xl text-center font-medium'>Some Trusted Brands</h1>
                <Marquee >
                    <div className='flex gap-10'>
                        <div className=' w-[200px] h-[110px] bg-white'>
                            <img className='w-full h-full object-cover' src={'https://i.ibb.co/pdWhVjv/1562575696.jpg'} alt="" />
                        </div>
                        <div className='w-[200px] h-[110px]  bg-white'>
                            <img className='w-full h-full object-cover' src={'https://i.ibb.co/8NnJTb8/share-default.jpg'} alt="" />
                        </div>
                        <div className='w-[200px] h-[110px]  bg-white'>
                            <img className='w-full h-full object-cover' src={'https://i.ibb.co/2qYZFFK/877951b20ab64005a25e03c6f7cfeaca.jpg'} alt="" />
                        </div>
                        <div className='w-[200px] h-[110px]  bg-white'>
                            <img className='w-full h-full object-cover' src={'https://i.ibb.co/ccqWKy6/brand.gif'} alt="" />
                        </div>
                        <div className='w-[200px] h-[110px] bg-white'>
                            <img className='w-full h-full object-cover' src={'https://i.ibb.co/RbKk9zC/db1246b017ecc82923191111ede44df2.png'} alt="" />
                        </div>
                        <div className='w-[200px] h-[110px] bg-white'>
                            <img className='w-full h-full object-cover' src={'https://i.ibb.co/Tw0HT8p/image.png'} alt="" />
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>


    );
};

export default Home;