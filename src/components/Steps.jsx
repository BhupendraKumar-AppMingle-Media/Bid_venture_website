import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Steps = () => {
  const cardVariants = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const customersSteps = [
    {
      title: "Sign up and fill out a simple event form",
      description: "Create an account and share the details of your upcoming event.",
      icon: "fas fa-user-plus",
    },
    {
      title: "Get personalized bids from nearby restaurants",
      description: "Restaurants in your area will send you custom offers based on your needs.",
      icon: "fas fa-envelope-open-text",
    },
    {
      title: "Chat, compare, and confirm your booking",
      description: "Communicate with restaurants, compare offers, and finalize your booking.",
      icon: "fas fa-comments",
    },
  ];

  const restaurantsSteps = [
    {
      title: "Create a profile to highlight your services",
      description: "Sign up and build your restaurant profile to showcase your offerings.",
      icon: "fas fa-utensils",
    },
    {
      title: "Browse active event opportunities in your area",
      description: "Look for events in your area and start bidding on those that match your expertise.",
      icon: "fas fa-search",
    },
    {
      title: "Submit bids and secure bookings effortlessly",
      description: "Submit your offers and secure bookings with just a few clicks.",
      icon: "fas fa-handshake",
    },
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-50 py-16">
        {/* Heading */}
        <motion.div
          className="container mx-auto px-6 lg:px-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold text-gray-800 mb-8 tracking-tight">
            How It Works
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            See how our platform connects customers and restaurants seamlessly.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* For Customers */}
          <div>
            <h2 className="text-3xl font-bold text-[#d2273f] mb-6 text-right">
              For Customers
            </h2>
            <div className="relative">
              {/* Vertical Line */}
              {/* <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2 hidden lg:block"></div> */}

              {/* Steps */}
              {customersSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="mb-12 flex items-center lg:items-start lg:flex-row-reverse"
                  variants={cardVariants}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <div className="bg-[#d2273f] text-white p-4 rounded-full w-12 h-12 flex justify-center items-center text-xl shadow-lg lg:ml-4">
                    <i className={`${step.icon}`}></i>
                  </div>
                  {/* Content */}
                  <div className="lg:w-3/4 text-right">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* For Restaurants */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-6 text-left">
              For Restaurants
            </h2>
            <div className="relative">
              {/* Vertical Line */}
              {/* <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2 hidden lg:block"></div> */}

              {/* Steps */}
              {restaurantsSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="mb-12 flex items-center lg:items-start lg:flex-row"
                  variants={cardVariants}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <div className="bg-blue-600 text-white p-4 rounded-full w-12 h-12 flex justify-center items-center text-xl shadow-lg lg:mr-4">
                    <i className={`${step.icon}`}></i>
                  </div>
                  {/* Content */}
                  <div className="lg:w-3/4 text-left">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
