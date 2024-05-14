

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
// import './bannar.css'


import { Autoplay, Navigation } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';

const Slider = () => {



    return (
        <div className="">
            <Swiper navigation={true} loop={true} modules={[Navigation, Autoplay]} className="mySwiper" autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}>
                <SwiperSlide>

                    <div className="h-screen bg-gradient-to-tr from-[#000000CC] to-[#00000059]" >
                    {/* calc(100vh-80px) */}
                        <div className=' absolute top-1/3 md:left-1/4 lg:left-1/4 left-10 space-y-4'>
                            <Fade direction='down' duration={1000}>
                                <h1 className='text-5xl font-bold  text-white'>Discover Alternative Products</h1>
                            </Fade>
                            <Fade direction='up' duration={1000}>
                                <p className='text-white w-[90%] md:w-4/5 lg:w-3/4 text-xl'>Our platform tries to  find eco-friendly, sustainable, and innovative alternatives to mainstream products</p>
                            </Fade>
                        </div>
                        <img src={'https://i.ibb.co/2FCq3zY/predict-customer-acceptance.jpg'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen bg-gradient-to-tr from-[#000000CC] to-[#00000059]">
                    {/* calc(100vh-80px) */}
                        <div className='space-y-4 absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            {/* <h1 className='text-5xl font-bold  text-white'>Cameron Highlands</h1> */}
                            <Fade direction='down' duration={1000}>
                                <h1 className='text-5xl font-bold  text-white'>Explore Diverse Options</h1>
                            </Fade>
                            <Fade direction='up' duration={1000}>
                                <p className='text-white w-[90%] md:w-4/5 lg:w-3/4 text-xl'>From alternative energy solutions to eco-friendly household products, our platform offers a wide range of alternatives to suit your needs</p>
                            </Fade>
                        </div>
                        <img src={'https://i.ibb.co/L6VwVhx/bigstock-Young-Unsure-Man-Is-Making-Dec-239778739.jpg'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-screen bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

                        <div className='space-y-4  absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <Fade direction='down' duration={1000}>
                                <h1 className='text-5xl font-bold  text-white'>Support Sustainability</h1>
                            </Fade>
                            <Fade direction='up' duration={1000}>
                                <p className='text-white w-[90%] md:w-4/5 lg:w-3/4 text-xl'> Join the movement towards a more sustainable future by choosing products that minimize environmental impact and promote ethical practices</p>
                            </Fade>
                        </div>
                        <img src={'https://i.ibb.co/vcJ1v4H/630f6fe408196f5933542fa3-sustainable-business-ideas.png'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>






            </Swiper>


        </div>
    );
};

export default Slider;