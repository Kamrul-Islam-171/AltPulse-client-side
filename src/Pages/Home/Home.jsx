import React from 'react';
import Slider from '../../Components/Slider/Slider';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>

            <div>
                <h1>Hello</h1>
            </div>
        </div>

        
    );
};

export default Home;