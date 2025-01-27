import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Alumini01 from "../../assets/Alumini/Alumini01.png";
import Alumini02 from "../../assets/Alumini/Alumini02.png";
import Alumini03 from "../../assets/Alumini/Alumini03.png";
import Alumini04 from "../../assets/Alumini/Alumini04.png";

export const AlumniWork = () => {
  return (
    <div className="py-20 px-4 sm:px-8 lg:px-14 bg-orange-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black text-center mb-8 sm:mb-12 font-semibold">
          Learn From Top Ranked{" "}
          <span className="text-btn-green">Institutes And Universities</span>
        </h2>

        <div className="relative group">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            modules={[Pagination, Navigation, Autoplay, EffectFade]}
            className="px-4 py-8"
          >
            {[Alumini01, Alumini02, Alumini03, Alumini04].map((image, index) => (
              <SwiperSlide key={index}>
                <div className="transform transition-transform duration-300 hover:scale-105">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={image}
                      alt={`Alumini ${index + 1}`}
                      className="w-full h-44 sm:h-44 lg:h-56 object-fill border-2 border-btn-green"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 opacity-0 hover:opacity-100" />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !hidden sm:!flex !w-10 !h-10 !bg-btn-green !rounded-full !text-white after:!text-lg group-hover:!opacity-100 !opacity-0 transition-opacity duration-300 !-left-5">
            </div>
            <div className="swiper-button-next !hidden sm:!flex !w-10 !h-10 !bg-btn-green !rounded-full !text-white after:!text-lg group-hover:!opacity-100 !opacity-0 transition-opacity duration-300 !-right-5">
            </div>
          </Swiper>

          {/* Custom Pagination Styles */}
          <style jsx global>{`
            .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background: #ccc;
              opacity: 0.6;
              transition: all 0.3s;
            }
            .swiper-pagination-bullet-active {
              width: 24px;
              border-radius: 5px;
              background: #4CAF50;
              opacity: 1;
            }
            .swiper-button-prev:after,
            .swiper-button-next:after {
              font-size: 16px;
              font-weight: bold;
            }
            .swiper-container {
              padding: 20px 0;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};
