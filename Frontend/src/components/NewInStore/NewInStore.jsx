// import React from "react";
// import ring1 from "../../assets/DiamondRing.png";   // update with actual image path
// import bracelet from "../../assets/DiamondBracelet.png";
// import ring2 from "../../assets/EngagementRing.png";

// const products = [
//   { id: 1, img: ring1, alt: "Diamond Ring" },
//   { id: 2, img: bracelet, alt: "Diamond Bracelet" },
//   { id: 3, img: ring2, alt: "Engagement Ring" },
// ];

// const NewInStore = () => {
//   return (
//     <section className="w-full bg-white py-12 px-4 md:px-12">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-semibold text-[#4f1c51]">
//           NEW IN STORE
//         </h2>
//       </div>

//       {/* Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
//         {/* Left small image */}
//         <div>
//           <img
//             src={products[0].img}
//             alt={products[0].alt}
//             className="w-full h-[380px] object-cover rounded-lg"
//           />
//         </div>

//         {/* Middle big image */}
//         <div className="md:scale-110 md:translate-y-2">
//           <img
//             src={products[1].img}
//             alt={products[1].alt}
//             className="w-full h-[500px] object-cover rounded-lg"
//           />
//         </div>

//         {/* Right small image */}
//         <div>
//           <img
//             src={products[2].img}
//             alt={products[2].alt}
//             className="w-full h-[380px] object-cover rounded-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewInStore;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Example images (replace with real ones)
import ring1 from "../../assets/DiamondRing.png";
import bracelet from "../../assets/DiamondBracelet.png";
import ring2 from "../../assets/EngagementRing.png";
import ring3 from "../../assets/DiamondRing.png";
import ring4 from "../../assets/DiamondBracelet.png";
import ring5 from "../../assets/EngagementRing.png";

const products = [
  { id: 1, img: ring1, alt: "Diamond Ring" },
  { id: 2, img: bracelet, alt: "Diamond Bracelet" },
  { id: 3, img: ring2, alt: "Engagement Ring" },
  { id: 4, img: ring3, alt: "Luxury Ring" },
  { id: 5, img: ring4, alt: "Gold Bracelet" },
  { id: 6, img: ring5, alt: "Classic Ring" },
];

const NewInStore = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4f1c51]">
          NEW IN STORE
        </h2>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1200}
          // slidesPerView={3} // ✅ ek time me sirf 3 image
          spaceBetween={24}
          breakpoints={{
            // ✅ mobile (0px and up)
            0: {
              slidesPerView: 1,
            },
            // ✅ tablets (640px and up)
            640: {
              slidesPerView: 2,
            },
            // ✅ laptops (1024px and up)
            1024: {
              slidesPerView: 3,
            },
            // ✅ big screens (1280px and up)
            1280: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {products.map((item, i) => (
            <SwiperSlide key={item.id}>
              <div
                className={`${i % 2 === 0
                    ? "h-[280px] sm:h-[250px] md:h-[340px] lg:h-[360px]  mt-15" // choti
                    : "h-[380px] md:h-[460px] lg:h-[500px]" // badi
                  }`}
              >
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewInStore;
