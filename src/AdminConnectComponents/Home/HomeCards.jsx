import HomeLogo01 from "../../assets/HomeLogo01.png";
import HomeLogo02 from "../../assets/HomeLogo02.png";
import HomeLogo03 from "../../assets/HomeLogo03.png";

// DotsVertical and SquareDouble
import Dot01 from "../../assets/Dot01.png";
import SquareDouble from "../../assets/SquareDouble.png";

const HomeCards = () => {
  return (
    <div className="flex justify-between">
      <div className="pl-3 mt-2">
        <img src={Dot01} alt="Verical-Dots" className="w-12 h-10 pt-2 md:pt-0 md:w-[8rem] md:h-[10rem]" />
      </div>

      {/* Stats Cards 01 */}
      <div className="flex sm:flex-row justify-center gap-2 sm:gap-6 lg:gap-8 mt-12 md:mt-16">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white px-5 py-1 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto">
          <img
            src={HomeLogo01}
            alt="Career Stats"
            className="w-8 h-8 sm:w-10 sm:h-10 mr-3"
          />
          <div>
            <p className="font-semibold text-base md:text-lg">45000+</p>
            <p className="text-xs md:text-sm text-gray-600">
              Career Transformed
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white px-5 py-1 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto">
          <img
            src={HomeLogo02}
            alt="Education Stats"
            className="w-8 h-8 sm:w-10 sm:h-10 mr-3"
          />
          <div>
            <p className="font-semibold text-base md:text-lg">45000+</p>
            <p className="text-xs md:text-sm text-gray-600">
              Career Transformed
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white px-5 py-1 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto">
          <img
            src={HomeLogo03}
            alt="Salary Stats"
            className="w-8 h-8 sm:w-10 sm:h-10 mr-3"
          />
          <div>
            <p className="font-semibold text-base md:text-lg">85%</p>
            <p className="text-xs md:text-sm text-gray-600">
              Average Salary Hike
            </p>
          </div>
        </div>
      </div>

      <div>
        <img src={SquareDouble} alt="Square-Double" className="pt-1 w-14 h-9 md:w-[8rem] md:h-[8rem]"/>
      </div>
    </div>
  );
};

export default HomeCards;
