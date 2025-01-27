import NovaNectarBlueBlack from "../../assets/NovaNectorLogo.svg";
import SearchButton from "../../assets/SearchButton.png";
import LoginUser from "../../assets/LoginUser.png";
import Bell from "../../assets/Bell.png";

import Login from "../LoginForm/Login";
import SignUp from "../SignUp/SignUp";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronUp, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import FreeConsultationFrom from "../SuperConsultationForm/FreeConsultationFrom";

// Context
import { useMyData } from "../../Context/Provider";

const NavBar = () => {
  // Context Values
  const navBarData = useMyData();

  // Show Profile Drop Down Bar
  const [showMobileProfileBar, setShowMobileProfileBar] = useState(false);
  const [showDesktopProfileBar, setShowDesktopProfileBar] = useState(false);

  //Login And Sign Up Form
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [freeConsultation, setFreeConsultation] = useState(false);

  //More
  const [arrow, setArrow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleArrow = () => {
    setArrow(!arrow);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileBar(false);
      }
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target)
      ) {
        setArrow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4 bg-orange-light min-w-full mx-auto">
      <div className="bg-gray-50 min-w-full font-kumbh relative flex flex-col md:flex-row md:flex-shrink justify-between items-center py-3 px-[3rem] border-2 border-btn-yellow rounded-3xl overflow-hidden md:overflow-scroll lg:overflow-visible">
        {/* Logo & Title - Always visible */}
        <div className="flex w-full justify-around gap-3 md:gap-0 md:justify-between items-center">
          {/* Logo of NovaNector */}
          <div className="flex items-center">
            <div>
              <Link to="/">
                <img
                  src={NovaNectarBlueBlack}
                  alt="NovaNectar"
                  className="min-w-8 min-h-8 md:w-10 md:h-10 object-contain"
                />
              </Link>
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-nova-blue ml-2 text-base sm:text-lg">
                NOVANECTAR
              </p>
              <p className="font-kumbh font-semibold ml-2 text-xs sm:text-sm">
                SERVICESPVT.LTD.
              </p>
            </div>
          </div>

          {/* Only Visible On Mobile View */}
          {/* Login-LogOut Bell User */}
          {!navBarData.register ? (
            <div className="block md:hidden">
              <div className="flex gap-[0.5rem]">
                <button
                  className="bg-btn-yellow py-1 px-1 w-[4rem] text-wrap text-white rounded-md hover:bg-opacity-90 transition-colors text-xs"
                  onClick={() => setSignUp(true)}
                >
                  Sign Up
                </button>
                <button
                  className="bg-white py-1 w-[3rem] text-wrap text-btn-green border-2 border-btn-green rounded-md hover:bg-gray-50 transition-colors text-xs"
                  onClick={() => setLogin(true)}
                >
                  Log In
                </button>
              </div>
            </div>
          ) : (
            <div className="block md:hidden">
              <div className="flex items-center gap-4">
                <div>
                  <img src={Bell} alt="Bell" className="w-8 h-6" />
                </div>
                <div ref={dropdownRef}>
                  <img
                    src={LoginUser}
                    alt="LoginUser"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => {
                      setShowMobileProfileBar(!showMobileProfileBar);
                      console.log(
                        "Value of ProfileBar Mobile: " + showMobileProfileBar
                      );
                    }}
                  />
                </div>

                {showMobileProfileBar && (
                  <div className="absolute top-12 right-8 z-60 mt-2 py-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100">
                    <div className="flex flex-col font-semibold">
                      <p className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-btn-yellow">
                        Hii, {navBarData.username} 😊
                      </p>

                      <NavLink
                        to="/Userprofile"
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "text-btn-yellow"
                              : "text-black hover:text-btn-yellow"
                          } px-4 py-2 text-sm`
                        }
                        onClick={() => {
                          setShowMobileProfileBar(false);
                        }}
                      >
                        Profile
                      </NavLink>

                      <NavLink
                        to="/UserPurchases"
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "text-btn-yellow"
                              : "text-black hover:text-btn-yellow"
                          } px-4 py-2 text-sm`
                        }
                        onClick={() => {
                          setShowMobileProfileBar(false);
                        }}
                      >
                        Purchases
                      </NavLink>

                      <NavLink
                        to="/UserLanguage"
                        className={({ isActive }) =>
                          `${
                            isActive
                              ? "text-btn-yellow"
                              : "text-black hover:text-btn-yellow"
                          } px-4 py-2 text-sm`
                        }
                        onClick={() => {
                          setShowMobileProfileBar(false);
                        }}
                      >
                        Languages
                      </NavLink>

                      <p
                        className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-btn-yellow"
                        onClick={() => {
                          navBarData.setRegister(false);
                        }}
                      >
                        Log out
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div>
            <button
              className="md:hidden p-3 rounded-lg hover:bg-gray-100"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 text-gray-800" />
              ) : (
                <Menu className="h-8 w-8 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu and Desktop Content */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row items-center gap-[1rem] w-full mt-3 md:mt-0`}
        >
          {/* Search Bar */}
          <div className="flex min-w-[4rem] gap-1 p-0.5 ml-2 border-2 border-btn-yellow rounded-md w-[13rem] md:w-[18rem] order-2 md:order-1">
            <div className="flex-grow">
              <input
                type="search"
                className="p-2 w-full bg-transparent outline-none text-base md:text-md"
                placeholder="Explore Courses"
              />
            </div>
            <div>
              <img
                src={SearchButton}
                alt="SearchButton"
                className="w-6 h-6 sm:w-8 sm:h-8 object-cover mt-1"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row font-semibold items-center gap-2 md:gap-6 w-full md:w-auto order-1 md:order-2">
            <div className="hover:text-btn-yellow cursor-pointer w-full md:w-[3rem] text-center py-2 md:py-0 text-sm md:text-lg">
              <NavLink
                to="/AdminConnect"
                className={({ isActive }) =>
                  isActive ? "text-btn-yellow" : "text-black"
                }
              >
                Home
              </NavLink>
            </div>

            {navBarData.adminPool && (
              <div className="hover:text-btn-yellow cursor-pointer w-full md:w-[9rem] text-center py-2 md:py-0 text-sm md:text-lg">
                <NavLink
                  to="/AdminConnectMain"
                  className={({ isActive }) =>
                    isActive ? "text-btn-yellow" : "text-black"
                  }
                >
                  Admin Connect
                </NavLink>
              </div>
            )}

            {navBarData.campusPool && (
              <div className="hover:text-btn-yellow cursor-pointer w-full md:w-[9rem] text-center py-2 md:py-0 text-sm md:text-lg">
                <NavLink
                  to="/PoolCampusMain"
                  className={({ isActive }) =>
                    isActive ? "text-btn-yellow" : "text-black"
                  }
                >
                  Pool Campus
                </NavLink>
              </div>
            )}

            {navBarData.adminPool ? (
              <div className="hover:text-btn-yellow cursor-pointer w-full md:w-[5rem] text-center py-2 md:py-0 text-sm md:text-lg">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-btn-yellow" : "text-black"
                  }
                >
                  About Us
                </NavLink>
              </div>
            ) : (
              <div className="hover:text-btn-yellow cursor-pointer w-full md:w-[5rem] text-center py-2 md:py-0 text-sm md:text-lg">
                <NavLink
                  to="/aboutCampus"
                  className={({ isActive }) =>
                    isActive ? "text-btn-yellow" : "text-black"
                  }
                >
                  About Us
                </NavLink>
              </div>
            )}

            <div ref={moreDropdownRef} className="relative w-full md:w-auto">
              <div
                className="hover:text-btn-yellow cursor-pointer w-full md:w-auto text-center py-2 md:py-0 text-xs md:text-lg flex items-center justify-center gap-1"
                onClick={handleArrow}
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
                  <div className="flex flex-col">
                    <NavLink
                      to="/contactUs"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-btn-yellow"
                            : "text-black hover:text-btn-yellow"
                        } px-4 py-2 text-sm text-center md:text-left`
                      }
                      onClick={() => setArrow(false)}
                    >
                      Contact
                    </NavLink>

                    {navBarData.adminPool ? (
                      <>
                        <NavLink
                          to="/blog"
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-btn-yellow"
                                : "text-black hover:text-btn-yellow"
                            } px-4 py-2 text-sm text-center md:text-left`
                          }
                          onClick={() => setArrow(false)}
                        >
                          Blog
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink
                          to="/blogCampus"
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-btn-yellow"
                                : "text-black hover:text-btn-yellow"
                            } px-4 py-2 text-sm text-center md:text-left`
                          }
                          onClick={() => setArrow(false)}
                        >
                          Blog
                        </NavLink>
                      </>
                    )}

                    <p
                      className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 hover:text-btn-yellow text-center md:text-left"
                      onClick={() => {
                        setArrow(false);
                        setFreeConsultation(true);
                      }}
                    >
                      Free Consultation
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SignUp/LogIn Buttons */}
          <div className="flex gap-4 w-full md:w-auto justify-center md:justify-end order-3">
            {navBarData.register ? (
              <div className="hidden sm:block">
                <div className="flex items-center gap-4">
                  <div>
                    <img src={Bell} alt="Bell" className="w-12 h-8" />
                  </div>
                  <div ref={dropdownRef}>
                    <img
                      src={LoginUser}
                      alt="LoginUser"
                      className="w-12 h-8 cursor-pointer"
                      onClick={() =>
                        setShowDesktopProfileBar(!showDesktopProfileBar)
                      }
                    />
                  </div>

                  {showDesktopProfileBar && (
                    <div className="absolute top-full right-0 z-60 mt-2 py-2 w-32 bg-white rounded-lg shadow-lg border border-gray-100">
                      <div className="flex flex-col font-semibold">
                        <p className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-btn-yellow">
                          Hii, {navBarData.username} 😊
                        </p>

                        <NavLink
                          to="/Userprofile"
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-btn-yellow"
                                : "text-black hover:text-btn-yellow"
                            } px-4 py-2 text-sm`
                          }
                          onClick={() => {
                            setShowDesktopProfileBar(false);
                          }}
                        >
                          Profile
                        </NavLink>

                        <NavLink
                          to="/UserPurchases"
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-btn-yellow"
                                : "text-black hover:text-btn-yellow"
                            } px-4 py-2 text-sm`
                          }
                          onClick={() => {
                            setShowDesktopProfileBar(false);
                          }}
                        >
                          Purchases
                        </NavLink>

                        <NavLink
                          to="/UserLanguage"
                          className={({ isActive }) =>
                            `${
                              isActive
                                ? "text-btn-yellow"
                                : "text-black hover:text-btn-yellow"
                            } px-4 py-2 text-sm`
                          }
                          onClick={() => {
                            setShowDesktopProfileBar(false);
                          }}
                        >
                          Languages
                        </NavLink>

                        <p
                          className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-btn-yellow"
                          onClick={() => {
                            navBarData.setRegister(false);
                          }}
                        >
                          Log out
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="hidden sm:block">
                <div className="flex gap-[1rem]">
                  <button
                    className="bg-btn-yellow py-2 w-[5.5rem] text-wrap text-white rounded-md hover:bg-opacity-90 transition-colors text-md sm:text-base"
                    onClick={() => setSignUp(true)}
                  >
                    Sign Up
                  </button>
                  <button
                    className="bg-white py-2 w-[5.5rem] text-wrap text-btn-green border-2 border-btn-green rounded-md hover:bg-gray-50 transition-colors text-md sm:text-base"
                    onClick={() => setLogin(true)}
                  >
                    Log In
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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
