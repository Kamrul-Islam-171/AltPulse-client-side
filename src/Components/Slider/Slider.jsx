

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

                    <div className="h-[calc(100vh-80px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]" >

                        <div className=' absolute top-1/3 md:left-1/4 lg:left-1/4 left-10 space-y-4'>
                            <Fade direction='down' duration={1000}>
                                <h1 className='text-5xl font-bold  text-white'>Bandarban</h1>
                            </Fade>
                            <Fade direction='up' duration={1000}>
                                <p className='text-white w-[90%] md:w-4/5 lg:w-3/4 text-xl'> Bandarban's unparalleled beauty, cultural diversity, adventure opportunities, and tranquil ambiance make it a must-visit destination for travelers seeking an authentic and immersive experience in Bangladesh.</p>
                            </Fade>
                        </div>
                        <img src={'https://i.ibb.co/Pty10CJ/204-36376273530-3c9a0335f5-b-copyjpg.jpg'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[calc(100vh-80px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

                        <div className='space-y-4 absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            {/* <h1 className='text-5xl font-bold  text-white'>Cameron Highlands</h1> */}
                            <Fade direction='down' duration={1000}>
                                <h1 className='text-5xl font-bold  text-white'>Cameron Highlands</h1>
                            </Fade>
                            <Fade direction='up' duration={1000}>
                                <p className='text-white w-[90%] md:w-4/5 lg:w-3/4 text-xl'>Cameron Highlands offers a delightful blend of natural beauty, outdoor adventures, cultural experiences, and culinary delights, making it a must-visit destination for travelers exploring Malaysia.</p>
                            </Fade>
                        </div>
                        <img src={'https://i.ibb.co/pwr846d/d0aa7aae-40f9-456d-a509-84de1132325d.jpg'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[calc(100vh-80px)] bg-gradient-to-tr from-[#000000CC] to-[#00000059]">

                        <div className='space-y-4  absolute top-1/3 md:left-1/4 lg:left-1/4 left-10'>
                            <Fade direction='down' duration={1000}>
                                <h1 className='text-5xl font-bold  text-white'>Ha Long Bay</h1>
                            </Fade>
                            <Fade direction='up' duration={1000}>
                                <p className='text-white w-[90%] md:w-4/5 lg:w-3/4 text-xl'> Explore hidden caves, secluded beaches, and floating fishing villages aboard traditional wooden boats. Witness stunning sunsets and sunrises that paint the sky with vibrant colors, casting a magical spell over the tranquil waters.</p>
                            </Fade>
                        </div>
                        <img src={'https://i.ibb.co/JrgyPnL/visitvietnam-3.jpg'} className=' h-full w-full object-cover mix-blend-overlay' alt="" />

                    </div>
                </SwiperSlide>






            </Swiper>


        </div>
    );
};

export default Slider;