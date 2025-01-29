import student from "../../assets/HomeStudent.png";
import HomeLogo01 from "../../assets/HomeLogo01.png";
import HomeLogo02 from "../../assets/HomeLogo02.png";
import HomeLogo03 from "../../assets/HomeLogo03.png";

import AdminPartners from "./AdminPartners";
import EnrollStudents from "./EnrollStudents";

export const HomePageImg = () => {
  return (
    <div className="bg-orange-light min-h-screen md:min-h-0 md:h-auto font-lato py-8 md:py-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="flex flex-col order-2 md:order-1">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left text-btn-yellow font-semibold space-y-2">
              <p>Unlock Your Potential with</p>
              <p>Campus Hiring and College</p>
              <p>Admission in One Platform!</p>
            </div>

            <div className="text-sm sm:text-base text-black font-semibold my-3 md:my-6 text-center md:text-left max-w-xl">
              Our platform provides seamless campus hiring and college
              admission, empowering you to achieve your career and education
              aspirations at your convenience
            </div>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6 mt-6">
              <button className="bg-btn-yellow py-2 px-6 rounded-lg text-white hover:opacity-90 transition-opacity">
                Enroll Courses
              </button>
              <button className="bg-btn-green py-2 px-6 rounded-lg text-white hover:opacity-90 transition-opacity">
                Pool Campus
              </button>
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="order-1 md:order-2">
            <div className="relative w-full">
              {/* Main Image Container */}
              <div className="grid grid-cols-3 items-center">
                {/* Left Image */}
                <div className="relative col-span-1 flex justify-center z-10">
                  <div className="transform translate-x-1/5 translate-y-1/5 md:translate-x-1/4 md:translate-y-1/4 lg:translate-x-1/3 lg:translate-y-1/5 xl:translate-x-1/2 xl:translate-y-1/4">
                    <AdminPartners />
                  </div>
                </div>

                {/* Center Image */}
                <div className="relative col-span-1 flex justify-center">
                  <img
                    src={student}
                    alt="Student"
                    className="max-w-[25rem] h-56 sm:h-72 md:h-96 lg:h-[28rem] xl:h-[32rem] object-cover"
                  />
                </div>

                {/* Right Image */}
                <div className="relative col-span-1 flex justify-center">
                  <div className="transform -translate-x-1/4 md:translate-x-1/5 md:translate-y-1/2 lg:translate-x-1/3 lg:translate-y-1/5 xl:-translate-x-1/2 xl:translate-y-1/2">
                    <EnrollStudents />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 mt-12 md:mt-16 px-4 md:px-8">
        {/* Card 1 */}
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src={HomeLogo01}
            alt="Career Stats"
            className="w-8 h-8 sm:w-10 sm:h-10 mr-3"
          />
          <div>
            <p className="font-semibold text-lg">45000+</p>
            <p className="text-sm text-gray-600">Career Transformed</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src={HomeLogo02}
            alt="Education Stats"
            className="w-8 h-8 sm:w-10 sm:h-10 mr-3"
          />
          <div>
            <p className="font-semibold text-lg">45000+</p>
            <p className="text-sm text-gray-600">Career Transformed</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img
            src={HomeLogo03}
            alt="Salary Stats"
            className="w-8 h-8 sm:w-10 sm:h-10 mr-3"
          />
          <div>
            <p className="font-semibold text-lg">85%</p>
            <p className="text-sm text-gray-600">Average Salary Hike</p>
          </div>
        </div>
      </div>
    </div>
  );
};
