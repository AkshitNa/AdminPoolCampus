import AdminConnectWorking from "../assets/AdminConnectWorking.png";

const AdminConnectMain = () => {
  return (
    <>
      {/* Main Container */}
      <div className="bg-orange-light font-lato w-auto csm:w-full md:w-full lg:w-full overflow">
        {/* Image Section */}
        <div className="w-full mb-12">
            <img
              src={AdminConnectWorking}
              alt="AdminConnect Working"
              className="w-full h-auto md:w-full md:h-auto object-cover rounded-lg shadow-lg"
            />
        </div>

        {/* What is Admin Connect Section */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-16">
          <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-black mb-6">
            What is a <span className="text-btn-green">Admin Connect?</span>
          </h1>
          <p className="font-semibold text-base sm:text-lg lg:text-xl text-justify sm:text-start leading-relaxed">
            Admission Connect is a platform that simplifies the admission
            process by connecting students with colleges and courses while
            enabling institutions to manage applications and communicate with
            candidates. It serves as a centralized hub for exploring programs
            and streamlining enrollment.
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
              { text: "Academic Flexibility", position: "mt-10" },
              { text: "Skill Development Courses", position: "mb-10" },
              { text: "Campus Facilities", position: "mt-10" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center"
              >
                <div className="rounded-full bg-orange-circle-3 w-48 h-48 sm:w-52 sm:h-52 lg:w-60 lg:h-60 flex items-center justify-center">
                  <div className="rounded-full bg-orange-circle-2 w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex items-center justify-center">
                    <div className={`rounded-full bg-orange-circle w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 flex items-center justify-center ${item.position}`}>
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

export default AdminConnectMain;