// EverglowPromise.jsx
// import React from "react";

// // Import images
// import certifiedImg from "../../assets/Certified.png";
// import exchangeImg from "../../assets/LifeTime-Exchange.png";
// import moneybackImg from "../../assets/30day-moneyBack.png";
// import transparencyImg from "../../assets/Transperncy.png";
// import shippingImg from "../../assets/FreeShiping.png";
// import designsImg from "../../assets/world-Design.png";
// import ethicsImg from "../../assets/No-Compromise.png";
// import videoImg from "../../assets/Personalized-video.png";

// const promises = [
//   { img: certifiedImg, text: "100% Certified Jewellery" },
//   { img: exchangeImg, text: "Lifetime Exchange & Buyback" },
//   { img: moneybackImg, text: "30 Days Money Back" },
//   { img: transparencyImg, text: "100% Transparency" },
//   { img: shippingImg, text: "Free Shipping" },
//   { img: designsImg, text: "A world of designs" },
//   { img: ethicsImg, text: "No Compromise On Ethics" },
//   { img: videoImg, text: "Personalized Video Consultations" },
// ];

// const EverglowPromise = () => {
//   return (
//     <section className="w-full bg-white py-16 px-6 md:px-20">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-12">
        
//         {/* Left Heading */}
//         <div className="w-full md:w-1/3 text-center md:text-left relative">
//           <h3
//             className="text-4xl md:text-5xl font-serif text-[#4f1c51]"
//             style={{ fontFamily: "'Garamond', serif" }}
//           >
//             Everglow
//           </h3>
//           <h1
//             className="text-6xl md:text-7xl font-serif font-bold text-[#4f1c51] leading-tight"
//             style={{ fontFamily: "'Garamond', serif" }}
//           >
//             Promise
//           </h1>

//           {/* Horizontal Line aligned to middle of "Promise" */}
//           <div className="hidden md:block absolute top-[55%] right-0 w-28 border-t-2 border-[#4f1c51]"></div>
//         </div>

//         {/* Right Grid Box */}
//         <div className="w-full md:w-2/3 border-2 border-[#4f1c51] rounded-md p-10">
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center">
//             {promises.map((item, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#4f1c51]">
//                   <img
//                     src={item.img}
//                     alt={item.text}
//                     className="w-10 h-10 object-contain"
//                   />
//                 </div>
//                 <p className="mt-4 text-sm md:text-base font-medium text-[#4f1c51]">
//                   {item.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EverglowPromise;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import images
import certifiedImg from "../../assets/Certified.png";
import exchangeImg from "../../assets/LifeTime-Exchange.png";
import moneybackImg from "../../assets/30day-moneyBack.png";
import transparencyImg from "../../assets/Transperncy.png";
import shippingImg from "../../assets/FreeShiping.png";
import designsImg from "../../assets/world-Design.png";
import ethicsImg from "../../assets/No-Compromise.png";
import videoImg from "../../assets/Personalized-video.png";

const promises = [
  { img: certifiedImg, text: "100% Certified Jewellery" },
  { img: exchangeImg, text: "Lifetime Exchange & Buyback" },
  { img: moneybackImg, text: "30 Days Money Back" },
  { img: transparencyImg, text: "100% Transparency" },
  { img: shippingImg, text: "Free Shipping" },
  { img: designsImg, text: "A world of designs" },
  { img: ethicsImg, text: "No Compromise On Ethics" },
  { img: videoImg, text: "Personalized Video Consultations" },
];

const EverglowPromise = () => {
  // Intersection Observer
  const { ref, inView } = useInView({
    triggerOnce: false, // Ek hi baar animate hoga
    threshold: 0.2, // 20% visible hone par trigger
  });

  return (
    <section
      ref={ref}
      className="w-full bg-white py-16 px-6 md:px-20 min-h-screen flex items-center"
    >
      <motion.div
        initial={{ x: "100vw", opacity: 0 }} // right side se hidden
        animate={inView ? { x: 0, opacity: 1 } : {}} // jab viewport me aaye tab slide kare
        transition={{ type: "spring", stiffness: 70, damping: 20, duration: 1 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-12"
      >
        {/* Left Heading */}
        <div className="w-full md:w-1/3 text-center md:text-left relative">
          <h3
            className="text-4xl md:text-5xl font-serif text-[#4f1c51]"
            style={{ fontFamily: "'Garamond', serif" }}
          >
            Everglow
          </h3>
          <h1
            className="text-6xl md:text-7xl font-serif font-bold text-[#4f1c51] leading-tight"
            style={{ fontFamily: "'Garamond', serif" }}
          >
            Promise
          </h1>

          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-[55%] right-0 w-28 border-t-2 border-[#4f1c51]"></div>
        </div>

        {/* Right Grid Box */}
        <div className="w-full md:w-2/3 border-2 border-[#4f1c51] rounded-md p-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center">
            {promises.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#4f1c51]">
                  <img
                    src={item.img}
                    alt={item.text}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <p className="mt-4 text-sm md:text-base font-medium text-[#4f1c51]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EverglowPromise;
