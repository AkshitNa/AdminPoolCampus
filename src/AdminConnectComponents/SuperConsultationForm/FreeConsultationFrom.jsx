import ConsultationFormImg from "../../assets/ConsultationMessi.png";

const FreeConsultationFrom = ({ setFreeConsultation }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center md:p-[21rem] font-kumbh py-6">
      <div className="bg-orange-circle-2 grid grid-cols-1 md:grid-cols-2 gap-4 px-[2.5rem] rounded-xl py-5 text-sm md:text-md">
        {/* From */}
        <div className="flex justify-center items-center px-3 md:px-0 bg-white min-h-[14rem] font-lato order-2 md:order-1">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-[1rem] px-8 md:px-0">
            <h2 className="text-center text-lg md:text-2xl font-bold text-black mb-2">
              Cost Free Consultation
            </h2>
            <p className="text-center text-xs md:text-sm text-form-light-black mb-4">
              From Higher Experience Counselor
            </p>
            <hr className="border-gray-500 mb-4" />

            <form className="flex flex-col gap-4 md:gap-8 px-2">
              {/* Full Name Input */}
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full px-2 py-0.5 md:px-4 md:py-2 bg-form-light-Green rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-300"
              />

              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full py-0.5 md:px-4 md:py-2 bg-form-light-Green rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-300"
              />

              {/* Phone Number Input */}
              <input
                type="tel"
                placeholder="Enter Your Phone Number"
                className="w-full px-2 py-0.5 md:px-4 md:py-2 bg-form-light-Green rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-300"
              />

              {/* Course Select */}
              <select className="w-full px-2 py-0.5 md:px-4 md:py-2 bg-form-light-Green rounded-md focus:outline-none focus:ring-2 focus:ring-green-300">
                <option>Select Your Course</option>
                <option>Python</option>
                <option>Java Full Stack</option>
                <option>MERN</option>
                <option>MEAN</option>
              </select>

              {/* State Select */}
              <select className="w-full px-2 py-0.5 md:px-4 md:py-2 bg-form-light-Green rounded-md focus:outline-none focus:ring-2 focus:ring-green-300">
                <option>Select Your State</option>
                <option>Uttrakhand</option>
                <option>Bihar</option>
                <option>Jharkhand</option>
              </select>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white text-base md:text-lg py-0.5 md:py-2 rounded-md font-semibold hover:bg-orange-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Image and button */}
        <div className="order-1 md:order-2">
          <img
            src={ConsultationFormImg}
            alt=""
            className="w-full h-[17rem] md:w-full md:h-auto rounded-xl"
          />
            <div>
            <button
              onClick={() => setFreeConsultation(false)}
              className="absolute right-5 top-[1.5rem] md:right-[21.5rem] md:top-[5.1rem] text-gray-500 hover:text-gray-700 bg-white rounded-full"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          {/* Close button */}
        </div>
      </div>
    </div>
  );
};

export default FreeConsultationFrom;
