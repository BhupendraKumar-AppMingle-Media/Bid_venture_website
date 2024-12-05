import React from "react";
import Banner from "./Banner.jsx";
import Footer from "./Footer.jsx";
import Gallery from "./Gallery.jsx";
import GetInTouch from "./GetInTouch.jsx";
import Header from "./Header.jsx";
import OurTeamSection from "./OurTeamSection.jsx";
import ProcessSection from "./ProcessSection.jsx";
import Testimonial from "./Testimonial.jsx"


const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <ProcessSection />
      <Gallery />
      <OurTeamSection />
      <Testimonial/>
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Main;
