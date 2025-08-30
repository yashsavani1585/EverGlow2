// import React from "react";
// import heroImg from "../../assets/homeHero.png";

// const HeroSection = () => {
//   return (
//     <section
//       className="
//         relative w-full 
//         h-[220px] sm:h-[320px] md:h-[420px] lg:h-[550px] xl:h-[700px] 
//         bg-cover bg-left
//       "
//       style={{ backgroundImage: `url(${heroImg})` }}
//     >
//       {/* Overlay for readability */}
//       <div className="absolute inset-0 bg-white/40"></div>

//       {/* Text Content - Right Side */}
//       <div className="relative z-10 flex justify-end items-center h-full px-4 sm:px-8 md:px-12 lg:px-20">
//         <div className="max-w-md sm:max-w-lg md:max-w-xl text-right">
//           {/* Heading */}
//           <h2
//             className="
//               text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
//               font-semibold text-black mb-2 sm:mb-4 text-nowrap
//             "
//           >
//             LOVE & ENGAGEMENT
//           </h2>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Hero Slider Images
import slide1 from "../../assets/homeHero.png";
import slide2 from "../../assets/HeroSection2.png";
import slide3 from "../../assets/HeroSection3.png";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Swiper Hero Slider */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="w-full h-[140px] sm:h-[250px] md:h-[250px] lg:h-[550px] xl:h-[550px] bg-cover"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide1})` }}
          >
            <div className="absolute inset-0 bg-white/40"></div>

          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide2})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>

          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide3})` }}
          >
            <div className="absolute inset-0 bg-black/20"></div>

          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
