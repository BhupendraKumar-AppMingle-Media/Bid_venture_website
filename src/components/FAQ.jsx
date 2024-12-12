import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Bid Venchure and why is it important?",
      answer:
        "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien.",
    },
    {
      question: "How long does it take to see Bid Venchure results?",
      answer:
        "Bid Venchure results typically take 3-6 months, depending on the competition and strategy.",
    },
    {
      question: "What services does your Bid Venchure agency offer?",
      answer: "We offer on-page Bid Venchure, off-page Bid Venchure, and technical audits.",
    },
    {
      question: "Do you provide local Bid Venchure services?",
      answer: "Yes, we specialize in local Bid Venchure for businesses.",
    },
    {
      question: "How do you track Bid Venchure performance?",
      answer: "We use analytics tools and provide detailed reports.",
    },
    {
      question: "Can you guarantee first-page rankings on Google?",
      answer: "No, but we strive for the best achievable rankings.",
    },
    {
      question: "How do you handle algorithm updates?",
      answer: "We stay updated and adapt our strategies as needed.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mb-10">

<h2 className="text-5xl font-extrabold text-gray-800 mb-6 tracking-tight">
                 FaQ
          </h2>


      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-300 py-4 flex justify-between items-start"
        >
          <div className="flex-1">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-left w-full text-lg font-semibold text-gray-800"
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2 text-lg">{faq.answer}</p>
            )}
          </div>
          <button
            onClick={() => toggleFAQ(index)}
            className="text-purple-700  font-extrabold  text-[24px] hover:text-purple-700"
          >
            {activeIndex === index ? "−" : "+"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
