import React from 'react';
import Slider from '../../Components/Slider/Slider';
import { Helmet } from 'react-helmet-async';
import Bannar from '../../Components/Bannar/Bannar';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>

            <div>
                <Bannar></Bannar>
            </div>
        </div>

        
    );
};

export default Home;