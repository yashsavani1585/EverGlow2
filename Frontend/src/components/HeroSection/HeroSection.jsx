import React from "react";
import heroImg from "../../assets/homeHero.png";

const HeroSection = () => {
  return (
    <section
      className="
        relative w-full 
        h-[220px] sm:h-[320px] md:h-[420px] lg:h-[550px] xl:h-[700px] 
        bg-cover bg-left
      "
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Text Content - Right Side */}
      <div className="relative z-10 flex justify-end items-center h-full px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-md sm:max-w-lg md:max-w-xl text-right">
          {/* Heading */}
          <h2
            className="
              text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
              font-semibold text-black mb-2 sm:mb-4 text-nowrap
            "
          >
            LOVE & ENGAGEMENT
          </h2>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
