// import React from "react";
// import ringImg from "../../assets/ringImg.png";

// const HeroSection2 = () => {
//   return (
//     <section className="w-full h-[630px] bg-gradient-to-r from-[#4f1c51] via-[#732d75] to-[#a04da3] flex items-center justify-between px-16">
//       {/* Left Side - Image */}
//       <div className="flex-1 flex justify-center">
//         <img
//           src={ringImg}
//           alt="Engagement Ring"
//           className="h-[500px] object-contain"
//         />
//       </div>

//       {/* Right Side - Text */}
//       <div className="flex-1 text-white flex flex-col justify-center max-w-xl">
//         {/* Typography Heading */}
//         <h2 className="uppercase font-semibold text-[44px] leading-tight tracking-wide font-['Inclusive_Sans']">
//           Love & Engagement
//         </h2>

//         {/* Paragraph */}
//         <p className="mt-6 text-[17px] leading-relaxed tracking-wide font-light font-['Akatab']">
//           EVERGLOW engagement rings feature the world’s finest diamonds and
//           unparalleled craftsmanship—signatures of the House for almost two
//           centuries.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection2;

import React from "react";
import ringImg from "../../assets/ringImg.png";

const HeroSection2 = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#4f1c51] via-[#732d75] to-[#a04da3]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-20 gap-10">
        
        {/* Left Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={ringImg}
            alt="Engagement Ring"
            className="w-[260px] sm:w-[360px] md:w-[440px] lg:w-[500px] 
            object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 text-white flex flex-col justify-center text-center lg:text-left max-w-xl">
          {/* Heading */}
          <h2
            className="uppercase font-semibold 
            text-3xl sm:text-4xl md:text-5xl lg:text-[44px] 
            leading-snug tracking-wide font-['Inclusive_Sans']"
          >
            Love & Engagement
          </h2>

          {/* Paragraph */}
          <p
            className="mt-6 
            text-base sm:text-lg md:text-xl 
            leading-relaxed tracking-wide font-light font-['Akatab'] opacity-90"
          >
            EVERGLOW engagement rings feature the world’s finest diamonds and 
            unparalleled craftsmanship—signatures of the House for almost two centuries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
