import AboutUs from "../../assets/AboutUs.png";
import About01 from "../../assets/About01.png";
import About02 from "../../assets/About02.png";
import { Industry } from "../../AdminConnectComponents/Home/Industry";

export const AboutCampus = () => {
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
          Welcome to Website Name, your go-to platform for Pool Campus
          preparation. We specialize in helping students excel in Pool Campus
          Recruitment Drives by offering a range of pre-placement courses and
          resources to help you stand out in this competitive process.
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
            <h3 className="text-xl font-bold mb-2">Adaptability</h3>
            <p>
              We continuously adapt to changes in recruitment trends and
              educational technologies, ensuring our courses remain relevant and
              effective.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-btn-yellow text-white rounded-tl-3xl rounded-br-3xl rounded-lg p-6 shadow-lg relative">
            <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
            <p>
              P We foster an inclusive environment where every student,
              regardless of background, has access to the resources and
              opportunities needed for success.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-btn-yellow text-white rounded-tl-3xl rounded-br-3xl rounded-lg p-6 shadow-lg relative">
            <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
            <p>
              We are committed to the ongoing enhancement of our programs,
              always striving to offer better learning experiences and outcomes.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-btn-yellow text-white rounded-tl-3xl rounded-br-3xl rounded-lg p-6 shadow-lg relative">
            <h3 className="text-xl font-bold mb-2">Success-Driven</h3>
            <p>
              We focus on achieving tangible results for our students, guiding
              them toward successful placements and career growth.
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
