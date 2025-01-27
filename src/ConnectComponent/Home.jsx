import AdminConnect from "../assets/AdminConnect.png";
import PoolCampus from "../assets/PoolCampus.png";
import NovaNector from "../AdminConnectComponents/Layout/NovaNector";
import { Link } from "react-router-dom";

// Context
import { useMyData } from "../Context/Provider";

const Home = () => {
  // Context Values
  const poolData = useMyData();
  console.log(poolData);

  return (
    <div className="min-h-screen font-kumbh bg-white">
      {/* Header Logo Section */}
      <div className="ml-4 pt-4">
        <NovaNector />
      </div>

      {/* Description Text */}
      <div className="text-black mt-6 px-4 text-sm sm:text-base lg:text-lg font-semibold leading-relaxed text-center lg:text-left">
        Effortlessly manage admissions and related activities or connect with
        top recruiters and explore placement opportunities - all in one place.
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-orange-50 rounded-xl p-6 sm:p-10 lg:p-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Admin Connect/Courses Card */}
            <Link
              to="/AdminConnect"
              className="transition-transform hover:scale-105"
            >
              <div
                className="bg-white rounded-lg shadow-lg p-6 py-12 border-2 border-yellow-400 flex flex-col items-center gap-4"
                onClick={() => {
                  // poolData.setAdminPool((prev)=>!prev);
                  poolData.setAdminPool(true);
                  poolData.setCampusPool(false);
                }}
              >
                <img
                  src={AdminConnect}
                  alt="AdminConnect"
                  className="w-20 h-20 sm:w-24 sm:h-24"
                />
                <h2 className="text-black text-lg sm:text-xl font-bold text-center">
                  Courses
                </h2>
              </div>
            </Link>

            {/* Pool Campus Card */}
            <Link
              to="/CampusConnect"
              className="transition-transform hover:scale-105"
            >
              <div
                className="bg-white rounded-lg shadow-lg p-6 py-12 border-2 border-yellow-400 flex flex-col items-center gap-4"
                onClick={() => {
                  poolData.setCampusPool(true);
                  poolData.setAdminPool(false);
                }}
              >
                <img
                  src={PoolCampus}
                  alt="PoolCampus"
                  className="w-20 h-20 sm:w-24 sm:h-24"
                />
                <h2 className="text-black text-lg sm:text-xl font-bold text-center">
                  Pool Campus
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
