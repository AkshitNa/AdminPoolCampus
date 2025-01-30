import ReviewImg from "../../assets/ReviewImg.png";
import React, { useState, useEffect } from "react";

export const ReviewCard = () => {
  const [activeItem, setActiveItem] = useState(0);
  const reviews = [
    {
      img: ReviewImg,
      name: "Neha Agrawal",
      position: "PG Certificate Programme in Data Science",
      text: "I started my career with a postal dept to enhance my skills. I joined IIM Nagpur Fintech course from Jaro. I was actively looking for a switch to corporate banking with help of the Corporate placement team at Jaro. I got the exact role which I was looking for. IIM Nagpur Fintech and Jaro placement team helped me get a hike of 40% on my previous salary.",
    },
    {
      img: ReviewImg,
      name: "Raj Kumar",
      position: "MBA in Finance",
      text: "I completed my MBA in Finance and started exploring Fintech. With the guidance from the team at IIM Nagpur, I shifted to a higher-paying role and improved my professional skills. Thanks to the placement support, I got an amazing opportunity in corporate banking.",
    },
    {
      img: ReviewImg,
      name: "Priya Sharma",
      position: "Engineer turned Data Scientist",
      text: "After completing my engineering, I realized I had a passion for data science. The IIM Nagpur Fintech course helped me bridge the gap between technical knowledge and business skills, landing me a role with great prospects.",
    },
    {
      img: ReviewImg,
      name: "Mudit Sharma",
      position: "Engineer turned Data Scientist",
      text: "After completing my engineering, I realized I had a passion for data science. The IIM Nagpur Fintech course helped me bridge the gap between technical knowledge and business skills, landing me a role with great prospects.",
    },
    {
      img: ReviewImg,
      name: "Robin Sharma",
      position: "Engineer turned Data Scientist",
      text: "After completing my engineering, I realized I had a passion for data science. The IIM Nagpur Fintech course helped me bridge the gap between technical knowledge and business skills, landing me a role with great prospects.",
    },
    {
      img: ReviewImg,
      name: "Veneet Gupta",
      position: "Engineer turned Data Scientist",
      text: "After completing my engineering, I realized I had a passion for data science. The IIM Nagpur Fintech course helped me bridge the gap between technical knowledge and business skills, landing me a role with great prospects.",
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    const increment = isMobile ? 1 : 2;
    setActiveItem((prev) => (prev >= reviews.length - increment ? 0 : prev + increment));
  };

  const prevSlide = () => {
    const increment = isMobile ? 1 : 2;
    setActiveItem((prev) => (prev === 0 ? reviews.length - increment : prev - increment));
  };

  // Calculate progress for the sliding bar
  const totalSteps = isMobile ? reviews.length : Math.ceil(reviews.length / 2);

  const progress = ((activeItem + (isMobile ? 6 : 2)) / totalSteps) * 50;

  return (
    <div className="bg-orange-light pb-14">
      <div className="bg-orange-light relative w-full max-w-full py-5 mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-lato text-3xl sm:text-4xl my-5 text-white font-semibold">
          <span className="text-black">Review From </span> <span className="text-btn-green">Students </span>
        </p>
        <div className="relative h-[28rem] sm:h-[24rem] md:h-[20rem] lg:h-72 overflow-hidden rounded-lg mb-5 px-4 sm:px-10">
          <div 
            className="flex gap-4 h-full transition-all duration-700 ease-in-out"
            style={{ 
              transform: `translateX(-${activeItem * (isMobile ? 100 : 50)}%)` 
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`flex-shrink-0 transition-opacity duration-700 ${
                  isMobile ? 'w-full' : 'w-1/2'
                }`}
                style={{ 
                  opacity: isMobile 
                    ? index === activeItem ? 1 : 0.5
                    : (index === activeItem || index === activeItem + 1) ? 1 : 0.5
                }}
              >
                <div className="bg-gray-100 h-full w-full p-4 sm:p-5 rounded-lg">
                  <div className="text-sm sm:text-md text-black mb-3 sm:mb-4 overflow-y-auto mx-2 sm:mx-5 max-h-[60%] sm:max-h-[50%]">
                    {review.text}
                  </div>
                  <div className="flex items-center mt-2 sm:mt-3 ml-2 sm:ml-3">
                    <img
                      src={review.img}
                      alt={`Review of ${review.name}`}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-1"
                    />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">
                        {review.name}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        {review.position}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons and Sliding Bar */}
        <div className="flex items-center justify-center gap-4 mx-auto">
          <button
            type="button"
            className="p-1 sm:p-2 cursor-pointer group focus:outline-none"
            onClick={prevSlide}
            aria-label="Previous review"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-btn-yellow group-hover:bg-btn-yellow group-focus:ring-4 group-focus:ring-whitgroup-focus:outline-none">
              <svg
                className="w-4 h-4 sm:w-4 sm:h-4 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </span>
          </button>

          {/* Sliding Bar */}
          <div className="w-[1.5rem] md:w-[5rem] h-2 bg-gray-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-btn-yellow rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <button
            type="button"
            className="p-1 sm:p-2 cursor-pointer group focus:outline-none"
            onClick={nextSlide}
            aria-label="Next review"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-btn-yellow group-hover:bg-btn-yellow group-focus:ring-4 group-focus:ring-whitgroup-focus:outline-none">
              <svg
                className="w-4 h-4 sm:w-4 sm:h-4 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};