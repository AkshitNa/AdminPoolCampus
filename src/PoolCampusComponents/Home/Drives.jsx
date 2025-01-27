export const Drives = () => {
  return (
    <div className="bg-orange-light mx-auto px-4 sm:px-6 lg:px-10">
      <div className="text-center font-semibold text-4xl font-lato pt-5">
        Upcoming <span className="text-btn-green">Drives</span>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
        {/* Card 01 */}
        <div className="bg-gray-100 font-lato flex flex-col p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-btn-green">
          <div className="text-card-text-green font-semibold text-center text-lg">
            Tech Horizons 2025
          </div>
          <div className="font-semibold my-3">Focus: IT and Software Roles</div>

          <div className="flex-col justify-start items-start ml-1 my-3">
            <div>Date: 29-03-2025</div>
            <div>Time: 12:40 PM</div>
          </div>

          <div className="text-wrap my-3">
            Location: VNIT College Campus, Khamla Road, Nagpur
          </div>

          <div className="flex justify-center">
            <button className="p-2 px-3 mt-5 font-semibold text-btn-yellow border border-btn-yellow">
              View Event
            </button>
          </div>
        </div>

        {/* Card 02 */}
        <div className="bg-gray-100 font-lato flex flex-col p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-btn-green">
          <div className="text-card-text-green font-semibold text-center text-lg">
            Career Connect Drive
          </div>
          <div className="font-semibold my-3 text-wrap">
            Focus: General Placements Across Industries
          </div>

          <div className="flex-col justify-start items-start ml-1 my-3">
            <div>Date: 29-03-2025</div>
            <div>Time: 11:30 AM</div>
          </div>

          <div className="text-wrap my-3">
            Location: VNIT College Campus, Khamla Road, Nagpur
          </div>

          <div className="flex justify-center">
            <button className="p-2 px-3 mt-5 font-semibold text-btn-yellow border border-btn-yellow">
              View Event
            </button>
          </div>
        </div>

        {/* Card 03 */}
        <div className="bg-gray-100 font-lato flex flex-col p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-btn-green">
          <div className="text-card-text-green font-semibold text-center text-lg">
            Engineering Excellence Hiring
          </div>
          <div className="font-semibold my-3">Focus: Core Engineering Jobs</div>

          <div className="flex-col justify-start items-start ml-1 my-3">
            <div>Date: 29-03-2025</div>
            <div>Time: 09:00 AM</div>
          </div>

          <div className="text-wrap my-3">
            Location: VNIT College Campus, Khamla Road, Nagpur
          </div>

          <div className="flex justify-center">
            <button className="p-2 px-3 mt-5 font-semibold text-btn-yellow border border-btn-yellow">
              View Event
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="p-2 px-3 mt-5 text-black font-semibold bg-gray-100 border border-black rounded-lg mb-5">
          Explore All
        </button>
      </div>
    </div>
  );
};
