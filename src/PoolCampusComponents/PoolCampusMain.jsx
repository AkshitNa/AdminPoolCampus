import CampusConnectLife from "../assets/CampusConnectLife.png";

const PoolCampusMain = () => {
  return (
    <>
      {/* Main Container */}
      <div className="bg-orange-light font-lato w-auto csm:w-full md:w-full lg:w-full overflow">
        {/* Image Section */}
        <div className="w-full mb-12">
          <img
            src={CampusConnectLife}
            alt="AdminConnect Working"
            className="w-full h-auto md:w-full md:h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* What is Admin Connect Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-16">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-6">
            What is <span className="text-btn-green">Pool Campus?</span>
          </h1>
          <p className="font-semibold text-base sm:text-lg lg:text-xl text-justify sm:text-start leading-relaxed">
            A Pool Campus is a recruitment event where multiple colleges and
            institutions collaborate to invite companies to hire students from a
            centralized platform. The primary purpose of a pool campus drive is
            to bridge the gap between talent and opportunity by offering a
            unified platform for recruitment.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="w-full">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-12">
            Why <span className="text-btn-green">Choose Us?</span>
          </h2>

          {/* Circles Container */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12 justify-items-center max-w-5xl mx-auto">
            {/* Circle Components */}
            {[
              { text: "Comprehensive Pre-Placement Support", position: "mt-10" },
              { text: "Streamlined Recruitment Process", position: "mb-10" },
              { text: "Diverse Opportunities Across Industries", position: "mt-10" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center"
              >
                <div className="rounded-full bg-orange-circle-3 w-48 h-48 sm:w-52 sm:h-52 lg:w-60 lg:h-60 flex items-center justify-center">
                  <div className="rounded-full bg-orange-circle-2 w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex items-center justify-center">
                    <div
                      className={`rounded-full bg-orange-circle w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 flex items-center justify-center ${item.position}`}
                    >
                      <p className="text-center text-black font-bold text-sm sm:text-base lg:text-lg px-3">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PoolCampusMain;
