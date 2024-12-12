import React from "react";
import Slider from "react-slick";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {

  const images = [
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex justify-center space-x-2">
          {dots.map((dot, index) => (
            <li key={index} className="inline-block">
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full cursor-pointer bg-gray-300 hover:bg-gray-500 slick-active:bg-blue-600 slick-active:w-4 slick-active:h-4 transition-all duration-300"></div>
    ),
  };

  return (
    <div className="sliderContainer  mt-36  w-full lg:p-4 sm:pt-1 sm:pb-1 md:p-6 lg:pt-0 lg:pl-10 lg:pr-10 relative sm:h[150px]">

      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="rounded-xl w-full object-cover bg-center border shadow-md max-sm:h-[150px] max-md:h-[200px] lg:h-[470px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-200 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300 hidden sm:inline"
      onClick={onClick}
    >
      <GoChevronRight />
    </button>
  );
};

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 p-2 bg-gray-200 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300 hidden sm:inline"
      onClick={onClick}
    >
      <GoChevronLeft />
    </button>
  );
};

export default Carousel;
