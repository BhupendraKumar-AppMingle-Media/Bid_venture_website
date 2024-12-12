
import Header from '../components/Header';
import Footer from '../components/Footer';

const Works = () => {
  return (
    <>
     <Header />
    <div className="bg-gray-50 py-16 mt-24">
     
      
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Plan Smarter. Book Faster.
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-12">
          See how our platform connects customers and restaurants seamlessly.
        </p>

        {/* Step-by-Step Guide */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* For Customers */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-[#d2273f] mb-6">For Customers</h2>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#d2273f] text-white p-3 rounded-full">
                  <i className="fas fa-sign-in-alt text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Step 1: Sign up and fill out a simple event form.</h3>
                  <p className="text-gray-600">Create an account and share the details of your upcoming event.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#d2273f] text-white p-3 rounded-full">
                <i class='fas fa-comment-dollar' ></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Step 2: Get personalized bids from nearby restaurants.</h3>
                  <p className="text-gray-600">Restaurants in your area will send you custom offers based on your needs.</p>
                </div>
              </div>


              <div className="flex items-center space-x-4">
                <div className="bg-[#d2273f] text-white p-3 rounded-full">
                  <i className="fas fa-comments text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Step 3: Chat, compare, and confirm your booking.</h3>
                  <p className="text-gray-600">       Communicate with restaurants, compare offers, and finalize your booking.</p>
                </div>
              </div>
            </div>
          </div>



          {/* For Restaurants */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-[#d2273f] mb-6">For Restaurants</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#d2273f] text-white p-3 rounded-full">
                  <i className="fas fa-user-plus text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Step 1: Create a profile to highlight your services.</h3>
                  <p className="text-gray-600">Sign up and build your restaurant profile to showcase your offerings.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#d2273f] text-white p-3 rounded-full">
                  <i className="fas fa-search text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Step 2: Browse active event opportunities in your area.</h3>
                  <p className="text-gray-600">Look for events in your area and start bidding on those that match your expertise.</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-[#d2273f] text-white p-3 rounded-full">
                  <i className="fas fa-handshake text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Step 3: Submit bids and secure bookings effortlessly.</h3>
                  <p className="text-gray-600">Submit your offers and secure bookings with just a few clicks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#d2273f] text-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4">Join us today and make event planning a breeze!</h2>
          <button className="bg-white text-[#d2273f] font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>

      
    </div>
    <Footer />
    </>
  );
};

export default Works;
