// import React from 'react';

import Navbar from "../../components/navbar/Navbar";
import SwaperSlider from "../../components/Slider/SwaperSlider";
import GuidSteps from "../../components/guidSteps/GuidSteps";
import HomeProducts from "../../components/HomeProducts/HomeProducts";

const Home = () => {
    return (
        <div>
          <Navbar />
          <SwaperSlider />
          <GuidSteps />
          <HomeProducts />
        </div>
    );
};

export default Home;
