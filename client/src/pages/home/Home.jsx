// import React from 'react';

import SwaperSlider from "../../components/Slider/SwaperSlider";
import GuidSteps from "../../components/guidSteps/GuidSteps";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import Benefit from "../../components/benefit/Benefit";

const Home = () => {
    return (
        <div>
        
          <SwaperSlider />
          <GuidSteps />
          <HomeProducts />
          <Benefit />
          
        </div>
    );
};

export default Home;
