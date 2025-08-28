// import React, { useState } from "react";
// import { FaCheck, FaLock, FaGift } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// const OrderConfirm = () => {
//   const products = [{ id: 1 }, { id: 2 }];
//   const [deliveryType, setDeliveryType] = useState("home");

//   const [formData, setFormData] = useState({
//     email: "",
//     mobile: "",
//     name: "",
//     pincode: "",
//     address: "",
//     street: "",
//     town: "",
//     recipientMobile: "", // optional
//     landmark: "", // optional
//     gst: "", // optional
//     whatsapp: "", // optional
//     billingSame: true,
//   });

//   const [errors, setErrors] = useState({});

//   // ✅ validate only required fields
//   const validate = () => {
//     let newErrors = {};
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.mobile) newErrors.mobile = "Mobile number is required";
//     if (!formData.name) newErrors.name = "Recipient's Name is required";
//     if (!formData.pincode) newErrors.pincode = "Pincode is required";
//     if (!formData.address) newErrors.address = "Flat/House No. is required";
//     if (!formData.street) newErrors.street = "Street/Colony is required";
//     if (!formData.town) newErrors.town = "Locality/Town is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       toast.success("Form submitted successfully ✅");
//     } else {
//       toast.error("Please fill all required fields ⚠️");
//     }
//   };

//   return (
//     <div className="w-full bg-gray-50 min-h-screen">
//       {/* Stepper */}
//       <div className="w-full border-t border-[#4F1c51] bg-white">
//         <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
//           <div className="flex items-center gap-2">
//             <span className="text-xl font-semibold text-gray-800">BLUESTONE</span>
//           </div>

//           <div className="flex items-center gap-6">
//             {/* Cart */}
//             <div className="flex items-center gap-2">
//               <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs">
//                 <FaCheck />
//               </div>
//               <span className="text-gray-600 text-sm">Cart</span>
//             </div>

//             <div className="w-16 h-[2px] bg-gray-300"></div>

//             {/* Address */}
//             <div className="flex items-center gap-2">
//               <div className="flex items-center justify-center w-6 h-6 rounded-full border border-blue-500 text-blue-500 text-xs"></div>
//               <span className="text-gray-800 font-semibold text-sm">Address</span>
//             </div>

//             <div className="w-16 h-[2px] bg-gray-300"></div>

//             {/* Payment */}
//             <div className="flex items-center gap-2">
//               <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-400 text-gray-400 text-xs"></div>
//               <span className="text-gray-400 text-sm">Payment</span>
//             </div>
//           </div>

//           <div className="flex items-center gap-2 text-gray-500">
//             <FaLock className="text-sm" />
//             <span className="text-sm font-medium">100% SECURE</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Section */}
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-[2fr_1px_1fr] gap-6 px-4"
//       >
//         {/* Left Form */}
//         <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto">
//           <h2 className="text-lg font-semibold text-gray-800 mb-1">Your Details</h2>
//           <p className="text-sm text-gray-500 mb-4">
//             Required to Save Cart and Send Order Updates
//           </p>

//           {/* Email & Mobile */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Email address <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${
//                   errors.email ? "border-red-500" : "focus:ring-blue-600"
//                 } outline-none`}
//               />
//               {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
//             </div>

//             {/* Mobile */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Mobile number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={formData.mobile}
//                 onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//                 className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${
//                   errors.mobile ? "border-red-500" : "focus:ring-blue-600"
//                 } outline-none`}
//               />
//               {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
//             </div>
//           </div>

//           {/* WhatsApp Optional */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               WhatsApp Number (Optional)
//             </label>
//             <input
//               type="text"
//               value={formData.whatsapp}
//               onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
//               placeholder="+91"
//               className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
//             />
//           </div>

//   {/* Delivery Type */}
//   <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery Type</h3>
//   <div className="space-y-3 mb-6">
//     <label className="flex items-start gap-3 cursor-pointer border rounded-md px-4 py-3 hover:border-blue-600 transition">
//       <input
//         type="radio"
//         name="delivery"
//         value="home"
//         checked={deliveryType === "home"}
//         onChange={() => setDeliveryType("home")}
//         className="mt-1 text-blue-600 focus:ring-blue-600"
//       />
//       <span className="text-gray-700">Home Delivery</span>
//     </label>

//     <label className="flex items-start gap-3 cursor-pointer border rounded-md px-4 py-3 hover:border-blue-600 transition">
//       <input
//         type="radio"
//         name="delivery"
//         value="store"
//         checked={deliveryType === "store"}
//         onChange={() => setDeliveryType("store")}
//         className="mt-1 text-blue-600 focus:ring-blue-600"
//       />
//       <span className="text-gray-700">
//         Pick up from store
//         <span className="text-gray-500 text-sm block">
//           Buy now, pick up from our store at your convenience.
//         </span>
//       </span>
//     </label>
//   </div>

//           {/* Recipient Name */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Recipient's Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${
//                 errors.name ? "border-red-500" : "focus:ring-blue-600"
//               } outline-none`}
//             />
//             {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
//           </div>

//           {/* Address Inputs */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//             {/* Recipient Mobile Optional */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Recipient's mobile (Optional)
//               </label>
//               <input
//                 type="text"
//                 value={formData.recipientMobile}
//                 onChange={(e) =>
//                   setFormData({ ...formData, recipientMobile: e.target.value })
//                 }
//                 className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
//               />
//             </div>

//             {/* Pincode */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Pincode <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={formData.pincode}
//                 onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
//                 className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${
//                   errors.pincode ? "border-red-500" : "focus:ring-blue-600"
//                 } outline-none`}
//               />
//               {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>}
//             </div>

//             {/* House / Flat */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Apartment/House/Flat No. <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={formData.address}
//                 onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//                 className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${
//                   errors.address ? "border-red-500" : "focus:ring-blue-600"
//                 } outline-none`}
//               />
//               {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
//             </div>

//             {/* Street */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Street/Colony/Area Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={formData.street}
//                 onChange={(e) => setFormData({ ...formData, street: e.target.value })}
//                 className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${
//                   errors.street ? "border-red-500" : "focus:ring-blue-600"
//                 } outline-none`}
//               />
//               {errors.street && <p className="text-xs text-red-500 mt-1">{errors.street}</p>}
//             </div>

//             {/* Town */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Locality / Town <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 value={formData.town}
//                 onChange={(e) => setFormData({ ...formData, town: e.target.value })}
//                 className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${
//                   errors.town ? "border-red-500" : "focus:ring-blue-600"
//                 } outline-none`}
//               />
//               {errors.town && <p className="text-xs text-red-500 mt-1">{errors.town}</p>}
//             </div>

//             {/* Landmark Optional */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 Landmark (Optional)
//               </label>
//               <input
//                 type="text"
//                 value={formData.landmark}
//                 onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
//                 className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
//               />
//             </div>
//           </div>

//           {/* GST Optional */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               GST Number (Optional)
//             </label>
//             <input
//               type="text"
//               value={formData.gst}
//               onChange={(e) => setFormData({ ...formData, gst: e.target.value })}
//               className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
//             />
//           </div>

//           {/* Checkbox */}
//           <div className="mb-6">
//             <label className="flex items-center gap-2 cursor-pointer">
//               <input
//                 type="checkbox"
//                 checked={formData.billingSame}
//                 onChange={(e) =>
//                   setFormData({ ...formData, billingSame: e.target.checked })
//                 }
//                 className="text-blue-600 focus:ring-blue-600"
//               />
//               <span className="text-sm text-gray-700">
//                 Billing address is same as shipping address
//               </span>
//             </label>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg font-medium shadow-md cursor-pointer"
//           >
//             Save & Continue
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="w-px bg-gray-300 hidden lg:block"></div>

//         {/* Right - Order Summary */}
//         <div className="bg-white rounded-lg p-6 h-fit sticky top-6 border shadow-sm">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">ORDER SUMMARY</h3>

//           <div className="flex justify-between text-sm text-gray-700 mb-2">
//             <span>Total ({products.length} Items)</span>
//             <span>₹51,655</span>
//           </div>
//           <div className="border-t border-dotted border-gray-400 my-4"></div>

//           <div className="flex justify-between font-medium text-gray-900 mb-2">
//             <span>Total Payable</span>
//             <span>₹51,655</span>
//           </div>

//           <p className="text-green-600 text-sm mb-6">You Save ₹2,076</p>

//           <div className="mb-6 flex items-center justify-between border rounded-md px-3 py-2 bg-gray-50">
//             <div className="flex items-center text-sm text-gray-700">
//               <FaGift className="text-gray-500 mr-2" />
//               <span>Gift Message (Optional)</span>
//             </div>
//             <button className="text-blue-600 font-medium text-sm hover:underline">
//               Add
//             </button>
//           </div>

//           <Link to="/orderConfirmation">
//             <button className="w-full bg-[#4F1c51] hover:bg-[#421543] text-white py-3 rounded-md text-lg font-medium mb-6 shadow-md cursor-pointer">
//               Place Order
//             </button>
//           </Link>

//           <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
//             <span className="text-gray-500">⚙</span> Apply Voucher / Gift Card
//           </p>

//           <p className="text-sm text-gray-600">
//             Any Questions?
//             <br />
//             Please call us at{" "}
//             <a href="tel:18004190066" className="text-blue-600 font-medium">
//               18004190066
//             </a>{" "}
//             or{" "}
//             <a href="#" className="text-blue-600 font-medium hover:underline">
//               Chat with us
//             </a>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default OrderConfirm;


// import React, { useState } from "react";
// import { FaCheck, FaGift, FaLock, FaPen } from "react-icons/fa";
// import toast from "react-hot-toast";

// const OrderConfirm = () => {
//     const products = [{ id: 1 }, { id: 2 }];

//     // ✅ Track Step
//     const [step, setStep] = useState("cart"); // cart → address → payment → success
//     const [deliveryType, setDeliveryType] = useState("home");


//     // ✅ Form Data 
//     const [formData, setFormData] = useState({
//         email: "",
//         mobile: "",
//         name: "",
//         pincode: "",
//         address: "",
//         street: "",
//         town: "",
//         recipientMobile: "", // optional
//         landmark: "", // optional
//         gst: "", // optional
//         whatsapp: "", // optional
//         billingSame: true, // checkbox
//     });

//     const [errors, setErrors] = useState({});

//     // ✅ Validate required fields only
//     const validate = () => {
//         let newErrors = {};
//         if (!formData.email) newErrors.email = "Email is required";
//         if (!formData.mobile) newErrors.mobile = "Mobile number is required";
//         if (!formData.name) newErrors.name = "Recipient's Name is required";
//         if (!formData.pincode) newErrors.pincode = "Pincode is required";
//         if (!formData.address) newErrors.address = "Flat/House No. is required";
//         if (!formData.street) newErrors.street = "Street/Colony is required";
//         if (!formData.town) newErrors.town = "Locality/Town is required";
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     // ✅ Handle Your Details form submit
//     const handleDetailsSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             toast.success("Details submitted ✅");
//             setStep("address");
//         } else {
//             toast.error("Please fill all required fields ⚠️");
//         }
//     };

//     // ✅ Handle Payment
//     const handlePayment = () => {
//         toast.success("Payment Successful 💳✅");
//         setStep("success");
//     };

//     return (
//         <div className="w-full bg-gray-50 min-h-screen">
//             {/* Stepper */}
//             <div className="w-full border-t border-[#4F1c51] bg-white">
//                 <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
//                     <div className="flex items-center gap-2">
//                         <span className="text-xl font-semibold text-gray-800">BLUESTONE</span>
//                     </div>

//                     {/* ✅ Stepper */}
//                     <div className="flex items-center gap-6">
//                         {/* Cart */}
//                         <div className="flex items-center gap-2">
//                             <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs">
//                                 <FaCheck />
//                             </div>
//                             <span className="text-gray-600 text-sm">Cart</span>
//                         </div>

//                         <div className="w-16 h-[2px] bg-gray-300"></div>

//                         {/* Address */}
//                         <div className="flex items-center gap-2">
//                             <div
//                                 className={`flex items-center justify-center w-6 h-6 rounded-full text-xs 
//                 ${step === "address" || step === "success"
//                                         ? "bg-green-500 text-white"
//                                         : "border border-blue-500 text-blue-500"
//                                     }`}
//                             >
//                                 {step === "address" || step === "success" ? <FaCheck /> : ""}
//                             </div>
//                             <span
//                                 className={`text-sm ${step === "cart" ? "text-gray-800 font-semibold" : "text-gray-600"
//                                     }`}
//                             >
//                                 Address
//                             </span>
//                         </div>

//                         <div className="w-16 h-[2px] bg-gray-300"></div>

//                         {/* Payment */}
//                         <div className="flex items-center gap-2">
//                             <div
//                                 className={`flex items-center justify-center w-6 h-6 rounded-full text-xs 
//                 ${step === "success"
//                                         ? "bg-green-500 text-white"
//                                         : step === "address"
//                                             ? "border border-blue-500 text-blue-500"
//                                             : "border border-gray-400 text-gray-400"
//                                     }`}
//                             >
//                                 {step === "success" ? <FaCheck /> : ""}
//                             </div>
//                             <span
//                                 className={`text-sm ${step === "success"
//                                     ? "text-gray-600"
//                                     : step === "address"
//                                         ? "text-gray-800 font-semibold"
//                                         : "text-gray-400"
//                                     }`}
//                             >
//                                 Payment
//                             </span>
//                         </div>
//                     </div>

//                     <div className="flex items-center gap-2 text-gray-500">
//                         <FaLock className="text-sm" />
//                         <span className="text-sm font-medium">100% SECURE</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Section */}
//             <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-[2fr_1px_1fr] gap-6 px-4">


//                 <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto relative">
//                     {step === "address" && (
//                         <button
//                             onClick={() => setStep("cart")} // go back to cart/details step
//                             className="absolute top-4 right-4 flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
//                         >
//                             <FaPen /> Edit
//                         </button>
//                     )}
//                     {(step === "cart" || step === "address") && (
//                         <form onSubmit={handleDetailsSubmit}>
//                             <h2 className="text-lg font-semibold text-gray-800 mb-1">Your Details</h2>
//                             <p className="text-sm text-gray-500 mb-4">
//                                 Required to Save Cart and Send Order Updates
//                             </p>

//                             {/* Email & Mobile */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-600 mb-1">
//                                         Email address <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="email"
//                                         value={formData.email}
//                                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                                         className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.email ? "border-red-500" : "focus:ring-blue-600"} outline-none`}
//                                     />
//                                     {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-600 mb-1">
//                                         Mobile number <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         value={formData.mobile}
//                                         onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//                                         className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.mobile ? "border-red-500" : "focus:ring-blue-600"} outline-none`}
//                                     />
//                                     {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
//                                 </div>
//                             </div>

//                             {/* WhatsApp (Optional) */}
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                                     WhatsApp Number (Optional)
//                                 </label>
//                                 <input
//                                     type="text"
//                                     value={formData.whatsapp}
//                                     onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
//                                     className="w-full border rounded-md px-3 py-2 focus:ring-2 outline-none focus:ring-blue-600"
//                                 />
//                             </div>

//                             {/* Delivery Type */}
//                             <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery Type</h3>
//                             <div className="space-y-3 mb-6">
//                                 <label className="flex items-start gap-3 cursor-pointer border rounded-md px-4 py-3 hover:border-blue-600 transition">
//                                     <input
//                                         type="radio"
//                                         name="delivery"
//                                         value="home"
//                                         checked={deliveryType === "home"}
//                                         onChange={() => setDeliveryType("home")}
//                                         className="mt-1 text-blue-600 focus:ring-blue-600"
//                                     />
//                                     <span className="text-gray-700">Home Delivery</span>
//                                 </label>

//                                 <label className="flex items-start gap-3 cursor-pointer border rounded-md px-4 py-3 hover:border-blue-600 transition">
//                                     <input
//                                         type="radio"
//                                         name="delivery"
//                                         value="store"
//                                         checked={deliveryType === "store"}
//                                         onChange={() => setDeliveryType("store")}
//                                         className="mt-1 text-blue-600 focus:ring-blue-600"
//                                     />
//                                     <span className="text-gray-700">
//                                         Pick up from store
//                                         <span className="text-gray-500 text-sm block">
//                                             Buy now, pick up from our store at your convenience.
//                                         </span>
//                                     </span>
//                                 </label>
//                             </div>

//                             {/* Recipient Name */}
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                                     Recipient's Name <span className="text-red-500">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     value={formData.name}
//                                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                                     className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.name ? "border-red-500" : "focus:ring-blue-600"
//                                         } outline-none`}
//                                 />
//                                 {errors.name && (
//                                     <p className="text-xs text-red-500 mt-1">{errors.name}</p>
//                                 )}
//                             </div>

//                             {/* Pincode + Recipient Mobile (Optional) */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-600 mb-1">
//                                         Recipient Mobile (Optional)
//                                     </label>
//                                     <input
//                                         type="text"
//                                         value={formData.recipientMobile}
//                                         onChange={(e) =>
//                                             setFormData({ ...formData, recipientMobile: e.target.value })
//                                         }
//                                         className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-600 mb-1">
//                                         Pincode <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         value={formData.pincode}
//                                         onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
//                                         className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.pincode ? "border-red-500" : "focus:ring-blue-600"
//                                             } outline-none`}
//                                     />
//                                     {errors.pincode && (
//                                         <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Address */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-600 mb-1">
//                                         Flat/House No. <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         value={formData.address}
//                                         onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//                                         className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.address ? "border-red-500" : "focus:ring-blue-600"
//                                             } outline-none`}
//                                     />
//                                     {errors.address && (
//                                         <p className="text-xs text-red-500 mt-1">{errors.address}</p>
//                                     )}
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-600 mb-1">
//                                         Street/Colony <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         value={formData.street}
//                                         onChange={(e) => setFormData({ ...formData, street: e.target.value })}
//                                         className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.street ? "border-red-500" : "focus:ring-blue-600"
//                                             } outline-none`}
//                                     />
//                                     {errors.street && (
//                                         <p className="text-xs text-red-500 mt-1">{errors.street}</p>
//                                     )}
//                                 </div>
//                             </div>

//                             {/* Town + Landmark (Optional) */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-600 mb-1">
//                                         Locality/Town <span className="text-red-500">*</span>
//                                     </label>
//                                     <input
//                                         type="text"
//                                         value={formData.town}
//                                         onChange={(e) => setFormData({ ...formData, town: e.target.value })}
//                                         className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.town ? "border-red-500" : "focus:ring-blue-600"
//                                             } outline-none`}
//                                     />
//                                     {errors.town && (
//                                         <p className="text-xs text-red-500 mt-1">{errors.town}</p>
//                                     )}
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-600 mb-1">
//                                         Landmark (Optional)
//                                     </label>
//                                     <input
//                                         type="text"
//                                         value={formData.landmark}
//                                         onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
//                                         className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
//                                     />
//                                 </div>
//                             </div>

//                             {/* GST + Billing Checkbox */}
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium text-gray-600 mb-1">
//                                     GST Number (Optional)
//                                 </label>
//                                 <input
//                                     type="text"
//                                     value={formData.gst}
//                                     onChange={(e) => setFormData({ ...formData, gst: e.target.value })}
//                                     className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
//                                 />
//                             </div>

//                             <div className="mb-4 flex items-center gap-2">
//                                 <input
//                                     type="checkbox"
//                                     checked={formData.billingSame}
//                                     onChange={(e) =>
//                                         setFormData({ ...formData, billingSame: e.target.checked })
//                                     }
//                                     className="w-4 h-4"
//                                 />
//                                 <label className="text-sm text-gray-600">Billing Address Same</label>
//                             </div>

//                             <button
//                                 type="submit"
//                                 className="w-full bg-[#4F1c51] hover:bg-blue-700 text-white py-3 rounded-md text-lg font-medium shadow-md cursor-pointer"
//                             >
//                                 {step === "cart" ? "Save & Continue" : "Confirm Order"}
//                             </button>
//                         </form>
//                     )}

//                     {/* Success Screen */}
//                     {step === "success" && (
//                         <div className="text-center py-10">
//                             <h2 className="text-2xl font-bold text-green-600 mb-4">
//                                 🎉 Payment Successful!
//                             </h2>
//                             <p className="text-gray-600">Your order has been placed successfully.</p>
//                         </div>
//                     )}
//                 </div>


//                 {/* Divider */}
//                 <div className="w-px bg-gray-300 hidden lg:block"></div>

//                 {/* Right - Order Summary */}
// <div className="rounded-lg p-6 h-fit sticky top-6 border shadow-sm">
//     <h3 className="text-lg font-semibold text-gray-800 mb-4">ORDER SUMMARY</h3>

//     <div className="flex justify-between text-sm text-gray-700 mb-2">
//         <span>Total ({products.length} Items)</span>
//         <span>₹51,655</span>
//     </div>
//     <div className="border-t border-dotted border-gray-400 my-4"></div>

//     <div className="flex justify-between font-medium text-gray-900 mb-2">
//         <span>Total Payable</span>
//         <span>₹51,655</span>
//     </div>

//     <p className="text-green-600 text-sm mb-6">You Save ₹2,076</p>

//     <div className="mb-6 flex items-center justify-between border rounded-md px-3 py-2 bg-gray-50">
//         <div className="flex items-center text-sm text-gray-700">
//             <FaGift className="text-gray-500 mr-2" />
//             <span>Gift Message (Optional)</span>
//         </div>
//         <button className="text-purple-700 font-medium text-sm hover:underline">Add</button>
//     </div>

//     <button
//         type="button" // important so it doesn't submit the form automatically
//         onClick={handlePayment} // call your payment function
//         className="w-full bg-[#4F1c51] hover:bg-[#421543] text-white py-3 rounded-md text-lg font-medium mb-6 shadow-md cursor-pointer"
//     >
//         Place Order
//     </button>



//     <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
//         <span className="text-gray-500">⚙</span> Apply Voucher / Gift Card
//     </p>

//     <p className="text-sm text-gray-600">
//         Any Questions?
//         <br />
//         Please call us at{" "}
//         <a href="tel:18004190066" className="text-purple-700 font-medium">
//             18004190066
//         </a>{" "}
//         or{" "}
//         <a href="#" className="text-purple-700 font-medium hover:underline">
//             Chat with us
//         </a>
//     </p>
// </div>
//             </div>

//         </div>
//     );
// };

// export default OrderConfirm;


import React, { useState } from "react";
import { FaCheck, FaGift, FaLock, FaPen } from "react-icons/fa";
import toast from "react-hot-toast";

const OrderConfirm = () => {
    const products = [{ id: 1 }, { id: 2 }];

    // ✅ Track Step
    const [step, setStep] = useState("cart"); // cart → address → payment → success
    const [deliveryType, setDeliveryType] = useState("home");

    // ✅ Track Order button enabled/disabled
    const [orderEnabled, setOrderEnabled] = useState(false);

    // ✅ Form Data
    const [formData, setFormData] = useState({
        email: "",
        mobile: "",
        name: "",
        pincode: "",
        address: "",
        street: "",
        town: "",
        recipientMobile: "", // optional
        landmark: "", // optional
        gst: "", // optional
        whatsapp: "", // optional
        billingSame: true, // checkbox
    });

    const [errors, setErrors] = useState({});

    // ✅ Validate required fields only
    const validate = () => {
        let newErrors = {};
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.mobile) newErrors.mobile = "Mobile number is required";
        if (!formData.name) newErrors.name = "Recipient's Name is required";
        if (!formData.pincode) newErrors.pincode = "Pincode is required";
        if (!formData.address) newErrors.address = "Flat/House No. is required";
        if (!formData.street) newErrors.street = "Street/Colony is required";
        if (!formData.town) newErrors.town = "Locality/Town is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ✅ Handle Your Details form submit
    const handleDetailsSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            toast.success("Details submitted");
            setStep("address");
            setOrderEnabled(true); // enable order button after details saved
        } else {
            toast.error("Please fill all required fields");
        }
    };

    // ✅ Handle Payment
    const handlePayment = () => {
        if (!orderEnabled) {
            toast.error("Please fill your details first");
            return;
        }
        toast.success("Payment Successful");
        setStep("success");
    };

    return (
        <div className="w-full bg-gray-50 min-h-screen">
            {/* Stepper */}
            <div className="w-full border-t border-[#4F1c51] bg-white">
                <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-semibold text-gray-800">BLUESTONE</span>
                    </div>

                    {/* ✅ Stepper */}
                    <div className="flex items-center gap-6">
                        {/* Cart */}
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs">
                                <FaCheck />
                            </div>
                            <span className="text-gray-600 text-sm">Cart</span>
                        </div>

                        <div className="w-16 h-[2px] bg-gray-300"></div>

                        {/* Address */}
                        <div className="flex items-center gap-2">
                            <div
                                className={`flex items-center justify-center w-6 h-6 rounded-full text-xs 
                ${step === "address" || step === "success"
                                        ? "bg-green-500 text-white"
                                        : "border border-blue-500 text-blue-500"
                                    }`}
                            >
                                {step === "address" || step === "success" ? <FaCheck /> : ""}
                            </div>
                            <span
                                className={`text-sm ${step === "cart" ? "text-gray-800 font-semibold" : "text-gray-600"
                                    }`}
                            >
                                Address
                            </span>
                        </div>

                        <div className="w-16 h-[2px] bg-gray-300"></div>

                        {/* Payment */}
                        <div className="flex items-center gap-2">
                            <div
                                className={`flex items-center justify-center w-6 h-6 rounded-full text-xs 
                ${step === "success"
                                        ? "bg-green-500 text-white"
                                        : step === "address"
                                            ? "border border-blue-500 text-blue-500"
                                            : "border border-gray-400 text-gray-400"
                                    }`}
                            >
                                {step === "success" ? <FaCheck /> : ""}
                            </div>
                            <span
                                className={`text-sm ${step === "success"
                                    ? "text-gray-600"
                                    : step === "address"
                                        ? "text-gray-800 font-semibold"
                                        : "text-gray-400"
                                    }`}
                            >
                                Payment
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                        <FaLock className="text-sm" />
                        <span className="text-sm font-medium">100% SECURE</span>
                    </div>
                </div>
            </div>

            {/* Main Section */}
            <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-[2fr_1px_1fr] gap-6 px-4">
                <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl mx-auto relative">
                    {step === "address" && (
                        <button
                            onClick={() => setStep("cart")} // go back to cart/details step
                            className="absolute top-4 right-4 flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium"
                        >
                            <FaPen /> Edit
                        </button>
                    )}
                    {(step === "cart" || step === "address") && (
                        <form onSubmit={handleDetailsSubmit}>
                            <h2 className="text-lg font-semibold text-gray-800 mb-1">Your Details</h2>
                            <p className="text-sm text-gray-500 mb-4">
                                Required to Save Cart and Send Order Updates
                            </p>

                            {/* Email */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Email address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.email ? "border-red-500" : "focus:ring-blue-600"} outline-none`}
                                />
                                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                            </div>

                            {/* Mobile */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Mobile number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.mobile}
                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                    className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.mobile ? "border-red-500" : "focus:ring-blue-600"} outline-none`}
                                />
                                {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
                            </div>


                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    WhatsApp Number (Optional)
                                </label>
                                <input
                                    type="text"
                                    value={formData.whatsapp}
                                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                    className="w-full border rounded-md px-3 py-2 focus:ring-2 outline-none focus:ring-blue-600"
                                />
                            </div>

                            {/* Delivery Type */}
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery Type</h3>
                            <div className="space-y-3 mb-6">
                                <label className="flex items-start gap-3 cursor-pointer border rounded-md px-4 py-3 hover:border-blue-600 transition">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        value="home"
                                        checked={deliveryType === "home"}
                                        onChange={() => setDeliveryType("home")}
                                        className="mt-1 text-blue-600 focus:ring-blue-600"
                                    />
                                    <span className="text-gray-700">Home Delivery</span>
                                </label>

                                <label className="flex items-start gap-3 cursor-pointer border rounded-md px-4 py-3 hover:border-blue-600 transition">
                                    <input
                                        type="radio"
                                        name="delivery"
                                        value="store"
                                        checked={deliveryType === "store"}
                                        onChange={() => setDeliveryType("store")}
                                        className="mt-1 text-blue-600 focus:ring-blue-600"
                                    />
                                    <span className="text-gray-700">
                                        Pick up from store
                                        <span className="text-gray-500 text-sm block">
                                            Buy now, pick up from our store at your convenience.
                                        </span>
                                    </span>
                                </label>
                            </div>

                            {/* Recipient Name */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Recipient's Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.name ? "border-red-500" : "focus:ring-blue-600"
                                        } outline-none`}
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                                )}
                            </div>

                            {/* Pincode + Recipient Mobile (Optional) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">
                                        Recipient Mobile (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.recipientMobile}
                                        onChange={(e) =>
                                            setFormData({ ...formData, recipientMobile: e.target.value })
                                        }
                                        className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">
                                        Pincode <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.pincode}
                                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                                        className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.pincode ? "border-red-500" : "focus:ring-blue-600"
                                            } outline-none`}
                                    />
                                    {errors.pincode && (
                                        <p className="text-xs text-red-500 mt-1">{errors.pincode}</p>
                                    )}
                                </div>
                            </div>

                            {/* Address */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">
                                        Flat/House No. <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.address ? "border-red-500" : "focus:ring-blue-600"
                                            } outline-none`}
                                    />
                                    {errors.address && (
                                        <p className="text-xs text-red-500 mt-1">{errors.address}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">
                                        Street/Colony <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.street}
                                        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                                        className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.street ? "border-red-500" : "focus:ring-blue-600"
                                            } outline-none`}
                                    />
                                    {errors.street && (
                                        <p className="text-xs text-red-500 mt-1">{errors.street}</p>
                                    )}
                                </div>
                            </div>

                            {/* Town + Landmark (Optional) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">
                                        Locality/Town <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.town}
                                        onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                                        className={`w-full border rounded-md px-3 py-2 focus:ring-2 ${errors.town ? "border-red-500" : "focus:ring-blue-600"
                                            } outline-none`}
                                    />
                                    {errors.town && (
                                        <p className="text-xs text-red-500 mt-1">{errors.town}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">
                                        Landmark (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.landmark}
                                        onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                                        className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                                    />
                                </div>
                            </div>

                            {/* GST + Billing Checkbox */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    GST Number (Optional)
                                </label>
                                <input
                                    type="text"
                                    value={formData.gst}
                                    onChange={(e) => setFormData({ ...formData, gst: e.target.value })}
                                    className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600"
                                />
                            </div>

                            <div className="mb-4 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={formData.billingSame}
                                    onChange={(e) =>
                                        setFormData({ ...formData, billingSame: e.target.checked })
                                    }
                                    className="w-4 h-4"
                                />
                                <label className="text-sm text-gray-600">Billing Address Same</label>
                            </div>



                            <button
                                type="submit"
                                className="w-full bg-[#4F1c51] hover:bg-blue-700 text-white py-3 rounded-md text-lg font-medium shadow-md cursor-pointer"
                            >
                                {step === "cart" ? "Save & Continue" : "Confirm Order"}
                            </button>
                        </form>
                    )}

                    {/* Success Screen */}
                    {step === "success" && (
                        <div className="text-center py-10">
                            <h2 className="text-2xl font-bold text-green-600 mb-4">
                                🎉 Payment Successful!
                            </h2>
                            <p className="text-gray-600">Your order has been placed successfully.</p>
                        </div>
                    )}
                </div>

                {/* Divider */}
                <div className="w-px bg-gray-300 hidden lg:block"></div>

                {/* Right - Order Summary */}
                <div className="rounded-lg p-6 h-fit sticky top-6 border shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">ORDER SUMMARY</h3>

                    <div className="flex justify-between text-sm text-gray-700 mb-2">
                        <span>Total ({products.length} Items)</span>
                        <span>₹51,655</span>
                    </div>
                    <div className="border-t border-dotted border-gray-400 my-4"></div>

                    <div className="flex justify-between font-medium text-gray-900 mb-2">
                        <span>Total Payable</span>
                        <span>₹51,655</span>
                    </div>
                    <div className="border-t border-dotted border-gray-400 my-4"></div>


                    <p className="text-green-600 text-sm mb-6">You Save ₹2,076</p>

                     <div className="mb-6 flex items-center justify-between border rounded-md px-3 py-2 bg-gray-50">
                        <div className="flex items-center text-sm text-gray-700">
                            <FaGift className="text-gray-500 mr-2" />
                            <span>Gift Message (Optional)</span>
                        </div>
                        <button className="text-purple-700 font-medium text-sm hover:underline">Add</button>
                    </div>

                    <button
                        type="button"
                        onClick={handlePayment}
                        disabled={!orderEnabled} // disable until left side form is submitted
                        className={`w-full py-3 rounded-md text-lg font-medium mb-6 shadow-md cursor-pointer 
              ${orderEnabled
                                ? "bg-[#4F1c51] hover:bg-[#421543] text-white"
                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                    >
                        Process To Pay
                    </button>

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
    );
};

export default OrderConfirm;


               

                   

    


