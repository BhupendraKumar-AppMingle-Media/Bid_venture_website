import React from "react";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Slider from './Slider.jsx'
import Steps from './Steps.jsx'
import WhyChoose from "./WhyChoose.jsx";
import Slider2 from './Slider2.jsx';
import BannerIcon from './BannerIcon.jsx'


const Main = () => {
  return (
    <>
      <Header />
      <Slider2/>

      <BannerIcon/>
      {/* <Slider/> */}
      <Banner />
      <WhyChoose/>
      <Steps/>
      <Footer />

      
    </>
  );
};

export default Main;
