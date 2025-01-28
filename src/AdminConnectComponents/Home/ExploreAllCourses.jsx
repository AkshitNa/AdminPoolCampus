import Placement01 from "../../assets/Courses/Placement01.png";
import Placement02 from "../../assets/Courses/Placement02.png";
import Placement03 from "../../assets/Courses/Placement03.png";
import Placement04 from "../../assets/Courses/Placement04.png";
import Placement05 from "../../assets/Courses/Placement05.png";
import Placement06 from "../../assets/Courses/Placement06.png";
import Placement07 from "../../assets/Courses/Placement07.png";
import Placement08 from "../../assets/Courses/Placement08.png";

import React, { useState } from "react";

export const ExploreAllCourses = () => {
  // State to manage the active category
  const [activeCategory, setActiveCategory] = useState("Popular Programs");

  // Data for the courses
  const courses = [
    {
      id: 1,
      category: "Programming Languages",
      title: "Learn Java Programming",
      image: Placement01,
      learners: "99.1k+ Learners",
      duration: "10 - 12 Months",
      isPopular: true,
    },
    {
      id: 2,
      category: "Programming Languages",
      title: "Learn Basic Python Programming",
      image: Placement02,
      learners: "42.7k+ learners",
      duration: "8 Months",
      isPopular: false,
    },
    {
      id: 3,
      category: "Web Development",
      title: "JavaScript Basic from Scratch",
      image: Placement02,
      learners: "40.6k+ learners",
      duration: "1 Year",
      isPopular: true,
    },
    {
      id: 4,
      category: "Cloud Computing",
      title: "Cloud Computing Essentials",
      image: Placement06,
      learners: "12.5k+ learners",
      duration: "6 Months",
      isPopular: false,
    },
    {
      id: 5,
      category: "Web Development",
      title: "Full Stack Development Bootcamp",
      image: Placement05,
      learners: "58.3k+ learners",
      duration: "9 Months",
      isPopular: true,
    },
    {
      id: 6,
      category: "Cloud Computing",
      title: "AWS Certified Solutions Architect",
      image: Placement06,
      learners: "25.1k+ learners",
      duration: "4 Months",
      isPopular: true,
    },
    {
      id: 7,
      category: "Data Science And Machine Learning",
      title: "Machine Learning for Beginners",
      image: Placement07,
      learners: "30.7k+ learners",
      duration: "7 Months",
      isPopular: false,
    },
    {
      id: 8,
      category: "Cybersecurity",
      title: "Ethical Hacking Basics",
      image: Placement08,
      learners: "17.8k+ learners",
      duration: "5 Months",
      isPopular: false,
    },
    {
      id: 9,
      category: "Web Development",
      title: "React.js Advanced Concepts",
      image: Placement01,
      learners: "22.9k+ learners",
      duration: "3 Months",
      isPopular: true,
    },
    {
      id: 10,
      category: "Cloud Computing",
      title: "Introduction to Google Cloud Platform",
      image: Placement02,
      learners: "10.4k+ learners",
      duration: "4 Months",
      isPopular: false,
    },
    {
      id: 11,
      category: "Data Science And Machine Learning",
      title: "Deep Learning Essentials",
      image: Placement03,
      learners: "18.9k+ learners",
      duration: "8 Months",
      isPopular: true,
    },
    {
      id: 12,
      category: "Cybersecurity",
      title: "Cybersecurity Fundamentals",
      image: Placement04,
      learners: "29.6k+ learners",
      duration: "6 Months",
      isPopular: true,
    },
    {
      id: 13,
      category: "Web Development",
      title: "CSS and Flexbox Mastery",
      image: Placement05,
      learners: "35.2k+ learners",
      duration: "2 Months",
      isPopular: false,
    },
    {
      id: 14,
      category: "Cloud Computing",
      title: "Azure Administration Basics",
      image: Placement06,
      learners: "14.3k+ learners",
      duration: "5 Months",
      isPopular: false,
    },
    {
      id: 15,
      category: "Data Science And Machine Learning",
      title: "Python for Data Analysis",
      image: Placement07,
      learners: "49.5k+ learners",
      duration: "10 Months",
      isPopular: true,
    },
    {
      id: 16,
      category: "Cybersecurity",
      title: "Penetration Testing with Kali Linux",
      image: Placement08,
      learners: "21.4k+ learners",
      duration: "7 Months",
      isPopular: false,
    },
  ];

  // Filtered courses based on the active category
  const filteredCourses =
    activeCategory === "Popular Programs"
      ? courses.filter((course) => course.isPopular)
      : courses.filter((course) => course.category === activeCategory);

  return (
    <div className="bg-orange-light">
      {/* Title */}
      <p className="text-center font-lato text-3xl sm:text-4xl md:text-5xl font-semibold pt-5">
        <span className="text-btn-green">All Available Courses</span>
      </p>

      {/* Navigation Tabs */}
      <div className="px-[12rem]">
        <div className="bg-orange-light flex flex-wrap justify-center gap-3 px-4 font-semibold mt-8 border-b-2 border-gray-500">
          {[
            "Popular Programs",
            "Programming Languages",
            "Web Development",
            "Cloud Computing",
            "Data Science And Machine Learning",
            "Cybersecurity",
          ].map((category) => (
            <div
              key={category}
              className={`p-2 rounded-md cursor-pointer ${
                activeCategory === category
                  ? "text-white bg-btn-green"
                  : "hover:text-white hover:bg-btn-green"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="bg-orange-light grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 px-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white border-2 border-btn-green rounded-3xl"
          >
            <div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-auto rounded-t-3xl"
              />
            </div>
            <div className="p-5">
              <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
                {course.title}
              </div>
              <div className="text-center">
                <div className="text-sm sm:text-base my-1">
                  <i className="bi bi-people-fill"></i> {course.learners}
                </div>
                <div className="text-sm sm:text-base">
                  <i className="bi bi-clock-fill"></i> {course.duration}
                </div>
              </div>
              <div className="flex justify-center mt-5 pb-3">
                <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                  View Program
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
