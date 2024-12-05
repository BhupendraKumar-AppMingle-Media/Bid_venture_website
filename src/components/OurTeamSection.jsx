import React from "react";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { ImMail3 } from "react-icons/im";
import man1 from "../images/man1.png";

const OurTeamSection = () => {
  return (
    <div id="team">
      <div className="bg-whitesmoke py-10">
        <h1 className="text-center mb-10 text-2xl  font-semibold relative after:content-[''] after:block after:w-[80px] after:h-0.5 after:bg-gray-200 after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 pb-4">
          OUR TEAM
        </h1>

        {/* Grid Layout for team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[1024px] mx-auto">
          {/* Team Card 1 */}
          <div className="bg-[#5e93b922] p-5 rounded-lg">
            <div className="mb-4 bg-black">
              <img
                src={man1}
                alt="team member"
                className="w-[200px] h-[200px]  object-cover rounded-full mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="font-thin text-lg">Ron Swanson</p>
              <p className="text-gray-500">Founder</p>
              <div className="flex justify-center gap-4">
                <FaTwitter />
                <FaLinkedinIn />
                <ImMail3  className=""/>
              </div>
            </div>
          </div>

          {/* Team Card 2 */}
          <div className="bg-[#5e93b922] p-5 rounded-lg">
            <div className="mb-4 bg-black">
              <img
                src={man1}
                alt="team member"
                className="w-[200px] h-[200px] object-cover rounded-full mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="font-thin text-lg">Ron Swanson</p>
              <p className="text-gray-500">Founder</p>
              <div className="flex justify-center gap-4">
                <FaTwitter />
                <FaLinkedinIn />
                <ImMail3 />
              </div>
            </div>
          </div>

          {/* Team Card 3 */}
          <div className="bg-[#5e93b922] p-5 rounded-lg">
            <div className="mb-4 bg-black">
              <img
                src={man1}
                alt="team member"
                className="w-[200px] h-[200px] object-cover rounded-full mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="font-thin text-lg">Ron Swanson</p>
              <p className="text-gray-500">Founder</p>
              <div className="flex justify-center gap-4">
                <FaTwitter />
                <FaLinkedinIn />
                <ImMail3 />
              </div>
            </div>
          </div>

          {/* Team Card 4 */}
          {/* <di className="bg-white p-5 rounded-lg">
            <div className="mb-4">
              <img
                src={man1}
                alt="team member"
                className="w-[200px] h-[200px] object-cover rounded-full mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="font-thin text-lg">Ron Swanson</p>
              <p className="text-gray-500">Founder</p>
              <div className="flex justify-center gap-4">
                <FaTwitter />
                <FaLinkedinIn />
                <ImMail3 />
              </div>
            </div>
          </di> */}
        </div>
      </div>
    </div>
  );
};

export default OurTeamSection;
