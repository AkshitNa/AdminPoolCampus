export const Industry = () => {
  return (
    <div className="bg-orange-light py-10">
      <div className="bg-industry-green py-[5rem]">
        {/* Title Section */}
        <div className="text-center text-white text-2xl sm:text-2xl md:text-xl lg:text-2xl mb-10">
          15+ Years In the Industry
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-8 md:px-12 lg:px-20 font-lato">
          {/* Alumni Section */}
          <div className="flex justify-center transform -translate-y-4 sm:-translate-y-6">
            <div className="text-center text-white">
              <div className="text-lg sm:text-lg lg:text-lg font-bold">
                450,000+
              </div>
              <div className="text-sm sm:text-md lg:text-lg">
                Number of Alumni
              </div>
            </div>
          </div>

          {/* Academic Partners Section */}
          <div className="flex justify-center transform translate-y-4 sm:translate-y-6">
            <div className="text-center text-white">
              <div className="text-lg sm:text-lg lg:text-lg font-bold">
                30+
              </div>
              <div className="text-sm sm:text-md lg:text-lg">
                World's Leading Academic Partners
              </div>
            </div>
          </div>

          {/* Programs Section */}
          <div className="flex justify-center transform -translate-y-4 sm:-translate-y-6">
            <div className="text-center text-white">
              <div className="text-lg sm:text-lg lg:text-lg font-bold">
                120+
              </div>
              <div className="text-sm sm:text-md lg:text-lg">
                Programs from Diverse Domains
              </div>
            </div>
          </div>

          {/* Corporate Learning Centres Section */}
          <div className="flex justify-center transform translate-y-4 sm:translate-y-6">
            <div className="text-center text-white">
              <div className="text-lg sm:text-lg lg:text-lg font-bold">
                23+
              </div>
              <div className="text-sm sm:text-md lg:text-lg">
                Corporate Learning Centres across India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
