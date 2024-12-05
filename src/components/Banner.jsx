import React from "react";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {/* Top Section */}
      <div
        className="relative w-full h-[50vh] bg-cover bg-center text-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://source.unsplash.com/random/1600x900/?nature,water')`, // Replace with any suitable online image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-[#483058] "></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            MAKING BRANDS STAND OUT
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold">IS OUR OBSESSION</h2>
          <div className="mt-4 border-t-2 border-white w-12 mx-auto"></div>
          <p className="text-lg mt-2 font-light">
            Let us help your brand stand out.
          </p>
        </div>
      </div>

      

      {/* Bottom Section */}
      <div className=" bg-[#d2273f] w-full px-6 py-20 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            {/* Cross Icon */}
            {/* <div className="w-6 h-6 border-l-2 border-b-2 transform rotate-45 absolute"></div> */}
            {/* <div className="w-6 h-6 border-l-2 border-b-2 transform -rotate-45 absolute"></div> */}
          </div>
          {/* Paragraph */}
          <p className="max-w-xl mx-auto text-white">
            Minimalist is a full-service digital creative agency located in
            Ontario, Canada. We focus on design, consulting, technology, and
            photography. We’ve been building unique digital products,
            platforms, and experiences for the past 6 years. Let us help your
            company grow.
          </p>
          {/* Button */}
          <button className="bg-[#483058] border-2 text-white text-gray-700 px-6 py-2 rounded-md hover:bg-transparent hover:text-white transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
