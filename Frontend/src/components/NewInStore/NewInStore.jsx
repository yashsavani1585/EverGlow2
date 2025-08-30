// import React from "react";
// import ring1 from "../../assets/img6.png";   // update with actual image path
// import bracelet from "../../assets/img7.png";
// import ring2 from "../../assets/img8.png";

// const products = [
//   { id: 1, img: ring1, alt: "Diamond Ring" },
//   { id: 2, img: bracelet, alt: "Diamond Bracelet" },
//   { id: 3, img: ring2, alt: "Engagement Ring" },
// ];

// const NewInStore = () => {
//   return (
//     <section className="w-full bg-white py-10 px-4 md:px-12">
//       {/* Heading */}
//       <div className="text-center mb-8 md:mb-12">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
//           NEW IN STORE
//         </h2>
//       </div>

//       {/* Grid */}
//       <div className="max-w-7xl mx-auto grid grid-cols-3 gap-1 md:gap-9 items-center">
//         {/* Left small image */}
//         <div>
//           <img
//             src={products[0].img}
//             alt={products[0].alt}
//             className="sm:w-[122px] w-full h-[220px] md:w-full sm:h-[161px] md:h-[380px] object-cover "
//           />
//         </div>

//         {/* Middle big image */}
//         <div className="md:scale-110 md:translate-y-3">
//           <img
//             src={products[1].img}
//             alt={products[1].alt}
//             className="sm:w-[170px] w-full md:w-full h-[280px] sm:h-[213px] md:h-[500px] object-cover "
//           />
//         </div>

//         {/* Right small image */}
//         <div>
//           <img
//             src={products[2].img}
//             alt={products[2].alt}
//             className="sm:w-[122px] w-full h-[220px] md:w-full sm:h-[161px] md:h-[380px] object-cover "
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewInStore;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// // Example images (replace with real ones)
// import ring1 from "../../assets/img6.png";
// import bracelet from "../../assets/img7.png";
// import ring2 from "../../assets/img8.png";
// import ring3 from "../../assets/img6.png";
// import ring4 from "../../assets/img7.png";
// import ring5 from "../../assets/img8.png";

// const products = [
//   { id: 1, img: ring1, alt: "Diamond Ring" },
//   { id: 2, img: bracelet, alt: "Diamond Bracelet" },
//   { id: 3, img: ring2, alt: "Engagement Ring" },
//   { id: 4, img: ring3, alt: "Luxury Ring" },
//   { id: 5, img: ring4, alt: "Gold Bracelet" },
//   { id: 6, img: ring5, alt: "Classic Ring" },
// ];

// const NewInStore = () => {
//   return (
//   <section className="w-full bg-white py-12 px-4 md:px-12 overflow-hidden">
//   {/* Heading */}
//   <div className="text-center mb-10">
//     <h2 className="text-3xl md:text-4xl font-semibold text-yellow-700">
//       NEW IN STORE
//     </h2>
//   </div>

//   {/* Slider */}
//   <div className="max-w-7xl mx-auto overflow-hidden">
//     <Swiper
//       modules={[Autoplay]}
//       loop={true}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       speed={1200}
//       spaceBetween={24}
//       breakpoints={{
//         0: { slidesPerView: 1 },
//         640: { slidesPerView: 2 },
//         1024: { slidesPerView: 3 },
//         1280: { slidesPerView: 3 },
//       }}
//       className="w-full"
//     >
//       {products.map((item, i) => (
//         <SwiperSlide key={item.id}>
//           <div
//             className={`${
//               i % 2 === 0
//                 ? "h-[280px] sm:h-[250px] md:h-[340px] lg:h-[360px] mt-16" // ✅ fixed (mt-16)
//                 : "h-[380px] md:h-[460px] lg:h-[500px]"
//             }`}
//           >
//             <img
//               src={item.img}
//               alt={item.alt}
//               className="w-full h-full object-cover rounded-lg shadow-md"
//             />
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </div>
// </section>

//   );
// };

// export default NewInStore;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Example images (replace with real ones)
import ring1 from "../../assets/img6.png";
import bracelet from "../../assets/img7.png";
import ring2 from "../../assets/img8.png";
import ring3 from "../../assets/img6.png";
import ring4 from "../../assets/img7.png";
import ring5 from "../../assets/img8.png";

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
    <section className="w-full bg-white py-12 px-4 md:px-12 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-yellow-700">
          NEW IN STORE
        </h2>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          centeredSlides={true} // 👈 center active slide
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px] flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
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
