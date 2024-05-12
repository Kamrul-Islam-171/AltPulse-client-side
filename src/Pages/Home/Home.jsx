import React, { useEffect, useState } from 'react';
import Slider from '../../Components/Slider/Slider';
import { Helmet } from 'react-helmet-async';
import Bannar from '../../Components/Bannar/Bannar';
import axios from 'axios';
import RecentQueryCard from '../../Components/RecentQueryCard/RecentQueryCard';

const Home = () => {
    const [recentQueries, setRecentQueries] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/recent-six`)
        .then(data => setRecentQueries(data.data))
    }, [])
    console.log(recentQueries)
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
                <h1 className='text-4xl text-center'>Recent Queries</h1>
                <div className='flex justify-center'>
                    <p className='text-center lg:w-2/3 md:w-2/3'>Explore the latest queries across diverse product lines, gaining insights into varying customer interests and preferences. Uncover valuable trends and demands unique to each product category, guiding strategic decisions and optimizations</p>
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 '>
                    {
                        recentQueries?.map(queryData => <RecentQueryCard key={queryData._id} queryData={queryData}></RecentQueryCard>)
                    }
                </div>

            </div>
        </div>


    );
};

export default Home;