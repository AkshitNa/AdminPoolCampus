import NovaNectorWhite from "./NovaNectorWhite";

export const Footer = () => {
  return (
    <div className="bg-nav-gray py-8 sm:py-10 lg:py-14 font-kumbh text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 mr-1">
          {/* Company Logo and Buttons */}
          <div className="flex flex-col items-center sm:items-start">
            {/* NovaNector-White */}
            <div>
              <NovaNectorWhite />
            </div>

            <div className="flex space-x-3 mt-6">
              <button className="px-1 md:px-2 py-2 text-xs sm:text-base text-white bg-btn-yellow rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                Enroll Courses
              </button>
              <button className="px-1 md:px-2 py-2 text-xs sm:text-base text-white bg-btn-green rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                Pool Campus
              </button>
            </div>
          </div>

          {/* More Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">More</h3>
            <ul className="space-y-2">
              <li className="text-base sm:text-lg hover:text-gray-300 cursor-pointer">
                About Us
              </li>
              <li className="text-base sm:text-lg hover:text-gray-300 cursor-pointer">
                Blogs
              </li>
              <li className="text-base sm:text-lg hover:text-gray-300 cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-base sm:text-lg hover:text-gray-300 cursor-pointer">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-base sm:text-lg break-words">
                WhatsApp: 8979891703
              </li>
              <li className="text-base sm:text-lg break-words">
                Location: KTS Road Surat, Gujarat, India
              </li>
              <li className="text-base sm:text-lg break-words">
                Email: info@novanectar.co.in
              </li>
            </ul>
          </div>

          {/* Social Networks */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Social Network
            </h3>
            <ul className="space-y-2">
              <li className="text-base sm:text-lg hover:text-gray-300 cursor-pointer">
                <a
                  href="https://www.linkedin.com/company/novanectar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <i className="bi bi-linkedin mr-2"></i>LinkedIn
                </a>
              </li>

              <li className="text-base sm:text-lg hover:text-gray-300 cursor-pointer">
                <a
                  href="https://www.instagram.com/novanectar_services_pvt.ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <i className="bi bi-instagram mr-2"></i>Instagram
                </a>
              </li>

              <li className="text-base sm:text-lg hover:text-gray-300 cursor-pointer">
                <a
                  href="https://m.facebook.com/people/Nova-Nector/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                   <i className="bi bi-facebook mr-2"></i>Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
