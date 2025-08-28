// import React from "react";
// import { FaTrash, FaHeart } from "react-icons/fa";
// import ringImage from "../../assets/Rings.png"; // replace with your product image
// // import bannerImage from "https://via.placeholder.com/1200x200/FFD1DC/4B164C?text=Special+Offer+on+Your+Cart"; 
// // 🔹 temporary banner image (replace later with your banner.png)
// import { FaCheckCircle } from "react-icons/fa";
// import { FaGift } from "react-icons/fa";


// const Cart = () => {
//     const features = [
//         "30-Day Returnable",
//         "Eligible for Lifetime exchange & Buy back",
//         "Free & Insured Delivery",
//     ];

//     return (
//         <div className="bg-white min-h-screen py-8 px-4 md:px-10">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 {/* Left Section */}
//                 <div className="lg:col-span-2 space-y-6">
//                     {/* Heading */}
//                     <h2 className="text-xl font-semibold text-gray-800">
//                         My Shopping Cart <span className="text-gray-500">(1 Item)</span>
//                     </h2>

//                     {/* 🔹 Modern Banner Section */}
//                     <div className="relative rounded-2xl overflow-hidden shadow-md">
//                         <img
//                             src="https://placehold.co/1200x200/FFD1DC/4B164C?text=Special+Offer+on+Your+Cart"
//                             alt="Offers"
//                             className="w-full h-20 md:h-24 object-cover"
//                             loading="lazy"
//                         />
//                         <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
//                             <h3 className="text-white text-2xl md:text-3xl font-bold">
//                                 Special Discount Just For You 🎉
//                             </h3>
//                             <p className="text-gray-200 mt-2 text-sm md:text-base">
//                                 Save extra on your next order with exclusive offers
//                             </p>
//                             <button className="mt-4 px-6 py-2 bg-[#4F1c51] hover:bg-purple-800 text-white font-medium rounded-lg shadow">
//                                 Explore Offers
//                             </button>
//                         </div>
//                     </div>

//                     {/* Cart Item */}
//                     <div className="p-4 w-full">
//                         <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
//                             {/* Product Image */}
//                             <div className="w-full md:w-[25%]">
//                                 <img
//                                     src={ringImage}
//                                     alt="Product"
//                                     className="w-full h-full object-cover rounded-lg border"
//                                     loading="lazy"
//                                 />
//                             </div>

//                             {/* Product Details Box */}
//                             <div className="flex-1 bg-white border rounded-md shadow-sm flex flex-col">
//                                 <div className="p-4 flex-1">
//                                     {/* Title & Price Row */}
//                                     <div className="flex justify-between items-start">
//                                         <div>
//                                             <h3 className="text-lg font-semibold text-gray-800">
//                                                 The Avila Ring
//                                             </h3>
//                                             <p className="text-sm text-gray-500 mt-1">
//                                                 Product Code: 078883-29653831
//                                             </p>
//                                         </div>

//                                         {/* Price */}
//                                         <div className="text-right">
//                                             <p className="text-sm text-gray-400 line-through">₹24,231</p>
//                                             <p className="text-xl font-semibold text-gray-900">₹23,155</p>
//                                             <p className="text-xs text-gray-500 mt-1">
//                                                 (10% OFF ON DIAMOND PRICE)
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Offer */}
//                                     <p className="text-sm text-red-600 mt-2">
//                                         <span className="font-semibold">%</span> Upto 30% off on Making
//                                         Charges above Rs. 75,000 order value
//                                     </p>

//                                     {/* Selectors */}
//                                     <div className="mt-4 border rounded-md divide-y text-sm text-gray-700">
//                                         {/* Ring Size & Quantity */}
//                                         <div className="flex items-center">
//                                             {/* Ring Size */}
//                                             <div className="flex items-center flex-1">
//                                                 <span className="bg-gray-100 px-3 py-2 w-28">Ring Size</span>
//                                                 <select className="flex-1 px-2 py-2 border-l border-gray-200 focus:outline-none">
//                                                     <option>9</option>
//                                                     <option>10</option>
//                                                     <option>11</option>
//                                                 </select>
//                                             </div>

//                                             {/* Quantity */}
//                                             <div className="flex items-center flex-1 border-l border-gray-200">
//                                                 <span className="px-3 py-2 w-24">Quantity</span>
//                                                 <select className="flex-1 px-2 py-2 border-l border-gray-200 focus:outline-none">
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                     <option>4</option>
//                                                 </select>
//                                             </div>
//                                         </div>

//                                         {/* Metal */}
//                                         <div className="flex">
//                                             <span className="bg-gray-100 px-3 py-2 w-28">Metal</span>
//                                             <span className="px-3 py-2 flex-1">18Kt Gold, 1.23 gram</span>
//                                         </div>

//                                         {/* Stone */}
//                                         <div className="flex">
//                                             <span className="bg-gray-100 px-3 py-2 w-28">Stone</span>
//                                             <span className="px-3 py-2 flex-1">
//                                                 14 Diamond, 0.0840 Carat, SI IJ
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Action Buttons */}
//                                 <div className="border-t flex text-sm">
//                                     <button className="flex items-center justify-center gap-2 flex-1 py-3 text-gray-700 hover:text-red-600 font-medium">
//                                         <FaTrash /> REMOVE
//                                     </button>
//                                     <button className="flex items-center justify-center gap-2 flex-1 py-3 text-gray-700 hover:text-purple-700 font-medium border-l">
//                                         <FaHeart /> MOVE TO WISHLIST
//                                         <span className="text-xs text-gray-500">(Need login first)</span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="border bg-gray-50 rounded-md px-4 py-3">
//                         <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6">
//                             {features.map((feature, index) => (
//                                 <div
//                                     key={index}
//                                     className="flex items-center text-gray-700 text-sm md:text-base"
//                                 >
//                                     <FaCheckCircle className="text-gray-500 mr-2 text-lg" />
//                                     <span>{feature}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>




//                 </div> 

//                <div className="w-px h-6 bg-gray-400"></div>



//                 {/* Right Section - Order Summary */}
//                 <div className=" rounded-lg   p-6 h-fit sticky top-6">
//                     {/* Heading */}
//                     <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                         ORDER SUMMARY
//                     </h3>

//                     {/* Total */}
//                     <div className="flex justify-between text-sm text-gray-700 mb-2">
//                         <span>Total (1 Item)</span>
//                         <span>₹23,155</span>
//                     </div>
//                     <div className="border-t border-dotted border-gray-400 my-4"></div>

//                     {/* Total Payable */}
//                     <div className="flex justify-between font-medium text-gray-900 mb-2">
//                         <span>Total Payable</span>
//                         <span>₹23,155</span>
//                     </div>

//                     {/* Savings */}
//                     <p className="text-green-600 text-sm mb-6">You Save ₹1,076</p>

//                     {/* Gift Message */}
//                     <div className="mb-6 flex items-center justify-between border rounded-md px-3 py-2 bg-gray-50">
//                         <div className="flex items-center text-sm text-gray-700">
//                             <FaGift className="text-gray-500 mr-2" />
//                             <span>Gift Message (Optional)</span>
//                         </div>
//                         <button className="text-purple-700 font-medium text-sm hover:underline">
//                             Add
//                         </button>
//                     </div>

//                     {/* Place Order Button */}
//                     <button className="w-full bg-purple-800 hover:bg-[#4F1c51] text-white py-3 rounded-md text-lg font-medium mb-6 shadow-md">
//                         place order
//                     </button>

//                     {/* Apply Voucher */}
//                     <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
//                         <span className="text-gray-500">⚙</span> Apply Voucher / Gift Card
//                     </p>

//                     {/* Contact */}
//                     <p className="text-sm text-gray-600">
//                         Any Questions? 
//                         <br/>
//                         Please call us at{" "}
//                         <a href="tel:18004190066" className="text-purple-700 font-medium">
//                             18004190066
//                         </a>{" "}
//                         or{" "}
//                         <a href="#" className="text-purple-700 font-medium hover:underline">
//                             Chat with us
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;

// import React from "react";
// import { FaTrash, FaHeart, FaCheckCircle, FaGift } from "react-icons/fa";
// import ringImage from "../../assets/Rings.png"; // replace with your product image
// import { Link } from "react-router-dom";

// const Cart = () => {
//     // 🔹 Products Array
//     const products = [
//         {
//             id: 1,
//             name: "The Avila Ring",
//             code: "078883-29653831",
//             oldPrice: "₹24,231",
//             price: "₹23,155",
//             offer: "10% OFF ON DIAMOND PRICE",
//             metal: "18Kt Gold, 1.23 gram",
//             stone: "14 Diamond, 0.0840 Carat, SI IJ",
//             image: ringImage,
//         },
//         {
//             id: 2,
//             name: "Elegant Diamond Ring",
//             code: "092773-18572943",
//             oldPrice: "₹30,000",
//             price: "₹28,500",
//             offer: "15% OFF ON MAKING CHARGES",
//             metal: "18Kt Gold, 2.10 gram",
//             stone: "20 Diamond, 0.120 Carat, VS IJ",
//             image: ringImage,
//         },
//     ];

//     // 🔹 Features (static, but appear under each product automatically)
//     const renderFeatures = () => (
//         <div className="border bg-gray-50 rounded-md px-4 py-3 mt-4">
//             <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6">
//                 <div className="flex items-center text-gray-700 text-sm md:text-base">
//                     <FaCheckCircle className="text-gray-500 mr-2 text-lg" />
//                     <span>30-Day Returnable</span>
//                 </div>
//                 <div className="flex items-center text-gray-700 text-sm md:text-base">
//                     <FaCheckCircle className="text-gray-500 mr-2 text-lg" />
//                     <span>Eligible for Lifetime exchange & Buy back</span>
//                 </div>
//                 <div className="flex items-center text-gray-700 text-sm md:text-base">
//                     <FaCheckCircle className="text-gray-500 mr-2 text-lg" />
//                     <span>Free & Insured Delivery</span>
//                 </div>
//             </div>
//         </div>
//     );

//     return (
//         <div className="bg-white min-h-screen py-8 px-4 md:px-10">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_auto_1fr] gap-8">
//                 {/* Left Section */}
//                 <div className="space-y-6">
//                     {/* Heading */}
//                     <h2 className="text-xl font-semibold text-gray-800">
//                         My Shopping Cart <span className="text-gray-500">({products.length} Items)</span>
//                     </h2>

//                     {/* 🔹 Banner */}
//                     <div className="relative rounded-2xl overflow-hidden shadow-md">
//                         <img
//                             src="https://placehold.co/1200x200/FFD1DC/4B164C?text=Special+Offer+on+Your+Cart"
//                             alt="Offers"
//                             className="w-full h-20 md:h-24 object-cover"
//                             loading="lazy"
//                         />
//                         <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
//                             <h3 className="text-white text-2xl md:text-3xl font-bold">
//                                 Special Discount Just For You 🎉
//                             </h3>
//                             <p className="text-gray-200 mt-2 text-sm md:text-base">
//                                 Save extra on your next order with exclusive offers
//                             </p>
//                             <button className="mt-4 px-6 py-2 bg-[#4F1c51] hover:bg-purple-800 text-white font-medium rounded-lg shadow">
//                                 Explore Offers
//                             </button>
//                         </div>
//                     </div>

//                     {/* 🔹 Products Loop */}
//                     {products.map((product) => (
//                         <div key={product.id} className="p-4 w-full border rounded-lg shadow-sm">
//                             <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
//                                 {/* Product Image */}
//                                 <div className="w-full md:w-[25%]">
//                                     <img
//                                         src={product.image}
//                                         alt={product.name}
//                                         className="w-full h-full object-cover rounded-lg border"
//                                         loading="lazy"
//                                     />
//                                 </div>

//                                 {/* Product Details */}
//                                 <div className="flex-1 bg-white flex flex-col">
//                                     <div className="p-4 flex-1">
//                                         {/* Title & Price */}
//                                         <div className="flex justify-between items-start">
//                                             <div>
//                                                 <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
//                                                 <p className="text-sm text-gray-500 mt-1">Product Code: {product.code}</p>
//                                             </div>
//                                             <div className="text-right">
//                                                 <p className="text-sm text-gray-400 line-through">{product.oldPrice}</p>
//                                                 <p className="text-xl font-semibold text-gray-900">{product.price}</p>
//                                                 <p className="text-xs text-gray-500 mt-1">({product.offer})</p>
//                                             </div>
//                                         </div>

//                                         {/* Offer */}
//                                         <p className="text-sm text-red-600 mt-2">
//                                             <span className="font-semibold">%</span> Upto 30% off on Making
//                                             Charges above Rs. 75,000 order value
//                                         </p>

//                                         {/* Selectors */}
//                                         <div className="mt-4 border rounded-md divide-y text-sm text-gray-700">
//                                             {/* Ring Size & Quantity */}
//                                             <div className="flex items-center">
//                                                 <div className="flex items-center flex-1">
//                                                     <span className="bg-gray-100 px-3 py-2 w-28">Ring Size</span>
//                                                     <select className="flex-1 px-2 py-2 border-l border-gray-200 focus:outline-none">
//                                                         <option>9</option>
//                                                         <option>10</option>
//                                                         <option>11</option>
//                                                     </select>
//                                                 </div>
//                                                 <div className="flex items-center flex-1 border-l border-gray-200">
//                                                     <span className="px-3 py-2 w-24">Quantity</span>
//                                                     <select className="flex-1 px-2 py-2 border-l border-gray-200 focus:outline-none">
//                                                         <option>1</option>
//                                                         <option>2</option>
//                                                         <option>3</option>
//                                                         <option>4</option>
//                                                     </select>
//                                                 </div>
//                                             </div>

//                                             {/* Metal */}
//                                             <div className="flex">
//                                                 <span className="bg-gray-100 px-3 py-2 w-28">Metal</span>
//                                                 <span className="px-3 py-2 flex-1">{product.metal}</span>
//                                             </div>

//                                             {/* Stone */}
//                                             <div className="flex">
//                                                 <span className="bg-gray-100 px-3 py-2 w-28">Stone</span>
//                                                 <span className="px-3 py-2 flex-1">{product.stone}</span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Actions */}
//                                     <div className="border-t flex text-sm">
//                                         <button className="flex items-center justify-center gap-2 flex-1 py-3 text-gray-700 hover:text-red-600 font-medium">
//                                             <FaTrash /> REMOVE
//                                         </button>
//                                         <button className="flex items-center justify-center gap-2 flex-1 py-3 text-gray-700 hover:text-purple-700 font-medium border-l">
//                                             <FaHeart /> MOVE TO WISHLIST
//                                             <span className="text-xs text-gray-500">(Need login first)</span>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* 🔹 Features Under Each Product */}
//                             {renderFeatures()}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Divider */}
//                 <div className="w-px bg-gray-300 h-full"></div>

//                 {/* Right Section - Order Summary */}
//                 <div className="rounded-lg p-6 h-fit sticky top-6 border shadow-sm">
//                     <h3 className="text-lg font-semibold text-gray-800 mb-4">ORDER SUMMARY</h3>

//                     <div className="flex justify-between text-sm text-gray-700 mb-2">
//                         <span>Total ({products.length} Items)</span>
//                         <span>₹51,655</span>
//                     </div>
//                     <div className="border-t border-dotted border-gray-400 my-4"></div>

//                     <div className="flex justify-between font-medium text-gray-900 mb-2">
//                         <span>Total Payable</span>
//                         <span>₹51,655</span>
//                     </div>

//                     <p className="text-green-600 text-sm mb-6">You Save ₹2,076</p>

//                     <div className="mb-6 flex items-center justify-between border rounded-md px-3 py-2 bg-gray-50">
//                         <div className="flex items-center text-sm text-gray-700">
//                             <FaGift className="text-gray-500 mr-2" />
//                             <span>Gift Message (Optional)</span>
//                         </div>
//                         <button className="text-purple-700 font-medium text-sm hover:underline">Add</button>
//                     </div>

//                     <Link to="/orderConfirmation">
//                     <button className="w-full bg-[#4F1c51] hover:bg-[#421543] text-white py-3 rounded-md text-lg font-medium mb-6 shadow-md cursor-pointer">
//                         Place Order
//                     </button>
//                     </Link>


//                     <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
//                         <span className="text-gray-500">⚙</span> Apply Voucher / Gift Card
//                     </p>

//                     <p className="text-sm text-gray-600">
//                         Any Questions?
//                         <br />
//                         Please call us at{" "}
//                         <a href="tel:18004190066" className="text-purple-700 font-medium">
//                             18004190066
//                         </a>{" "}
//                         or{" "}
//                         <a href="#" className="text-purple-700 font-medium hover:underline">
//                             Chat with us
//                         </a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;


// import React, { useState } from "react";
// import { FaTrash, FaHeart, FaCheckCircle, FaGift } from "react-icons/fa";
// import ringImage from "../../assets/Rings.png";
// import emptyCartImg from "../../assets/Empty.png";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "The Avila Ring",
//       code: "078883-29653831",
//       oldPrice: "₹24,231",
//       price: "₹23,155",
//       offer: "10% OFF ON DIAMOND PRICE",
//       metal: "18Kt Gold, 1.23 gram",
//       stone: "14 Diamond, 0.0840 Carat, SI IJ",
//       image: ringImage,
//     },
//     {
//       id: 2,
//       name: "Elegant Diamond Ring",
//       code: "092773-18572943",
//       oldPrice: "₹30,000",
//       price: "₹28,500",
//       offer: "15% OFF ON MAKING CHARGES",
//       metal: "18Kt Gold, 2.10 gram",
//       stone: "20 Diamond, 0.120 Carat, VS IJ",
//       image: ringImage,
//     },
//   ]);

//   const renderFeatures = () => (
//     <div className="border bg-gray-50 rounded-md px-4 py-3 mt-4">
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6">
//         <div className="flex items-center text-gray-700 text-sm md:text-base">
//           <FaCheckCircle className="text-gray-500 mr-2 text-lg" />
//           <span>30-Day Returnable</span>
//         </div>
//         <div className="flex items-center text-gray-700 text-sm md:text-base">
//           <FaCheckCircle className="text-gray-500 mr-2 text-lg" />
//           <span>Eligible for Lifetime exchange & Buy back</span>
//         </div>
//         <div className="flex items-center text-gray-700 text-sm md:text-base">
//           <FaCheckCircle className="text-gray-500 mr-2 text-lg" />
//           <span>Free & Insured Delivery</span>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-white min-h-screen py-8 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto">
//         {products.length === 0 ? (
//           <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
//             <img
//               src={emptyCartImg}
//               alt="Empty Cart"
//               className="w-full max-w-xl object-contain"
//             />
//             <h2 className="text-2xl font-semibold text-gray-800">
//               Your Cart is Empty
//             </h2>
//             <p className="text-gray-500 max-w-md">
//               "Looks like your bag is feeling lonely. Time to fill it with something
//               beautiful!"
//             </p>
//             <Link to="/">
//               <button className="px-6 py-3 bg-[#4F1c51] text-white font-medium rounded-lg shadow hover:bg-[#421543] transition">
//                 Continue Shopping
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Left Section */}
//             <div className="flex-1 space-y-6">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 My Shopping Cart{" "}
//                 <span className="text-gray-500">({products.length} Items)</span>
//               </h2>

//               {/* Banner */}
//               <div className="relative rounded-2xl overflow-hidden shadow-md">
//                 <img
//                   src="https://placehold.co/1200x200/FFD1DC/4B164C?text=Special+Offer+on+Your+Cart"
//                   alt="Offers"
//                   className="w-full h-20 md:h-24 object-cover"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
//                   <h3 className="text-white text-2xl md:text-3xl font-bold">
//                     Special Discount Just For You 🎉
//                   </h3>
//                   <p className="text-gray-200 mt-2 text-sm md:text-base">
//                     Save extra on your next order with exclusive offers
//                   </p>
//                   <button className="mt-4 px-6 py-2 bg-[#4F1c51] hover:bg-[#421543] text-white font-medium rounded-lg shadow">
//                     Explore Offers
//                   </button>
//                 </div>
//               </div>

//               {/* Products Loop */}
//               {products.map((product) => (
//                 <div
//                   key={product.id}
//                   className="p-4 w-full border rounded-lg shadow-sm"
//                 >
//                   <div className="flex flex-col md:flex-row gap-4 md:items-stretch">
//                     <div className="w-full md:w-[25%]">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-full object-cover rounded-lg border"
//                         loading="lazy"
//                       />
//                     </div>

//                     <div className="flex-1 bg-white flex flex-col">
//                       <div className="p-4 flex-1">
//                         <div className="flex justify-between items-start">
//                           <div>
//                             <h3 className="text-lg font-semibold text-gray-800">
//                               {product.name}
//                             </h3>
//                             <p className="text-sm text-gray-500 mt-1">
//                               Product Code: {product.code}
//                             </p>
//                           </div>
//                           <div className="text-right">
//                             <p className="text-sm text-gray-400 line-through">
//                               {product.oldPrice}
//                             </p>
//                             <p className="text-xl font-semibold text-gray-900">
//                               {product.price}
//                             </p>
//                             <p className="text-xs text-gray-500 mt-1">
//                               ({product.offer})
//                             </p>
//                           </div>
//                         </div>

//                         <p className="text-sm text-red-600 mt-2">
//                           <span className="font-semibold">%</span> Upto 30% off on
//                           Making Charges above Rs. 75,000 order value
//                         </p>

//                         <div className="mt-4 border rounded-md divide-y text-sm text-gray-700">
//                           <div className="flex items-center">
//                             <div className="flex items-center flex-1">
//                               <span className="bg-gray-100 px-3 py-2 w-28">
//                                 Ring Size
//                               </span>
//                               <select className="flex-1 px-2 py-2 border-l border-gray-200 focus:outline-none">
//                                 <option>9</option>
//                                 <option>10</option>
//                                 <option>11</option>
//                               </select>
//                             </div>
//                             <div className="flex items-center flex-1 border-l border-gray-200">
//                               <span className="px-3 py-2 w-24">Quantity</span>
//                               <select className="flex-1 px-2 py-2 border-l border-gray-200 focus:outline-none">
//                                 <option>1</option>
//                                 <option>2</option>
//                                 <option>3</option>
//                                 <option>4</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div className="flex">
//                             <span className="bg-gray-100 px-3 py-2 w-28">
//                               Metal
//                             </span>
//                             <span className="px-3 py-2 flex-1">{product.metal}</span>
//                           </div>

//                           <div className="flex">
//                             <span className="bg-gray-100 px-3 py-2 w-28">
//                               Stone
//                             </span>
//                             <span className="px-3 py-2 flex-1">{product.stone}</span>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="border-t flex text-sm">
//                         <button className="flex items-center justify-center gap-2 flex-1 py-3 text-gray-700 hover:text-red-600 font-medium">
//                           <FaTrash /> REMOVE
//                         </button>
//                         <button className="flex items-center justify-center gap-2 flex-1 py-3 text-gray-700 hover:text-purple-700 font-medium border-l">
//                           <FaHeart /> MOVE TO WISHLIST
//                           <span className="text-xs text-gray-500">
//                             (Need login first)
//                           </span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {renderFeatures()}
//                 </div>
//               ))}
//             </div>

//             {/* Right Section - Order Summary */}
//             <div className="lg:w-[350px] w-full lg:sticky top-6 self-start">
//               <div className="rounded-lg p-6 border shadow-sm mb-10 lg:mb-0">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                   ORDER SUMMARY
//                 </h3>
//                 <div className="flex justify-between text-sm text-gray-700 mb-2">
//                   <span>Total ({products.length} Items)</span>
//                   <span>₹51,655</span>
//                 </div>
//                 <div className="border-t border-dotted border-gray-400 my-4"></div>
//                 <div className="flex justify-between font-medium text-gray-900 mb-2">
//                   <span>Total Payable</span>
//                   <span>₹51,655</span>
//                 </div>
//                 <p className="text-green-600 text-sm mb-6">You Save ₹2,076</p>
//                 <div className="mb-6 flex items-center justify-between border rounded-md px-3 py-2 bg-gray-50">
//                   <div className="flex items-center text-sm text-gray-700">
//                     <FaGift className="text-gray-500 mr-2" />
//                     <span>Gift Message (Optional)</span>
//                   </div>
//                   <button className="text-purple-700 font-medium text-sm hover:underline">
//                     Add
//                   </button>
//                 </div>
//                 <Link to="/orderConfirmation">
//                   <button className="w-full bg-[#4F1c51] hover:bg-[#421543] text-white py-3 rounded-md text-lg font-medium mb-6 shadow-md cursor-pointer">
//                     Place Order
//                   </button>
//                 </Link>
//                 <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
//                   <span className="text-gray-500">⚙</span> Apply Voucher / Gift Card
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   Any Questions?
//                   <br />
//                   Please call us at{" "}
//                   <a href="tel:18004190066" className="text-purple-700 font-medium">
//                     18004190066
//                   </a>{" "}
//                   or{" "}
//                   <a href="#" className="text-purple-700 font-medium hover:underline">
//                     Chat with us
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from "react";
import { FaTrash, FaHeart, FaCheckCircle, FaGift } from "react-icons/fa";
import ringImage from "../../assets/Rings.png";
import emptyCartImg from "../../assets/Empty.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const [products] = useState([
    {
      id: 1,
      name: "The Avila Ring",
      code: "078883-29653831",
      oldPrice: "₹24,231",
      price: "₹23,155",
      offer: "10% OFF ON DIAMOND PRICE",
      metal: "18Kt Gold, 1.23 gram",
      stone: "14 Diamond, 0.0840 Carat, SI IJ",
      image: ringImage,
    },
    {
      id: 2,
      name: "Elegant Diamond Ring",
      code: "092773-18572943",
      oldPrice: "₹30,000",
      price: "₹28,500",
      offer: "15% OFF ON MAKING CHARGES",
      metal: "18Kt Gold, 2.10 gram",
      stone: "20 Diamond, 0.120 Carat, VS IJ",
      image: ringImage,
    },
  ]);

  const renderFeatures = () => (
    <div className="border bg-gray-50 rounded-md px-4 py-3 mt-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6">
        <div className="flex items-center text-gray-700 text-sm md:text-base">
          <FaCheckCircle className="text-gray-500 mr-2 text-lg" />
          <span>30-Day Returnable</span>
        </div>
        <div className="flex items-center text-gray-700 text-sm md:text-base">
          <FaCheckCircle className="text-gray-500 mr-2 text-lg" />
          <span>Eligible for Lifetime exchange & Buy back</span>
        </div>
        <div className="flex items-center text-gray-700 text-sm md:text-base">
          <FaCheckCircle className="text-gray-500 mr-2 text-lg" />
          <span>Free & Insured Delivery</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen py-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {products.length === 0 ? (
          // Empty Cart
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
            <img
              src={emptyCartImg}
              alt="Empty Cart"
              className="w-full max-w-xl object-contain"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 max-w-md">
              "Looks like your bag is feeling lonely. Time to fill it with something
              beautiful!"
            </p>
            <Link to="/">
              <button className="px-6 py-3 bg-[#4F1c51] text-white font-medium rounded-lg shadow hover:bg-[#421543] transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="lg:flex lg:items-start lg:gap-8">
            {/* ---------------- LEFT SECTION ---------------- */}
            <div className="flex-1 space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">
                My Shopping Cart{" "}
                <span className="text-gray-500">({products.length} Items)</span>
              </h2>

              {/* Banner */}
              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://placehold.co/1200x200/FFD1DC/4B164C?text=Special+Offer+on+Your+Cart"
                  alt="Offers"
                  className="w-full h-20 md:h-24 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                  <h3 className="text-white text-lg md:text-2xl font-bold">
                    Special Discount Just For You 🎉
                  </h3>
                  <p className="text-gray-200 mt-1 text-xs md:text-base">
                    Save extra on your next order with exclusive offers
                  </p>
                  <button className="mt-3 px-4 py-2 bg-[#4F1c51] hover:bg-[#421543] text-white font-medium rounded-lg shadow text-sm md:text-base">
                    Explore Offers
                  </button>
                </div>
              </div>

              {/* Product Loop */}
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-4 w-full border rounded-lg shadow-sm"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-full md:w-[25%]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 md:h-full object-cover rounded-lg border"
                        loading="lazy"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 bg-white flex flex-col">
                      <div className="p-2 sm:p-4 flex-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <div>
                            <h3 className="text-base md:text-lg font-semibold text-gray-800">
                              {product.name}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-500 mt-1">
                              Product Code: {product.code}
                            </p>
                          </div>
                          <div className="text-left sm:text-right">
                            <p className="text-xs text-gray-400 line-through">
                              {product.oldPrice}
                            </p>
                            <p className="text-lg font-semibold text-gray-900">
                              {product.price}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              ({product.offer})
                            </p>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-red-600 mt-2">
                          <span className="font-semibold">%</span> Upto 30% off on
                          Making Charges above Rs. 75,000 order value
                        </p>

                        {/* Responsive Info Section */}
                        <div className="mt-4 border rounded-md text-xs sm:text-sm text-gray-700">
                          {/* Ring Size & Quantity */}
                          <div className="flex flex-col sm:flex-row">
                            <div className="flex items-center flex-1 border-b sm:border-b-0">
                              <span className="bg-gray-100 px-3 py-2 w-28 shrink-0">
                                Ring Size
                              </span>
                              <select className="flex-1 px-2 py-2 border-l border-gray-200 focus:outline-none">
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                              </select>
                            </div>
                            <div className="flex items-center flex-1 border-t sm:border-t-0 sm:border-l border-gray-200">
                              <span className="px-3 py-2 w-24 shrink-0">Quantity</span>
                              <select className="flex-1 px-2 py-2 border-l border-gray-200 focus:outline-none">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                              </select>
                            </div>
                          </div>

                          {/* Metal */}
                          <div className="flex flex-col sm:flex-row border-t">
                            <span className="bg-gray-100 px-3 py-2 w-28 shrink-0">
                              Metal
                            </span>
                            <span className="px-3 py-2 flex-1">{product.metal}</span>
                          </div>

                          {/* Stone */}
                          <div className="flex flex-col sm:flex-row border-t">
                            <span className="bg-gray-100 px-3 py-2 w-28 shrink-0">
                              Stone
                            </span>
                            <span className="px-3 py-2 flex-1">{product.stone}</span>
                          </div>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="border-t flex flex-col sm:flex-row text-xs sm:text-sm">
                        <button className="flex items-center justify-center gap-2 flex-1 py-3 text-gray-700 hover:text-red-600 font-medium">
                          <FaTrash /> REMOVE
                        </button>
                        <button className="flex items-center justify-center gap-2 flex-1 py-3 text-gray-700 hover:text-purple-700 font-medium border-t sm:border-t-0 sm:border-l">
                          <FaHeart /> MOVE TO WISHLIST
                          <span className="hidden sm:inline text-xs text-gray-500">
                            (Need login first)
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  {renderFeatures()}
                </div>
              ))}
            </div>

            {/* ---------------- RIGHT SECTION ---------------- */}
            <div className="lg:w-[350px] w-full lg:sticky lg:top-6 h-fit">
              <div className="rounded-lg p-6 border shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  ORDER SUMMARY
                </h3>
                <div className="flex justify-between text-sm text-gray-700 mb-2">
                  <span>Total ({products.length} Items)</span>
                  <span>₹51,655</span>
                </div>
                <div className="border-t border-dotted border-gray-400 my-4"></div>
                <div className="flex justify-between font-medium text-gray-900 mb-2">
                  <span>Total Payable</span>
                  <span>₹51,655</span>
                </div>
                <p className="text-green-600 text-sm mb-6">You Save ₹2,076</p>
                <div className="mb-6 flex items-center justify-between border rounded-md px-3 py-2 bg-gray-50">
                  <div className="flex items-center text-sm text-gray-700">
                    <FaGift className="text-gray-500 mr-2" />
                    <span>Gift Message (Optional)</span>
                  </div>
                  <button className="text-purple-700 font-medium text-sm hover:underline">
                    Add
                  </button>
                </div>
                <Link to="/orderConfirmation">
                  <button className="w-full bg-[#4F1c51] hover:bg-[#421543] text-white py-3 rounded-md text-base md:text-lg font-medium mb-6 shadow-md cursor-pointer">
                    Place Order
                  </button>
                </Link>
                <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
                  <span className="text-gray-500">⚙</span> Apply Voucher / Gift Card
                </p>
                <p className="text-sm text-gray-600">
                  Any Questions?
                  <br />
                  Please call us at{" "}
                  <a href="tel:18004190066" className="text-purple-700 font-medium">
                    18004190066
                  </a>{" "}
                  or{" "}
                  <a href="#" className="text-purple-700 font-medium hover:underline">
                    Chat with us
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
