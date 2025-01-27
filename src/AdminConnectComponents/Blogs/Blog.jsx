import { Link } from "react-router-dom";
import Blog01 from "../../assets/Blog/Blog01.png";
import Blog02 from "../../assets/Blog/Blog02.png";
import Blog03 from "../../assets/Blog/Blog03.png";
import Blog04 from "../../assets/Blog/Blog04.png";
import Blog05 from "../../assets/Blog/Blog05.png";
import Blog06 from "../../assets/Blog/Blog06.png";

export const Blog = () => {
  return (
    <div className="px-5">
      {/* Title */}
      <p className="text-left font-lato text-2xl sm:text-2xl md:text-2xl font-semibold mt-5">
        <span className="text-btn-green">Blog</span>
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-6">
        {/* Card 01 */}
        <div className="border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Blog01}
              alt="Blog01"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              Quick guide to launching your tech career in AI
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                <Link to="/ai">
                  Read More <i className="bi bi-arrow-right font-bold"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Card 01 */}
        <div className="border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Blog02}
              alt="Blog01"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              Quick guide to launching your tech career in AI
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                Read More <i className="bi bi-arrow-right font-bold"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Card 01 */}
        <div className="border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Blog03}
              alt="Blog03"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              Quick guide to launching your tech career in AI
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                Read More <i className="bi bi-arrow-right font-bold"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Card 01 */}
        <div className="border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Blog04}
              alt="Blog04"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              Quick guide to launching your tech career in AI
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                Read More <i className="bi bi-arrow-right font-bold"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Card 01 */}
        <div className="border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Blog05}
              alt="Blog05"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              Quick guide to launching your tech career in AI
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                Read More <i className="bi bi-arrow-right font-bold"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Card 01 */}
        <div className="border-2 border-btn-green rounded-3xl">
          <div>
            <img
              src={Blog06}
              alt="Blog06"
              className="w-full h-auto rounded-t-3xl"
            />
          </div>
          <div className="p-5">
            <div className="font-semibold text-xl sm:text-2xl my-4 text-center">
              Quick guide to launching your tech career in AI
            </div>
            <div className="flex justify-center mt-5 pb-3">
              <button className="text-btn-yellow font-semibold border-2 border-btn-yellow p-2 rounded-md">
                Read More <i className="bi bi-arrow-right font-bold"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Explore All Button */}
      <div className="flex justify-center pb-5">
        <button className="font-lato p-2 px-6 font-semibold border-2 border-black rounded-lg">
          Explore All <i className="bi bi-arrow-right font-bold"></i>
        </button>
      </div>
    </div>
  );
};
