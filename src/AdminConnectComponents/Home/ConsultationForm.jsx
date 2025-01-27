export const ConsultationForm = () => {
  return (
    <div className="flex justify-center items-center bg-card-green min-h-screen font-lato">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-center text-2xl font-bold text-black mb-2">
          Cost Free Consultation
        </h2>
        <p className="text-center text-sm text-form-light-black mb-4">
          From Higher Experience Counselor
        </p>
        <hr className="border-gray-500 mb-4" />

        <form className="flex flex-col gap-4">
          {/* Full Name Input */}
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full px-4 py-2 bg-form-light-Green rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-300"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 bg-form-light-Green rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-300"
          />

          {/* Phone Number Input */}
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            className="w-full px-4 py-2 bg-form-light-Green rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-300"
          />

          {/* Course Select */}
          <select className="w-full px-4 py-2 bg-form-light-Green rounded-md focus:outline-none focus:ring-2 focus:ring-green-300">
            <option>Select Your Course</option>
            <option>Python</option>
            <option>Java Full Stack</option>
            <option>MERN</option>
            <option>MEAN</option>
          </select>

          {/* State Select */}
          <select className="w-full px-4 py-2 bg-form-light-Green rounded-md focus:outline-none focus:ring-2 focus:ring-green-300">
            <option>Select Your State</option>
            <option>Uttrakhand</option>
            <option>Bihar</option>
            <option>Jharkhand</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md font-bold hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
