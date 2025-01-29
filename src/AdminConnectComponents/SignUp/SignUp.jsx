import { useState } from "react";
import axios from "axios";
import SignUpuser from "../../assets/SignUpuser.png";
import Google from "../../assets/Google.png";
import Facebook from "../../assets/Facebook.png";
import { toast } from "react-toastify";
// import NovaNector from "../Layout/NovaNector";

const SignUp = ({ setSignUp, setLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      toast.error("Please fill out all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/users/register", {
        username,
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("User registered successfully");
        setFormData({
          username: "",
          email: "",
          password: "",
        });
        setSignUp(false);
        setLogin(true);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to register");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center font-kumbh z-50">
      <div className="bg-orange-circle rounded-lg shadow-xl w-full max-w-4xl relative">
        {/* Close Button */}
        <button
          onClick={() => setSignUp(false)}
          className="absolute right-[6.3rem] top-[0.5rem] md:right-[1.5rem] md:top-[1.5rem] z-50 text-black hover:rounded-full p-1 border-2 border-black rounded-full bg-white"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5"
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

        {/* NovaNector */}
        {/* <div className="pl-4 pt-4 md:p-4 text-center">
          <NovaNector />
        </div> */}

        {/* Responsive Grid Container */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
          {/* Form Column */}
          <div className="order-2 md:order-1 p-4">
            <div className="text-center mb-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                Create an account
              </h2>
              <p className="text-gray-600 mt-1 text-xs md:text-lg">
                Already have an account?{" "}
                <span
                  className="text-btn-green text-xs md:text-lg cursor-pointer"
                  onClick={() => {
                    setSignUp(false);
                    setLogin(true);
                  }}
                >
                  Login?
                </span>
              </p>
            </div>

            {/* Social Login */}
            <div className="flex justify-center space-x-[5rem] -mb-12 md:mb-6 pr-3">
              <div className="bg-white p-3 md:p-3 rounded-lg shadow-sm">
                <img
                  src={Google}
                  alt="Google"
                  className="w-4 h-4 md:w-6 md:h-6"
                />
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="w-4 h-4 md:w-6 md:h-6"
                />
              </div>
            </div>

            <div className="text-center mt-10 md:mt-5">
              <p className="text-gray-500">----------- or -------------</p>
            </div>

            {/* Signup Form */}
            <form className="space-y-2 md:space-y-4">
              {/* Full Name Input */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-base md:text-lg font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full text-base md:text-lg px-2 py-1 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Akshit Nautiyal"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base md:text-lg font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-base md:text-lg px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-base md:text-lg font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full text-base md:text-lg px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>


              {/* Signup Button */}
              <button
                type="submit"
                className="w-full py-2 px-2 md:px-4 bg-btn-yellow text-white text-xs md:text-lg rounded-md hover:opacity-90 transition-opacity"
                onClick={handleSignUp}
              >
                Create An Account
              </button>
            </form>
          </div>

          {/* Image Column */}
          <div className="order-1 md:order-2 flex items-center justify-center md:p-4">
            <img
              src={SignUpuser}
              alt="SignUp Illustration"
              className="w-full h-[12rem] md:h-auto max-w-xs md:max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
