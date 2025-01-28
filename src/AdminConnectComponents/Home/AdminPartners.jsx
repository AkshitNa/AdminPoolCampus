import AdminPartners01 from "../../assets/AdminPartners/AdminPartners01.png"
import AdminPartners02 from "../../assets/AdminPartners/AdminPartners02.png"

const AdminPartners = () => {
  return (
    <div className="bg-white px-4 max-w-[7rem] rounded-2xl shadow-lg flex flex-col items-center space-y-2 w-64">
      <div className="relative">
        {/* Main Image */}
        <img
          src={AdminPartners01}
          alt="Admin Icon"
          className="w-7 h-7 md:w-10 md:h-10"
        />
        {/* Secondary Image (small badge) */}
        <img
          src={AdminPartners02}
          alt="Badge Icon"
          className="w-3 h-3 top-[1.4rem] left-[1.2rem] md:w-6 md:h-5 absolute md:top-7 md:-right-2"
        />
      </div>
      {/* Text */}
      <p className="text-sm font-semibold text-center">100+ Admin Partners</p>
    </div>
  );
};

export default AdminPartners;
