import ContactImg from "../../assets/ContactImg.png";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Form submitted!");
  };

  return (
    <>
      <div className="font-kumbh flex-col items-center justify-center mx-auto">
        <div className="w-full mb-12">
          <img
            src={ContactImg}
            alt="ContactImg"
            className="w-full h-auto px-3 md:px-0 md:w-full md:h-auto object-cover md:rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center">
          <p className="text-xl md:text-4xl font-semibold text-btn-green mt-8">
            Contact Us
          </p>
          <p className="font-semibold text-sm md:text-lg my-8">
            We’re here to help! Whether you have questions about our pool campus
            drives, pre-placement courses, or feel free to reach out to us.
          </p>
        </div>

        <div className="flex items-center px-4 md:px-0 justify-center min-h-screen bg-card-green">
          <form
            className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold text-center text-btn-green">
              Get a Free Consultation
            </h2>
            <p className="text-sm text-center text-gray-600 mb-4">
              From Higher Experience Counselor
            </p>
            <hr className="border-gray-600 mb-4" />

            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:ring-2 focus:ring-teal-300 focus:outline-none"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:ring-2 focus:ring-teal-300 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email ID
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:ring-2 focus:ring-teal-300 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter Your Phone Number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:ring-2 focus:ring-teal-300 focus:outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                placeholder="Type here....."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-teal-50 focus:ring-2 focus:ring-teal-300 focus:outline-none"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-2 focus:ring-orange-300 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
