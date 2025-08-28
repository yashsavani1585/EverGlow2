import React from "react";
import heroImg from "../../assets/HeroSection.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-black flex justify-center items-center">
      <img
        src={heroImg}
        alt="Hero"
        className="
          w-full h-auto
          max-h-[250px]   /* mobile small */
          sm:max-h-[350px]  /* small devices */
          md:max-h-[450px]  /* tablets */
          lg:max-h-[600px]  /* laptops */
          xl:max-h-[720px]  /* desktops */
          2xl:max-h-[800px] /* big screens */
          object-contain
        "
      />
    </section>
  );
};

export default HeroSection;
