import React from "react";
import "./Banner.css"; // CSS for animations and styles

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-1 min-h-screen">
      {/* Main Container with full-width */}
      <div className="flex flex-wrap w-full h-full gap-6 px-4 md:px-8">
        {/* Customers Card */}
        <div className="flex-1 p-4 bg-[#d3d7e9] shadow-lg rounded-lg flex flex-col items-center justify-center border-r border-gray-200 relative overflow-hidden">
          <img
            src="https://via.placeholder.com/500x300?text=Post+Your+Event"
            alt="Post Event"
            className="w-4/5 h-48 md:w-4/5 md:h-2/3 rounded-lg object-cover mb-6"
          />
          <div className="text-center px-6">
            <p className="text-gray-700 text-2xl md:text-[2rem] font-semibold mb-2">
              Let restaurants compete for your event.
            </p>
            <p className="text-[18px] mb-4">
              Save time, money, and stress by posting your event now.
            </p>
            <button className="animated-border text-white font-semibold bg-[#788ff2] px-6 py-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
              Post Your Event Now
            </button>
          </div>
          {/* Infinite Line Animation - Starts from Left */}
          <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-blue-400 via-transparent to-transparent animate-line-left"></div>
        </div>

        {/* Restaurants Card */}
        <div className="flex-1 bg-[#d3d7e9] p-4 shadow-lg rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
          <img
            src="https://via.placeholder.com/500x300?text=Join+as+Restaurant"
            alt="Join as Restaurant"
            className="w-4/5 h-48 md:w-4/5 md:h-2/3 rounded-lg object-cover mb-6"
          />
          <div className="text-center px-6">
            <p className="text-gray-700 text-2xl md:text-[2rem] font-semibold mb-2">
              Showcase your services to potential customers.
            </p>
            <p className="text-[18px] mb-4">
              Sign up and start bidding on local events today.
            </p>
            <button className="animated-border text-white font-semibold bg-[#788ff2] px-6 py-4 rounded-md hover:bg-green-700 transition-colors duration-300">
              Join as a Restaurant
            </button>
          </div>
          {/* Infinite Line Animation - Starts from Right */}
          <div className="absolute bottom-0 right-0 w-full h-[5px] bg-gradient-to-l from-green-400 via-transparent to-transparent animate-line-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
