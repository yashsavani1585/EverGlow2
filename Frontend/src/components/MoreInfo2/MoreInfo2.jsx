// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/thumbs";
// import { Thumbs, Autoplay } from "swiper/modules";

// import img1 from "../../assets/productImg.png";
// import img2 from "../../assets/EverglowPost1.png";
// import img3 from "../../assets/EverglowPost2.png";
// import img4 from "../../assets/EverglowPost3.png";
// import img5 from "../../assets/EverglowPost4.png";

// const MoreInfo2 = () => {
//   const images = [img1, img2, img3, img4, img5];
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
//       {/* ---------------- LEFT SIDE (Images + Swiper) ---------------- */}
//       <div className="flex flex-col md:flex-row gap-4 w-full">
//         {/* Thumbnails */}
//         <Swiper
//           onSwiper={setThumbsSwiper}
//           direction="vertical"
//           spaceBetween={10}
//           slidesPerView={4}
//           watchSlidesProgress
//           loop={true}
//           autoplay={{ delay: 2500, disableOnInteraction: false }}
//           breakpoints={{
//             0: { direction: "horizontal", slidesPerView: 4 },
//             640: { direction: "horizontal", slidesPerView: 5 },
//             768: { direction: "vertical", slidesPerView: 4 },
//           }}
//           modules={[Thumbs, Autoplay]}
//           className="w-full md:w-20 md:h-[500px]"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={img}
//                 alt={`thumb-${index}`}
//                 className="w-full h-20 sm:h-24 object-cover rounded-md cursor-pointer border hover:border-purple-600 transition"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Main Image */}
//         <Swiper
//           spaceBetween={10}
//           thumbs={{ swiper: thumbsSwiper }}
//           loop={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           modules={[Thumbs, Autoplay]}
//           className="flex-1 rounded-xl w-full"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={img}
//                 alt={`product-${index}`}
//                 className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-xl"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* ---------------- RIGHT SIDE (Details) ---------------- */}
//       <div className="w-full flex flex-col space-y-6">
//         <div>
//           <h2 className="text-xl sm:text-2xl font-bold leading-snug">
//             Celestial Grace: Channel-set Silver Diamond Earrings
//           </h2>
//           <div className="flex flex-wrap items-center gap-3 mt-3">
//             <span className="text-lg sm:text-2xl font-bold">₹2299</span>
//             <span className="text-gray-500 line-through text-sm sm:text-base">₹2599</span>
//             <span className="bg-gray-100 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border">
//               Sale 10%
//             </span>
//           </div>
//           <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
//             Earrings are jewelry that can be worn on one's ears. Earrings are commonly
//             worn in a piercing in the earlobe or another external part of the ear,
//             or by some other means, such as stickers or clip-ons.
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col gap-4">
//           <div className="flex flex-col sm:flex-row gap-3">
//             <button className="flex-1 bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-950 transition">
//               Buy Now
//             </button>
//             <button className="flex-1 bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-950 transition">
//               Add to Cart
//             </button>
//           </div>
//           <button className="w-full bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-950 transition">
//             Order On Whatsapp
//           </button>
//         </div>

//         {/* Offers Section */}
//         <div className="bg-[#4F1c51] text-white rounded-lg p-5 space-y-4">
//           <h3 className="font-semibold text-lg">Offers For You</h3>
//           {["FLAT 100 off", "Everglow Jewels"].map((offer, idx) => (
//             <div key={idx} className="bg-white text-black rounded-md p-4 shadow-sm">
//               <p className="font-bold">{offer}</p>
//               <p className="text-sm text-gray-600 mt-1">
//                 Comes with authenticity & guarantee certificate of Everglow Jewels with lifetime exchange guarantee.
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Shipping & Return Policy */}
//         <div className="space-y-3">
//           {["Shipping", "Return Policy"].map((policy, idx) => (
//             <details key={idx} className="border rounded-md px-4 py-3 cursor-pointer">
//               <summary className="font-semibold">{policy}</summary>
//               <p className="text-sm text-gray-600 mt-2">
//                 {policy === "Shipping"
//                   ? "Free shipping on all orders above ₹1000. Delivery in 4-6 business days."
//                   : "Easy 7-day return & exchange policy with 100% refund guarantee."}
//               </p>
//             </details>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoreInfo2;


// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/thumbs";
// import { Thumbs, Autoplay } from "swiper/modules";

// import img1 from "../../assets/productImg.png";
// import img2 from "../../assets/EverglowPost1.png";
// import img3 from "../../assets/EverglowPost2.png";
// import img4 from "../../assets/EverglowPost3.png";
// import img5 from "../../assets/EverglowPost4.png";
// import product1 from "../../assets/EverglowPost1.png";
// import product2 from "../../assets/EverglowPost2.png";
// import product3 from "../../assets/EverglowPost3.png";

// const MoreInfo2 = () => {
//   const images = [img1, img2, img3, img4, img5];
//   const products = [
//     {
//       id: 1,
//       title: "Brilliant Round cut Everglow jewels",
//       oldPrice: "₹3299",
//       price: "₹2699",
//       image: product1,
//     },
//     {
//       id: 2,
//       title: "Elegant Gold Necklace",
//       oldPrice: "₹4999",
//       price: "₹4599",
//       image: product2,
//     },
//     {
//       id: 3,
//       title: "Classic Diamond Ring",
//       oldPrice: "₹5999",
//       price: "₹5599",
//       image: product3,
//     },
//   ];
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1200); // 1.2 sec loading
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="w-12 h-12 border-4 border-[#4F1c51] border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* ---------------- LEFT SIDE (Images + Thumbnails) ---------------- */}
//         <div className="flex flex-col w-full">
//           {/* Main Image Swiper */}
//           <Swiper
//             spaceBetween={10}
//             thumbs={{ swiper: thumbsSwiper }}
//             loop={true}
//             autoplay={{ delay: 3000, disableOnInteraction: false }}
//             modules={[Thumbs, Autoplay]}
//             className="w-full rounded-xl"
//           >
//             {images.map((img, index) => (
//               <SwiperSlide key={index}>
//                 <img
//                   src={img}
//                   alt={`product-${index}`}
//                   className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-xl"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Thumbnails Swiper (always horizontal below main image) */}
//           <Swiper
//             onSwiper={setThumbsSwiper}
//             spaceBetween={10}
//             slidesPerView={3}
//             watchSlidesProgress
//             loop={true}
//             autoplay={{ delay: 2500, disableOnInteraction: false }}
//             breakpoints={{
//               0: { slidesPerView: 3 },   // mobile
//               480: { slidesPerView: 4 }, // larger mobile
//               768: { slidesPerView: 5 }, // tablet+
//               1024: { slidesPerView: 6 } // desktop big
//             }}
//             modules={[Thumbs, Autoplay]}
//             className="mt-4 w-full"
//           >
//             {images.map((img, index) => (
//               <SwiperSlide key={index}>
//                 <img
//                   src={img}
//                   alt={`thumb-${index}`}
//                   className="w-full h-20 sm:h-24 object-cover rounded-md cursor-pointer border hover:border-purple-600 transition"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* ---------------- RIGHT SIDE (Details) ---------------- */}
//         <div className="w-full flex flex-col space-y-6">
//           <div>
//             <h2 className="text-xl sm:text-2xl font-bold leading-snug">
//               Celestial Grace: Channel-set Silver Diamond Earrings
//             </h2>
//             <div className="flex flex-wrap items-center gap-3 mt-3">
//               <span className="text-lg sm:text-2xl font-bold">₹2299</span>
//               <span className="text-gray-500 line-through text-sm sm:text-base">
//                 ₹2599
//               </span>
//               <span className="bg-gray-100 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border">
//                 Sale 10%
//               </span>
//             </div>
//             <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
//               Earrings are jewelry that can be worn on one's ears. Earrings are
//               commonly worn in a piercing in the earlobe or another external part
//               of the ear, or by some other means, such as stickers or clip-ons.
//             </p>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-col gap-4">
//             <div className="flex flex-col sm:flex-row gap-3 items-center">
//               <button className="flex-1 bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-950 transition">
//                 Buy Now
//               </button>
//               <button className="flex-1 bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-950 transition">
//                 Add to Cart
//               </button>
//               <button className="w-8 h-8 rounded-full bg-[#6B6A3D] border border-gray-300 hover:scale-110 transition"
//                 title="Rose Gold">
//               </button>

//               {/* White Gold color circle */}
//               <button className="w-8 h-8 rounded-full bg-[#4F1c51] border border-gray-300 hover:scale-110 transition"
//                 title="White Gold">
//               </button>
//             </div>
//             <button className="w-full bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-950 transition">
//               Order On Whatsapp
//             </button>
//           </div>

//           {/* Offers Section */}
//           <div className="bg-[#4F1c51] text-white rounded-lg p-5 space-y-4">
//             <h3 className="font-semibold text-lg">Offers For You</h3>
//             {["FLAT 100 off", "Everglow Jewels"].map((offer, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white text-black rounded-md p-4 shadow-sm"
//               >
//                 <p className="font-bold">{offer}</p>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Comes with authenticity & guarantee certificate of Everglow
//                   Jewels with lifetime exchange guarantee.
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Shipping & Return Policy */}
//           <div className="space-y-3">
//             {["Shipping", "Return Policy"].map((policy, idx) => (
//               <details
//                 key={idx}
//                 className="border rounded-md px-4 py-3 cursor-pointer"
//               >
//                 <summary className="font-semibold">{policy}</summary>
//                 <p className="text-sm text-gray-600 mt-2">
//                   {policy === "Shipping"
//                     ? "Free shipping on all orders above ₹1000. Delivery in 4-6 business days."
//                     : "Easy 7-day return & exchange policy with 100% refund guarantee."}
//                 </p>
//               </details>
//             ))}
//           </div>
//         </div>

//       </div>
//       <div className="min-h-screen bg-write p-6">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Details</h2>
//         <hr className="mb-6 border-gray-300" />
//         {/* Main Container */}
//         <div className="grid grid-cols-3 gap-6 items-start">

//           {/* Left Side - Boxes */}
//           <div className="col-span-2 grid grid-cols-2 gap-4">
//             {/* First Row */}
//             <div className="bg-white rounded-lg shadow p-4">
//               <h3 className="text-lg font-semibold text-purple-900 mb-2">Weight</h3>
//               <p className="text-sm text-gray-700">Gross (Product) - 1.291</p>
//               <p className="text-sm text-gray-700">Net (gold) - 1.005</p>
//             </div>

//             <div className="bg-white rounded-lg shadow p-4">
//               <h3 className="text-lg font-semibold text-purple-900 mb-2">Purity</h3>
//               <p className="text-sm text-gray-700">14k Yellow Gold</p>
//             </div>

//             {/* Second Row (full width on left side) */}
//             <div className="bg-white rounded-lg shadow p-4 col-span-2">
//               <h3 className="text-lg font-semibold text-purple-900 mb-2">
//                 Diamond and Gemstones
//               </h3>
//               <p className="text-sm text-gray-700 mb-2">
//                 Weight 1.43 &nbsp;&nbsp; Diamonds - Lab Grown Diamonds
//               </p>

//               <table className="w-full border-collapse text-sm text-gray-700">
//                 <thead>
//                   <tr className="border-b border-gray-300">
//                     <th className="py-2 text-left">Color</th>
//                     <th className="py-2 text-left">Clarity</th>
//                     <th className="py-2 text-left">Shape</th>
//                     <th className="py-2 text-left">No. of Diamonds</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b border-gray-300">
//                     <td className="py-2">E-F</td>
//                     <td className="py-2">VVS-VS</td>
//                     <td className="py-2">Round</td>
//                     <td className="py-2">3</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Right Side - Full Height Box */}
//           <div className="h-full self-stretch">
//             <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col justify-between">
//               <div>
//                 <h3 className="text-lg font-semibold text-purple-900 mb-3">
//                   Price Breakup
//                 </h3>

//                 <div className="flex justify-between text-sm text-gray-700 mb-1">
//                   <span>Gold</span>
//                   <span>Rs.5517.00</span>
//                 </div>

//                 <div className="flex justify-between text-sm text-gray-700 mb-1">
//                   <span className="line-through">Rs.40200.00</span>
//                   <span>Rs.32160.00</span>
//                 </div>

//                 <div className="flex justify-between text-sm text-gray-700 mb-1">
//                   <span className="line-through">Rs.2412.00</span>
//                   <span>Rs.1206.00</span>
//                 </div>

//                 <div className="flex justify-between text-sm text-gray-700 mb-1">
//                   <span>GST (3%)</span>
//                   <span>Rs.1166</span>
//                 </div>
//               </div>

//               <div>
//                 <hr className="my-2 border-gray-300" />
//                 <div className="flex justify-between font-semibold text-gray-900">
//                   <span>Total</span>
//                   <span>Rs.40049/-</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//       <div className="mt-10">
//         <h3 className="text-xl font-semibold mb-6 text-center">Related Products</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>


//     </>
//   );


// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/thumbs";
// import { Thumbs, Autoplay } from "swiper/modules";

// import img1 from "../../assets/productImg.png";
// import rose1 from "../../assets/EverglowPost1.png";
// import rose2 from "../../assets/EverglowPost2.png";
// import white1 from "../../assets/EverglowPost3.png";
// import white2 from "../../assets/EverglowPost4.png";
// import ProductCard from "../ProductCard/ProductCard";

// const MoreInfo2 = () => {
//   // Define product variants (Rose Gold, White Gold)
//   const productVariants = {
//     rose: {
//       title: "Celestial Grace Earrings - Rose Gold",
//       price: "₹2299",
//       oldPrice: "₹2599",
//       desc: "Rose Gold plated diamond earrings, elegant and timeless design.",
//       images: [rose1, rose2, img1], // Rose variant images
//     },
//     white: {
//       title: "Celestial Grace Earrings - White Gold",
//       price: "₹2399",
//       oldPrice: "₹2699",
//       desc: "White Gold finish with lab-grown diamonds, perfect for all occasions.",
//       images: [white1, white2, img1], // White variant images
//     },
//   };

//   const products = [
//     { id: 1, title: "Brilliant Round cut Everglow jewels", oldPrice: "₹3299", price: "₹2699", image: rose1, },
//     { id: 2, title: "Elegant Gold Necklace", oldPrice: "₹4999", price: "₹4599", image: rose2, },
//     { id: 3, title: "Classic Diamond Ring", oldPrice: "₹5999", price: "₹5599", image: white1, },
//   ]

//   const [variant, setVariant] = useState("rose"); // Default variant
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//     const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-white">
//         <div className="w-12 h-12 border-4 border-[#4F1c51] border-t-transparent rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   const currentProduct = productVariants[variant];

//   return (
//     <>
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
//       {/* LEFT SIDE - IMAGES */}
//       <div className="flex flex-col w-full">
//         {/* Main Swiper */}
//         <Swiper
//           spaceBetween={10}
//           thumbs={{ swiper: thumbsSwiper }}
//           loop={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           modules={[Thumbs, Autoplay]}
//           className="w-full rounded-xl"
//         >
//           {currentProduct.images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={img}
//                 alt={`product-${index}`}
//                 className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-xl"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Thumbnail Swiper */}
//         <Swiper
//           onSwiper={setThumbsSwiper}
//           spaceBetween={10}
//           watchSlidesProgress
//           loop={true}
//           autoplay={{ delay: 2500, disableOnInteraction: false }}
//           breakpoints={{
//             0: { slidesPerView: 3 },
//             480: { slidesPerView: 4 },
//             768: { slidesPerView: 5 },
//             1024: { slidesPerView: 6 },
//           }}
//           modules={[Thumbs, Autoplay]}
//           className="mt-4 w-full"
//         >
//           {currentProduct.images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={img}
//                 alt={`thumb-${index}`}
//                 className="w-full h-20 sm:h-24 object-cover rounded-md cursor-pointer border hover:border-purple-600 transition"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* RIGHT SIDE - DETAILS */}
//       <div className="w-full flex flex-col space-y-6">
//         {/* Product Info */}
//         <div>
//           <h2 className="text-xl sm:text-2xl font-bold leading-snug">
//             {currentProduct.title}
//           </h2>
//           <div className="flex flex-wrap items-center gap-3 mt-3">
//             <span className="text-lg sm:text-2xl font-bold">{currentProduct.price}</span>
//             <span className="text-gray-500 line-through text-sm sm:text-base">
//               {currentProduct.oldPrice}
//             </span>
//             <span className="bg-gray-100 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border">
//               Sale 10%
//             </span>
//           </div>
//           <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
//             {currentProduct.desc}
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col gap-4 w-full">
//           <div className="flex flex-col sm:flex-row gap-3 items-center w-full">
//             {/* Buy Now */}
//             <button className="flex-1 bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition">
//               Buy Now
//             </button>

//             {/* Add to Cart */}
//             <button className="flex-1 bg-[#6B6A3D] text-white py-3 rounded-md font-semibold hover:bg-green-800 transition">
//               Add to Cart
//             </button>

//             {/* Color Selectors */}
//             <div className="flex gap-2">
//               <button
//                 onClick={() => setVariant("rose")}
//                 className={`w-8 h-8 rounded-full bg-[#6B6A3D] border ${
//                   variant === "rose" ? "ring-2 ring-purple-700" : "border-gray-300"
//                 } hover:scale-110 transition`}
//                 title="Rose Gold"
//               ></button>
//               <button
//                 onClick={() => setVariant("white")}
//                 className={`w-8 h-8 rounded-full bg-[#4F1c51] border ${
//                   variant === "white" ? "ring-2 ring-purple-700" : "border-gray-300"
//                 } hover:scale-110 transition`}
//                 title="White Gold"
//               ></button>
//             </div>
//           </div>

//           {/* WhatsApp Order */}
//           <button className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition">
//             Order on WhatsApp
//           </button>
//         </div>
//             <div className="bg-[#4F1c51] text-white rounded-lg p-5 space-y-4">
//             <h3 className="font-semibold text-lg">Offers For You</h3>
//             {["FLAT 100 off", "Everglow Jewels"].map((offer, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white text-black rounded-md p-4 shadow-sm"
//               >
//                 <p className="font-bold">{offer}</p>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Comes with authenticity & guarantee certificate of Everglow
//                   Jewels with lifetime exchange guarantee.
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Shipping & Return */}
//           <div className="space-y-3">
//             {["Shipping", "Return Policy"].map((policy, idx) => (
//               <details
//                 key={idx}
//                 className="border rounded-md px-4 py-3 cursor-pointer"
//               >
//                 <summary className="font-semibold">{policy}</summary>
//                 <p className="text-sm text-gray-600 mt-2">
//                   {policy === "Shipping"
//                     ? "Free shipping on all orders above ₹1000. Delivery in 4-6 business days."
//                     : "Easy 7-day return & exchange policy with 100% refund guarantee."}
//                 </p>
//               </details>
//             ))}
//           </div>

//       </div>
//     </div>
//        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Details</h2>
//         <hr className="mb-6 border-gray-300" />

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

//           {/* Left side */}
//           <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="bg-white rounded-lg shadow p-4">
//               <h3 className="text-lg font-semibold text-purple-900 mb-2">Weight</h3>
//               <p className="text-sm text-gray-700">Gross (Product) - 1.291</p>
//               <p className="text-sm text-gray-700">Net (gold) - 1.005</p>
//             </div>

//             <div className="bg-white rounded-lg shadow p-4">
//               <h3 className="text-lg font-semibold text-purple-900 mb-2">Purity</h3>
//               <p className="text-sm text-gray-700">14k Yellow Gold</p>
//             </div>

//             <div className="bg-white rounded-lg shadow p-4 sm:col-span-2">
//               <h3 className="text-lg font-semibold text-purple-900 mb-2">
//                 Diamond and Gemstones
//               </h3>
//               <p className="text-sm text-gray-700 mb-2">
//                 Weight 1.43 &nbsp;&nbsp; Diamonds - Lab Grown Diamonds
//               </p>
//               <table className="w-full border-collapse text-sm text-gray-700">
//                 <thead>
//                   <tr className="border-b border-gray-300">
//                     <th className="py-2 text-left">Color</th>
//                     <th className="py-2 text-left">Clarity</th>
//                     <th className="py-2 text-left">Shape</th>
//                     <th className="py-2 text-left">No. of Diamonds</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr className="border-b border-gray-300">
//                     <td className="py-2">E-F</td>
//                     <td className="py-2">VVS-VS</td>
//                     <td className="py-2">Round</td>
//                     <td className="py-2">3</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Right side */}
//           <div className="h-full self-stretch">
//             <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col justify-between">
//               <div>
//                 <h3 className="text-lg font-semibold text-purple-900 mb-3">
//                   Price Breakup
//                 </h3>
//                 <div className="flex justify-between text-sm text-gray-700 mb-1">
//                   <span>Gold</span>
//                   <span>Rs.5517.00</span>
//                 </div>
//                 <div className="flex justify-between text-sm text-gray-700 mb-1">
//                   <span className="line-through">Rs.40200.00</span>
//                   <span>Rs.32160.00</span>
//                 </div>
//                 <div className="flex justify-between text-sm text-gray-700 mb-1">
//                   <span className="line-through">Rs.2412.00</span>
//                   <span>Rs.1206.00</span>
//                 </div>
//                 <div className="flex justify-between text-sm text-gray-700 mb-1">
//                   <span>GST (3%)</span>
//                   <span>Rs.1166</span>
//                 </div>
//               </div>
//               <div>
//                 <hr className="my-2 border-gray-300" />
//                 <div className="flex justify-between font-semibold text-gray-900">
//                   <span>Total</span>
//                   <span>Rs.40049/-</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ---------------- RELATED PRODUCTS ---------------- */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <h3 className="text-xl font-semibold mb-6 text-center">Related Products</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MoreInfo2;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import { Thumbs, Autoplay } from "swiper/modules";

import img1 from "../../assets/productImg.png";
import rose1 from "../../assets/EverglowPost1.png";
import rose2 from "../../assets/EverglowPost2.png";
import white1 from "../../assets/EverglowPost3.png";
import white2 from "../../assets/EverglowPost4.png";
import ProductCard from "../ProductCard/ProductCard";

const MoreInfo2 = () => {
  // Product Variants
  const productVariants = {
    rose: {
      title: "Celestial Grace Earrings - Rose Gold",
      price: "₹2299",
      oldPrice: "₹2599",
      desc: "Rose Gold plated diamond earrings, elegant and timeless design.",
      images: [rose1, rose2, img1],
      color: "bg-[#b76e79]", // Rose Gold
    },
    white: {
      title: "Celestial Grace Earrings - White Gold",
      price: "₹2399",
      oldPrice: "₹2699",
      desc: "White Gold finish with lab-grown diamonds, perfect for all occasions.",
      images: [white1, white2, img1],
      color: "bg-gray-300", // White Gold
    },
    yellow: {
      title: "Celestial Grace Earrings - Yellow Gold",
      price: "₹2499",
      oldPrice: "₹2799",
      desc: "Yellow Gold finish with diamonds, timeless elegance.",
      images: [img1, rose1],
      color: "bg-yellow-400", // Yellow Gold
    },
  };

  const products = [
    { id: 1, title: "Brilliant Round cut Everglow jewels", oldPrice: "₹3299", price: "₹2699", image: rose1 },
    { id: 2, title: "Elegant Gold Necklace", oldPrice: "₹4999", price: "₹4599", image: rose2 },
    { id: 3, title: "Classic Diamond Ring", oldPrice: "₹5999", price: "₹5599", image: white1 },
  ];

  const [variant, setVariant] = useState("rose");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-[#4F1c51] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const currentProduct = productVariants[variant];

  return (
    <>
      {/* MAIN PRODUCT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE IMAGES */}
        <div className="flex flex-col w-full">
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Thumbs, Autoplay]}
            className="w-full rounded-xl"
          >
            {currentProduct.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`product-${index}`}
                  className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            watchSlidesProgress
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 3 },
              480: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
            modules={[Thumbs, Autoplay]}
            className="mt-4 w-full"
          >
            {currentProduct.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`thumb-${index}`}
                  className="w-full h-20 sm:h-24 object-cover rounded-md cursor-pointer border hover:border-purple-600 transition"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="w-full flex flex-col space-y-6">
          {/* Info */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold leading-snug">
              {currentProduct.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 mt-3">
              <span className="text-lg sm:text-2xl font-bold">
                {currentProduct.price}
              </span>
              <span className="text-gray-500 line-through text-sm sm:text-base">
                {currentProduct.oldPrice}
              </span>
              <span className="bg-gray-100 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full border">
                Sale 10%
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              {currentProduct.desc}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col sm:flex-row gap-3 items-center w-full">
              {/* Buy Now */}
              <button className="flex-1 bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition">
                Buy Now
              </button>

              {/* Add to Cart */}
              <button className="flex-1 bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition">
                Add to Cart
              </button>

              {/* Variant Buttons */}
              <div className="flex gap-2">
                {Object.keys(productVariants).map((key) => {
                  if (key === variant) return null; // Hide current
                  return (
                    <button
                      key={key}
                      onClick={() => setVariant(key)}
                      className={`w-8 h-8 rounded-full ${productVariants[key].color} border hover:scale-110 transition`}
                      title={productVariants[key].title}
                    ></button>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp */}
            <button className="w-full bg-[#4F1c51] text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition">
              Order on WhatsApp
            </button>
          </div>

          {/* Offers */}
          <div className="bg-[#4F1c51] text-white rounded-lg p-5 space-y-4">
            <h3 className="font-semibold text-lg">Offers For You</h3>
            {["FLAT 100 off", "Everglow Jewels"].map((offer, idx) => (
              <div key={idx} className="bg-white text-black rounded-md p-4 shadow-sm">
                <p className="font-bold">{offer}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Comes with authenticity & guarantee certificate of Everglow
                  Jewels with lifetime exchange guarantee.
                </p>
              </div>
            ))}
          </div>

          {/* Shipping & Return */}
          <div className="space-y-3">
            {["Shipping", "Return Policy"].map((policy, idx) => (
              <details key={idx} className="border rounded-md px-4 py-3 cursor-pointer">
                <summary className="font-semibold">{policy}</summary>
                <p className="text-sm text-gray-600 mt-2">
                  {policy === "Shipping"
                    ? "Free shipping on all orders above ₹1000. Delivery in 4-6 business days."
                    : "Easy 7-day return & exchange policy with 100% refund guarantee."}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Product Details</h2>
        <hr className="mb-6 border-gray-300" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Weight</h3>
              <p className="text-sm text-gray-700">Gross (Product) - 1.291</p>
              <p className="text-sm text-gray-700">Net (Gold) - 1.005</p>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Purity</h3>
              <p className="text-sm text-gray-700">14k Yellow Gold</p>
            </div>

            <div className="bg-white rounded-lg shadow p-4 sm:col-span-2">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                Diamond and Gemstones
              </h3>
              <p className="text-sm text-gray-700 mb-2">
                Weight 1.43 &nbsp;&nbsp; Diamonds - Lab Grown Diamonds
              </p>
              <table className="w-full border-collapse text-sm text-gray-700">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 text-left">Color</th>
                    <th className="py-2 text-left">Clarity</th>
                    <th className="py-2 text-left">Shape</th>
                    <th className="py-2 text-left">No. of Diamonds</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="py-2">E-F</td>
                    <td className="py-2">VVS-VS</td>
                    <td className="py-2">Round</td>
                    <td className="py-2">3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right */}
          <div className="h-full self-stretch">
            <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  Price Breakup
                </h3>
                <div className="flex justify-between text-sm text-gray-700 mb-1">
                  <span>Gold</span>
                  <span>Rs.5517.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-700 mb-1">
                  <span className="line-through">Rs.40200.00</span>
                  <span>Rs.32160.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-700 mb-1">
                  <span className="line-through">Rs.2412.00</span>
                  <span>Rs.1206.00</span>
                </div>
                <div className="flex justify-between text-sm text-gray-700 mb-1">
                  <span>GST (3%)</span>
                  <span>Rs.1166</span>
                </div>
              </div>
              <div>
                <hr className="my-2 border-gray-300" />
                <div className="flex justify-between font-semibold text-gray-900">
                  <span>Total</span>
                  <span>Rs.40049/-</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-xl font-semibold mb-6 text-center">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MoreInfo2;
