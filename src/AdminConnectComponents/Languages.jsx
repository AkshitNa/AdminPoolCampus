const Languages = () => {
  return (
    <>
      {/* Cards Section */}
      <div className="container mx-auto px-4 my-12 font-lato">
        <p className="text-btn-green text-2xl font-semibold">Languages</p>

        <div className="bg-orange-50 rounded-xl p-6 sm:p-10 lg:p-16 max-w-5xl mx-auto">
          <p className="text-black font-semibold text-2xl mb-10 ml-5">
            Choose a language
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
            {[
              "English",
              "Hindi",
              "Nederlands",
              "Deutsch",
              "Marathi",
              "Polski",
              "Espanol",
              "Telugu",
              "Portugues",
              "Francais",
              "Tamil",
              "Romana",
              "Italiano",
              "Gujarati",
              "Bahasa Indonesia",
            ].map((language, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-orange-circle-3 to-orange-400 text-white text-wrap text-center font-semibold py-3 px-5 md:px-5 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out truncate"
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Languages;
