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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 items-center justify-center gap-5 px-4 md:px-8 lg:px-12">
        {/* Text Content */}
        <div className="flex flex-col order-2 md:order-1">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left text-btn-yellow font-semibold space-y-2">
            <p>Unlock Your Potential with</p>
            <p>Campus Hiring and College</p>
            <p>Admission in One Platform! </p>
          </div>

          <div className="text-sm sm:text-base text-black font-semibold my-3 md:my-6 text-center md:text-left max-w-xl">
            Our platform provides seamless campus hiring and college admission,
            empowering you to achieve your career and education aspirations at
            your convenience
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

        {/* Image */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="absolute right-[16rem] md:top-[18rem] md:right-[32rem]">
            <AdminPartners />
          </div>

          <div>
            <img
              src={student}
              alt="Student"
              className="h-48 sm:h-64 md:h-72 lg:h-80 object-contain"
            />
          </div>
          <div className="absolute top-[15rem] right-[2rem] md:top-[25rem] md:right-[13rem] z-auto">
            <EnrollStudents />
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

export default HomePageImg;
