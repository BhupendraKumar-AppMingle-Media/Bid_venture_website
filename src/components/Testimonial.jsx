import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "I love these guys! They did a great job. I would recommend them to anyone.",
    name: "Julius Von Uberstien",
    image: "https://i.pravatar.cc/100?img=1", // Replace with actual image URLs
  },
  {
    id: 2,
    text: "Elexis Corp. has grown immensely with the help of Minimal.",
    name: "Rachel Stamos",
    image: "https://i.pravatar.cc/100?img=2", // Replace with actual image URLs
  },
  {
    id: 3,
    text: "The team was professional, prompt, and exceeded our expectations.",
    name: "Michael Davis",
    image: "https://i.pravatar.cc/100?img=3", // Replace with actual image URLs
  },
  {
    id: 4,
    text: "We are thrilled with the results. Highly recommended!",
    name: "Sarah Lee",
    image: "https://i.pravatar.cc/100?img=4", // Replace with actual image URLs
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 2) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4  bg-[#5e93b922] ">
      {/* Top Quote Icon */}
      <div className="text-5xl text-black mb-6">
        <span>&#10078;</span>
      </div>

      {/* Testimonial Cards */}
      <div className="flex items-center space-x-6 ">
        {/* Previous Arrow */}
        <button
          onClick={handlePrev}
          className="text-gray-500 hover:text-black transition duration-200"
        >
          &#10094;
        </button>

        {/* Display two testimonial cards */}
        <div className="grid grid-cols-2 gap-6 ">
          {testimonials.slice(current, current + 2).map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center bg-[#5e93b922] shadow-md p-6 rounded-md text-center"
              style={{ width: "300px" }}
            >
              <p className="text-gray-800 italic  mb-4">"{testimonial.text}"</p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-2"
              />
              <h3 className="text-gray-900 font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className=" hover:text-black transition duration-200"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
