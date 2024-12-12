import React, { useRef, useEffect } from "react";
import "./WhyChoose.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import winwin from "../images/winwin.png";
import endless from "../images/endless.png";
import price from "../images/price.png";
import savetime from "../images/savetime.png";

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);

  function changeAnimation(card, val) {
    gsap.from(card.current, {
      x: -val,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card.current,
        start: "top 90%",
        end: "bottom top",
        toggleActions: "play none none none",
      },
    });
  }

  useGSAP(() => {
    changeAnimation(card1, 200);
    changeAnimation(card2, -200);
    changeAnimation(card3, 200);
    changeAnimation(card4, -200);
  }, []);

  return (
    <div
      className="why-choose-us mt-[110px] px-4 md:px-8 lg:px-16"
      style={{ willChange: "transform, opacity" }}
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-black font-bold uppercase mb-6">
        Why Choose Us
      </h1>
      <div className="timeline space-y-8"> {/* Reduced space between items */}
        {/* Card 1 */}
        <div className="timeline-item flex flex-wrap md:flex-nowrap justify-between items-center w-full">
          <div className="ml-2 md:ml-4 content w-full md:w-[48%]" ref={card1}>
            <h3>
              <span className="number text-2xl font-bold text-blue-600">01</span>
            </h3>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Save Time
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-2">
              Receive tailored offers from multiple restaurants without lifting
              a finger.
            </p>
          </div>
          <div className="w-full md:w-[48%] h-[180px] md:h-[180px] mt-4 md:mt-0"> {/* Reduced height */}
            <img
              src={savetime}
              loading="lazy"
              className="w-full h-full object-contain rounded-lg"
              alt="Save Time"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="timeline-item flex flex-wrap-reverse md:flex-nowrap justify-between items-center w-full">
          <div className="w-full md:w-[48%] h-[180px] md:h-[180px] mt-4 md:mt-0"> {/* Reduced height */}
            <img
              src={price}
              loading="lazy"
              className="w-full h-full object-contain rounded-lg"
              alt="Transparent Pricing"
            />
          </div>
          <div
            className="mr-2 md:mr-4 content w-full md:w-[48%]"
            ref={card2}
          >
            <h3>
              <span className="number text-2xl font-bold text-blue-600">02</span>
            </h3>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Transparent Pricing
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-2">
              Compare competitive bids and choose the best fit for your budget.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="timeline-item flex flex-wrap md:flex-nowrap justify-between items-center w-full">
          <div className="ml-2 md:ml-4 content w-full md:w-[48%]" ref={card3}>
            <h3>
              <span className="number text-xl font-bold text-blue-600">03</span>
            </h3>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Endless Options
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-2">
              Access a variety of restaurants and event services for every
              occasion.
            </p>
          </div>
          <div className="w-full md:w-[48%] h-[160px] md:h-[160px] mt-4 md:mt-0"> {/* Reduced height */}
            <img
              src={endless}
              loading="lazy"
              className="w-full h-full object-contain rounded-lg"
              alt="Endless Options"
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className="timeline-item flex flex-wrap-reverse md:flex-nowrap justify-between items-center w-full">
          <div className="w-full md:w-[48%] h-[180px] md:h-[180px] mt-4 md:mt-0"> {/* Reduced height */}
            <img
              src={winwin}
              loading="lazy"
              className="w-full h-full object-contain rounded-lg"
              alt="Win-Win Model"
            />
          </div>
          <div className="mr-2 md:mr-4 content w-full md:w-[48%]" ref={card4}>
            <h3>
              <span className="number text-xl font-bold text-blue-600">04</span>
            </h3>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Win-Win Model
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-700 mt-2">
              Customers get great deals; restaurants fill bookings and boost
              revenue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
