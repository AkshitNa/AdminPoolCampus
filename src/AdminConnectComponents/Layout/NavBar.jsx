import NovaNectarBlueBlack from "../../assets/NovaNectorLogo.svg";
import SearchButton from "../../assets/SearchButton.png";
import LoginUser from "../../assets/LoginUser.png";
import Bell from "../../assets/Bell.png";

import Login from "../LoginForm/Login";
import SignUp from "../SignUp/SignUp";
import FreeConsultationFrom from "../SuperConsultationForm/FreeConsultationFrom";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useMyData } from "../../Context/Provider";

// Components
const ProfileDropdown = ({ username, setRegister, onClose, routes }) => (
  <div className="absolute top-12 right-8 z-40 mt-2 py-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100">
    <div className="flex flex-col font-semibold">
      <p className="text-black px-4 py-2 text-sm hover:text-btn-yellow">
        Hii, {username} 😊
      </p>
      {routes.map(route => (
        <NavLink
          key={route.path}
          to={route.path}
          className={({ isActive }) =>
            `${isActive ? "text-btn-yellow" : "text-black hover:text-btn-yellow"} px-4 py-2 text-sm`
          }
          onClick={onClose}
        >
          {route.label}
        </NavLink>
      ))}
      <p
        className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-btn-yellow cursor-pointer"
        onClick={() => setRegister(false)}
      >
        Log out
      </p>
    </div>
  </div>
);

const NavBar = () => {
  const navBarData = useMyData();
  const [isSticky, setIsSticky] = useState(false);
  const [showMobileProfileBar, setShowMobileProfileBar] = useState(false);
  const [showDesktopProfileBar, setShowDesktopProfileBar] = useState(false);
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [freeConsultation, setFreeConsultation] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);

  const profileRoutes = [
    { path: "/userProfile", label: "Profile" },
    { path: "/UserPurchases", label: "Purchases" },
    { path: "/UserLanguage", label: "Languages" }
  ];

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMobileProfileBar(false);
        setShowDesktopProfileBar(false);
      }
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const AuthButtons = ({ isMobile = false }) => (
    <div className={`flex gap-${isMobile ? '[0.5rem]' : '[1rem]'}`}>
      <button
        className={`bg-btn-yellow py-${isMobile ? '1' : '2'} px-${isMobile ? '1' : '0'} w-${isMobile ? '[4rem]' : '[5.5rem]'} text-wrap text-white rounded-md hover:bg-opacity-90 transition-colors text-${isMobile ? 'xs' : 'base'}`}
        onClick={() => setSignUp(true)}
      >
        Sign Up
      </button>
      <button
        className={`bg-white py-${isMobile ? '1' : '2'} w-${isMobile ? '[3rem]' : '[5.5rem]'} text-wrap text-btn-green border-2 border-btn-green rounded-md hover:bg-gray-50 transition-colors text-${isMobile ? 'xs' : 'base'}`}
        onClick={() => setLogin(true)}
      >
        Log In
      </button>
    </div>
  );

  return (
    <div className={`p-4 bg-orange-light min-w-full mx-auto ${isSticky ? "sticky top-0 bg-orange-light z-20" : ""}`}>
      <div className="bg-gray-50 min-w-full font-kumbh relative flex flex-col md:flex-row md:flex-shrink justify-between items-center py-3 px-[3rem] border-2 border-btn-yellow rounded-3xl overflow-visible md:overflow-scroll lg:overflow-visible z-20">
        {/* Header Section */}
        <div className="flex w-full justify-around gap-3 md:gap-0 md:justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={NovaNectarBlueBlack}
              alt="NovaNectar"
              className="min-w-8 min-h-8 md:w-10 md:h-10 object-contain"
            />
            <div className="hidden sm:block">
              <p className="font-semibold text-nova-blue ml-2 text-base sm:text-lg">NOVANECTAR</p>
              <p className="font-kumbh font-semibold ml-2 text-xs sm:text-sm">SERVICESPVT.LTD.</p>
            </div>
          </Link>

          {/* Mobile Auth */}
          <div className="block md:hidden">
            {!navBarData.register ? (
              <AuthButtons isMobile={true} />
            ) : (
              <div className="flex items-center gap-4" ref={dropdownRef}>
                <img src={Bell} alt="Bell" className="w-8 h-6" />
                <img
                  src={LoginUser}
                  alt="LoginUser"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setShowMobileProfileBar(!showMobileProfileBar)}
                />
                {showMobileProfileBar && (
                  <ProfileDropdown
                    username={navBarData.username}
                    setRegister={navBarData.setRegister}
                    onClose={() => setShowMobileProfileBar(false)}
                    routes={profileRoutes}
                  />
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-3 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8 text-gray-800" />
            ) : (
              <Menu className="h-8 w-8 text-gray-800" />
            )}
          </button>
        </div>

        {/* Navigation Content */}
        <div className={`${isMenuOpen ? "flex" : "hidden"} flex-col md:flex md:flex-row items-center gap-[1rem] w-full mt-3 md:mt-0`}>
          {/* Search Bar */}
          <div className="flex min-w-[4rem] gap-1 p-0.5 ml-2 border-2 border-btn-yellow rounded-md w-[13rem] md:w-[18rem] order-2 md:order-1">
            <input
              type="search"
              className="p-2 w-full bg-transparent outline-none text-base md:text-md"
              placeholder="Explore Courses"
            />
            <img
              src={SearchButton}
              alt="SearchButton"
              className="w-10 h-9 mb-[0.2rem] sm:w-8 sm:h-8 sm:mb-[0rem] object-cover mt-1"
            />
          </div>

          {/* Nav Links */}
          <div className="flex flex-col md:flex-row font-semibold items-center gap-2 md:gap-6 w-full md:w-auto order-1 md:order-2">
            <NavLink
              to="/AdminConnect"
              className={({ isActive }) =>
                `hover:text-btn-yellow cursor-pointer w-full md:w-[3rem] text-center py-2 md:py-0 text-sm md:text-lg ${
                  isActive ? "text-btn-yellow" : "text-black"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>

            {/* Conditional Nav Links */}
            {navBarData.adminPool && (
              <NavLink
                to="/AdminConnectMain"
                className={({ isActive }) =>
                  `hover:text-btn-yellow cursor-pointer w-full md:w-[9rem] text-center py-2 md:py-0 text-sm md:text-lg ${
                    isActive ? "text-btn-yellow" : "text-black"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Admin Connect
              </NavLink>
            )}

            {/* More Dropdown */}
            <div ref={moreDropdownRef} className="relative w-full md:w-auto">
              <div
                className="hover:text-btn-yellow cursor-pointer w-full md:w-auto text-center py-2 md:py-0 text-xs md:text-lg flex items-center justify-center gap-1"
                onClick={() => setArrow(!arrow)}
              >
                More
                {arrow ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>

              {arrow && (
                <div className="md:absolute z-50 md:mt-2 w-full md:w-40 bg-white rounded-lg shadow-lg border border-gray-100">
                  <NavLink
                    to="/contactUs"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-btn-yellow" : "text-black hover:text-btn-yellow"
                      } px-4 py-2 text-sm text-center md:text-left block`
                    }
                    onClick={() => setArrow(false)}
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    to={navBarData.adminPool ? "/blog" : "/blogCampus"}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-btn-yellow" : "text-black hover:text-btn-yellow"
                      } px-4 py-2 text-sm text-center md:text-left block`
                    }
                    onClick={() => setArrow(false)}
                  >
                    Blog
                  </NavLink>
                  <button
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-btn-yellow"
                    onClick={() => {
                      setArrow(false);
                      setFreeConsultation(true);
                    }}
                  >
                    Free Consultation
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Auth */}
          <div className="hidden sm:block order-3">
            {navBarData.register ? (
              <div className="flex items-center gap-4" ref={dropdownRef}>
                <img src={Bell} alt="Bell" className="w-12 h-8 md:w-12 md:h-8 lg:w-14 lg:h-10 xl:w-12 xl:h-8" />
                <img
                  src={LoginUser}
                  alt="LoginUser"
                  className="w-12 h-8 md:w-12 md:h-8 lg:w-14 lg:h-10 xl:w-11 xl:h-8 cursor-pointer"
                  onClick={() => setShowDesktopProfileBar(!showDesktopProfileBar)}
                />
                {showDesktopProfileBar && (
                  <ProfileDropdown
                    username={navBarData.username}
                    setRegister={navBarData.setRegister}
                    onClose={() => setShowDesktopProfileBar(false)}
                    routes={profileRoutes}
                  />
                )}
              </div>
            ) : (
              <AuthButtons />
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {login && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <Login setLogin={setLogin} setSignUp={setSignUp} />
        </div>
      )}
      {signUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <SignUp setSignUp={setSignUp} setLogin={setLogin} />
        </div>
      )}
      {freeConsultation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <FreeConsultationFrom setFreeConsultation={setFreeConsultation} />
        </div>
      )}
    </div>
  );
};

export default NavBar;