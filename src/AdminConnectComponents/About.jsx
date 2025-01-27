import AboutUs from "../assets/AboutUs.png";
import About01 from "../assets/About01.png";
import About02 from "../assets/About02.png";
import { Industry } from "./Home/Industry";

export const About = () => {
  return (
    <div>
      {/* About us Image */}
      <div className="w-full mb-12">
          <img
            src={AboutUs}
            alt="AdminConnect Working"
            className="w-full h-auto md:w-full md:h-auto object-cover rounded-lg shadow-lg"
          />
        
      </div>

      <div className="mb-5">
        <p className="text-btn-green font-semibold text-lg md:text-4xl text-center mb-5">
          About us
        </p>
        <p className="text-sm md:text-lg px-[4rem]">
          Welcome to Website Name, your trusted partner in preparing for a
          successful career. We offer comprehensive pre-placement courses to
          equip students and fresh graduates with the skills, knowledge, and
          confidence to excel in competitive campus placements and beyond.
        </p>
      </div>
      {/* Images and Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-[6rem] bg-orange-light px-5">
        {/* First Circular Div */}
        <div className="flex items-center justify-center">
          <div className="bg-btn-yellow rounded-full w-40 h-40 flex items-center justify-center">
            <img
              src={About01}
              alt="Image inside circle"
              className="w-[7rem] h-[7rem] object-cover"
            />
          </div>
        </div>

        {/* Mission Text */}
        <div>
          <p className="font-bold text-lg text-center">Mission</p>
          <p>
            Our mission is to bridge the gap between education and employment by
            connecting talented students with top recruiters through pool campus
            drives. We empower students with industry-relevant pre-placement
            courses, equipping them with the skills and confidence to excel in
            their careers.
          </p>
        </div>

        {/* Vision Text */}
        <div>
          <p className="font-bold text-lg text-center">Vision</p>
          <p>
            Our vision is to be a leading platform that bridges students,
            institutions, and recruiters, ensuring equal access to career
            opportunities. By empowering students with skills, confidence, and
            industry connections, we aim to shape a future-ready workforce and
            transform the pre-placement and recruitment landscape.
          </p>
        </div>

        {/* Second Circular Div */}
        <div className="flex items-center justify-center">
          <div className="bg-btn-yellow rounded-full w-40 h-40 flex items-center justify-center">
            <img
              src={About02}
              alt="Image inside circle"
              className="w-[7rem] h-[7rem] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stylish Cards */}
      <div className="bg-gradient-to-r bg-orange-light py-10">
        <h2 className="text-center text-2xl font-bold text-black mb-8">
          Our <span className="text-green-500">Core Values</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-2">
          {/* Card 1 */}
          <div className="bg-btn-yellow text-white rounded-tl-3xl rounded-br-3xl rounded-lg p-6 shadow-lg relative">
            <h3 className="text-xl font-bold mb-2">Empowering Opportunities</h3>
            <p>
              Bridging the gap between talented students and top recruiters
              through collaborative placement drives.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-btn-yellow text-white rounded-tl-3xl rounded-br-3xl rounded-lg p-6 shadow-lg relative">
            <h3 className="text-xl font-bold mb-2">
              Building Industry Connections
            </h3>
            <p>
              Partnering with leading organizations to provide real-world
              exposure and placement opportunities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-btn-yellow text-white rounded-tl-3xl rounded-br-3xl rounded-lg p-6 shadow-lg relative">
            <h3 className="text-xl font-bold mb-2">
              Holistic Career Development
            </h3>
            <p>
              Offering industry-relevant pre-placement courses to enhance skills
              and employability.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-btn-yellow text-white rounded-tl-3xl rounded-br-3xl rounded-lg p-6 shadow-lg relative">
            <h3 className="text-xl font-bold mb-2">Simplified Processes</h3>
            <p>
              Streamlining recruitment coordination for both students and
              recruiters through a centralized platform.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Industry />
      </div>
    </div>
  );
};
