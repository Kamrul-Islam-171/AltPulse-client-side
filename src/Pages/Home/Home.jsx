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


            <div className='grid lg:grid-cols-2 md:grid-cols-2  h-[600px]'>
                <div className=' relative lg:h-[600px] h-[400px] md:mt-24 mt-0'>
                    <div className='lg:w-[200px] lg:h-[200px] w-[120px] h-[120px] absolute lg:right-[100px] lg:top-16 right-[30px] top-[50px]'>
                        <img className='w-full h-full object-cover rounded-2xl' src={'https://i.ibb.co/XjKyKVQ/Copy-of-New-Recipe-Video-Coming-TODAY-2-1080x675.jpg'} alt="" />
                    </div>
                    {/* soap */}
                    <div className='lg:w-[200px] lg:h-[200px] w-[120px] h-[120px] absolute lg:right-[100px] lg:bottom-16 z-10 right-[30px] bottom-10'>
                        <img className='w-full h-full object-cover rounded-2xl' src={'https://i.ibb.co/TgMrG9v/0-a8-Ad-UNOW3-C1g-Lu8m.jpg'} alt="" />
                    </div>
                    {/* sampoo */}
                    <div className='lg:w-[200px] lg:h-[200px] w-[120px] h-[120px] absolute lg:left-[120px] z-20 lg:top-48 top-36 left-[30px] md:left-[55px]'>
                        <img className='w-full h-full object-cover rounded-2xl' src={'https://i.ibb.co/L8wJpxW/file-1-04-4.png'} alt="" />
                    </div>
                    {/* honey */}
                    <div className='lg:w-[300px] lg:h-[330px] w-[200px] h-[220px] absolute lg:right-[180px] z-40 lg:top-32 right-[110px] top-[100px]'>
                        <img className='w-full h-full object-cover rounded-2xl' src={'https://i.ibb.co/p4YTpDZ/710h-p.jpg  '} alt="" />
                    </div>



                </div>
                <div className='text-center flex flex-col justify-center items-center space-y-5'>
                    <h1 className='lg:text-6xl text-4xl font-medium'>Search for an idea</h1>
                    <p className='text-2xl'>What do you want to try next? Think of something you’re into—like and see what you find.</p>
                    <div className='border rounded-full border-primary-color'>
                        <button className="lg:text-lg md:text-lg btn hover:text-primary-color hover:bg-white hover:border-primary-color bg-primary-color text-white font-medium rounded-full border-none px-5"> Explore</button>
                    </div>

                </div>
            </div>

            <div className='container mx-auto mt-28 grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
                <div className='space-y-3   px-8 shadow-xl py-12 rounded-md'>
                    <h3 className='text-2xl font-medium'>Popular Categories</h3>
                    <div className='h-[2px] bg-primary-color'></div>
                    <div>
                        <ul className='ml-3 space-y-1 list-disc'>
                            <li>Technology and Electronics</li>
                            <li>Fashion and Apparel</li>
                            <li>Beauty and Personal Care</li>
                            <li>Health and Wellness</li>
                            <li>Food and Beverages</li>
                            <li>Sports and Outdoors</li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-3   px-8 shadow-xl py-12 rounded-md'>
                    <h3 className='text-2xl font-medium'>Trending Categories</h3>
                    <div className='h-[2px] bg-primary-color'></div>
                    <div>
                        <ul className='ml-3 space-y-1 list-disc'>
                            <li>Sustainable Living</li>
                            <li>Smart Home Devices</li>
                            <li>Plant-Based and Vegan Products</li>
                            <li>Fitness and Wellness Products</li>
                            <li>Food and Beverages</li>
                            <li>Sports and Outdoors</li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-3   px-8 shadow-xl py-12 rounded-md'>
                    <h3 className='text-2xl font-medium'>Latest Categories</h3>
                    <div className='h-[2px] bg-primary-color'></div>
                    <div>
                        <ul className='ml-3 space-y-1 list-disc'>
                            <li>Plant-Based Home Cleaning Products</li>
                            <li>Fashion and Apparel</li>
                            <li>Beauty and Personal Care</li>
                            <li>Hydroponic and Indoor Gardening Kits</li>
                            <li>Natural and Organic Mattresses</li>
                            <li>Mindful Tech Detox Retreats</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className='lg:pt-8 md:pt-0 '>
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


            <div className='container mx-auto mt-20 space-y-8 font-medium'>
                <h1 className='text-3xl'>Alternative Product FAQs: Your Questions Answered</h1>
                {/* accordinia */}
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            Why should I consider alternative products?
                        </div>
                        <div className="collapse-content">
                            <p>Alternative products can offer various benefits such as cost savings, environmental sustainability, unique features, or ethical considerations. They provide consumers with more choices and options to suit their preferences and values.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How do I know if an alternative product is right for me?
                        </div>
                        <div className="collapse-content">
                            <p>Consider factors such as your preferences, needs, budget, and values when evaluating alternative products. Look for features or attributes that align with your priorities and conduct thorough research to make an informed decision.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Can I trust alternative product recommendations from online sources?
                        </div>
                        <div className="collapse-content">
                            <p>It's essential to critically evaluate alternative product recommendations from online sources, considering factors such as credibility, transparency, and relevance. Look for reviews from trusted sources, consider multiple opinions, and verify information to make well-informed decisions.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How can I determine the environmental impact of alternative products?
                        </div>
                        <div className="collapse-content">
                            <p>This question delves into factors such as carbon footprint, energy efficiency, recyclability, and sustainable sourcing practices, helping users make environmentally conscious choices.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How do I know if an alternative product is ethically produced?
                        </div>
                        <div className="collapse-content">
                            <p>This question examines ethical considerations such as fair labor practices, animal welfare standards, and supply chain transparency, empowering users to make socially responsible choices.</p>
                        </div>
                    </div>
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