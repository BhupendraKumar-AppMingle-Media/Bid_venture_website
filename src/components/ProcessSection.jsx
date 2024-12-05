import React from "react";

const ProcessSection = () => {
  const processData = [
    {
      id: 1,
      title: "SET A TARGET",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      image:
        "https://assets.website-files.com/530ab3ac7b5bc4ca19000b96/530b7763b9b97cdf3e0008b9_icon-target.png",
    },
    {
      id: 2,
      title: "PLAN THE STRATEGY",
      description:
        "Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit.",
      image:
        "https://assets.website-files.com/530ab3ac7b5bc4ca19000b96/530b7772b9b97cdf3e0008bc_icon-design.png",
    },
    {
      id: 3,
      title: "ACHIEVE SUCCESS",
      description:
        "Proin eget tortor risus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
      image:
        "https://assets.website-files.com/530ab3ac7b5bc4ca19000b96/530b7778b9b97cdf3e0008be_icon-chart.png",
    },
  ];

  return (
    <div id="process" className="bg-gray-100 p-10 border">
      <h1 className="text-center font-semibold mb-10 text-2xl relative after:content-[''] after:block after:w-[80px] after:h-0.5 after:bg-gray-200 after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 pb-4">
        HOW WE MAKE BRANDS THRIVE
      </h1>
      <div className="flex justify-center gap-6 flex-wrap ">
        {processData.map((process) => (
          <div
            key={process.id}
            className="process-card w-[320px]  shadow-md rounded-lg overflow-hidden bg-[#5e93b922]"
          >
            <img
              src={process.image}
              alt={process.title}
              className="w-1/3 object-cover m-auto py-10"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{process.title}</h2>
              <p className="text-gray-600 text-sm">{process.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;