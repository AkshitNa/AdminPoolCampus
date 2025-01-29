import student from "../../assets/HomeStudent.png";
// HomeCards
import HomeCards from "./HomeCards";

import AdminPartners from "./AdminPartners";
import EnrollStudents from "./EnrollStudents";

//Dots
import Dots2 from "../../assets/Dot02.png";
export const HomePageImg = () => {
  return (
    <div className="bg-orange-light min-h-screen md:min-h-0 md:h-auto font-lato py-8 pt-3 md:pb-12">
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
                  <div className="transform translate-x-1/5 translate-y-[4rem] md:-translate-x-[5rem] md:translate-y-1/3 lg:translate-x-1/3 lg:translate-y-1/5 xl:translate-x-1/4 xl:translate-y-1/2 2xl:translate-x-[1rem] 2xl:translate-y-1/2">
                    <AdminPartners />
                  </div>
                </div>

                {/* Center Image */}
                <div className="relative col-span-1 flex justify-center">
                  <img
                    src={student}
                    alt="Student"
                    className="max-w-[25rem] h-56 sm:h-72 md:h-96 lg:h-[28rem] xl:h-[24rem] object-cover"
                  />

                  <img src={Dots2} alt="Dots 2 Horizontal" className="w-[4rem] h-[4rem]" />
                </div>

                {/* Right Image */}
                <div className="relative col-span-1 flex justify-center z-10">
                  <div className="transform -translate-x-1/2 translate-y-1/2 md:translate-x-1/5 md:translate-y-1/2 lg:translate-x-1/3 lg:translate-y-1/5 xl:-translate-x-1/2 xl:translate-y-1/2 2xl:-translate-x-[7rem] 2xl:translate-y-[5rem]">
                    <EnrollStudents />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HomeCards */}
      <div>
        <HomeCards />
      </div>
    </div>
  );
};
