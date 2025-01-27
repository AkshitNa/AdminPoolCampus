import Placement01 from "../../assets/Courses/Placement01.png";
import Placement02 from "../../assets/Courses/Placement02.png";
import Placement03 from "../../assets/Courses/Placement03.png";
import Placement04 from "../../assets/Courses/Placement04.png";
import Placement05 from "../../assets/Courses/Placement05.png";
import Placement06 from "../../assets/Courses/Placement06.png";
import Placement07 from "../../assets/Courses/Placement07.png";
import Placement08 from "../../assets/Courses/Placement08.png";

export const PrePlacementCourses = () => {
  return (
    <div className="bg-orange-light">
      {/* Title */}
      <p className="text-center font-lato text-3xl sm:text-4xl md:text-5xl font-semibold pt-5">
        Preplacement <span className="text-btn-green">Courses</span>
      </p>

      {/* Navigation Tabs */}
      <div className="px-[12rem]">
        <div className="bg-orange-light flex flex-wrap justify-center gap-3 px-4 font-semibold mt-8 border-b-2 border-gray-500">
          <div className="p-2 hover:text-white hover:bg-btn-green rounded-md">
            Popular Programs
          </div>
          <div className="p-2 hover:text-white hover:bg-btn-green rounded-md">
            Programming Languages
          </div>
          <div className="p-2 hover:text-white hover:bg-btn-green rounded-md">
            Web Development
          </div>
          <div className="p-2 hover:text-white hover:bg-btn-green rounded-md">
            Cloud Computing
          </div>
          <div className="p-2 hover:text-white hover:bg-btn-green rounded-md">
            Data Science And Machine Learning
          </div>
          <div className="p-2 hover:text-white hover:bg-btn-green rounded-md">
            Cybersecurity
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="bg-orange-light grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 px-6">
        {/* Card 01 */}
        <div className="bg-white border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Placement01}
              alt="Placement-01"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              Learn Java Programming
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base my-1">
                <i className="bi bi-people-fill"></i> 99.1k+ Learners
              </div>
              <div className="text-sm sm:text-base">
                <i className="bi bi-clock-fill"></i> Duration: 10 - 12 Months
              </div>
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                View Program
              </button>
            </div>
          </div>
        </div>

        {/* Card 02 */}
        <div className="bg-white border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Placement02}
              alt="Placement-02"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              Learn Basic Python Programming
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base my-1">
                <i className="bi bi-people-fill"></i> 42.7k+ learners
              </div>
              <div className="text-sm sm:text-base">
                <i className="bi bi-clock-fill"></i> Duration: 8 Months
              </div>
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                View Program
              </button>
            </div>
          </div>
        </div>

        {/* Card 03 */}
        <div className="bg-white border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Placement03}
              alt="Placement-03"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              JavaScript Basic form Scratch
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base my-1">
                <i className="bi bi-people-fill"></i> 40.6k+ learners
              </div>
              <div className="text-sm sm:text-base">
                <i className="bi bi-clock-fill"></i> Duration: 1 Year
              </div>
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                View Program
              </button>
            </div>
          </div>
        </div>

        {/* Card 04*/}
        <div className="bg-white border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Placement04}
              alt="Placement-04"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              C/C++ Programming Language
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base my-1">
                <i className="bi bi-people-fill"></i> 99.1k+ Learners
              </div>
              <div className="text-sm sm:text-base">
                <i className="bi bi-clock-fill"></i> Duration: 10 - 12 Months
              </div>
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                View Program
              </button>
            </div>
          </div>
        </div>

        {/* Card 05 */}
        <div className="bg-white border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Placement05}
              alt="Placement-05"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              Learn HTML for web Development
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base my-1">
                <i className="bi bi-people-fill"></i> 99.1k+ Learners
              </div>
              <div className="text-sm sm:text-base">
                <i className="bi bi-clock-fill"></i> Duration: 10 - 12 Months
              </div>
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                View Program
              </button>
            </div>
          </div>
        </div>

        {/* Card 06 */}
        <div className="bg-white border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Placement06}
              alt="Placement-06"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              Learn CSS for web Development
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base my-1">
                <i className="bi bi-people-fill"></i> 99.1k+ Learners
              </div>
              <div className="text-sm sm:text-base">
                <i className="bi bi-clock-fill"></i> Duration: 10 - 12 Months
              </div>
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                View Program
              </button>
            </div>
          </div>
        </div>

        {/* Card 07 */}
        <div className="bg-white border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Placement07}
              alt="Placement-07"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              Learn Cubersecurity
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base my-1">
                <i className="bi bi-people-fill"></i> 99.1k+ Learners
              </div>
              <div className="text-sm sm:text-base">
                <i className="bi bi-clock-fill"></i> Duration: 10 - 12 Months
              </div>
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                View Program
              </button>
            </div>
          </div>
        </div>

        {/* Card 08 */}
        <div className="bg-white border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Placement08}
              alt="Placement-08"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              Learn Data Science
            </div>
            <div className="text-center">
              <div className="text-sm sm:text-base my-1">
                <i className="bi bi-people-fill"></i> 99.1k+ Learners
              </div>
              <div className="text-sm sm:text-base">
                <i className="bi bi-clock-fill"></i> Duration: 10 - 12 Months
              </div>
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                View Program
              </button>
            </div>
          </div>
        </div>

        {/* Add additional cards (Placement02, Placement03, etc.) below as needed */}
      </div>

      {/* Explore All Button */}
      <div className="flex justify-center pb-5">
        <button className="bg-white font-lato p-2 px-6 font-semibold border-2 border-black rounded-lg">
          Explore All <i className="bi bi-arrow-right font-bold"></i>
        </button>
      </div>
    </div>
  );
};
