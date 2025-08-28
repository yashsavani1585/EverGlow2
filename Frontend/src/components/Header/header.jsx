// import React, { useState, useRef, useEffect } from "react";
// import {
//   FaHeart,
//   FaShoppingCart,
//   FaSearch,
//   FaCamera,
//   FaUser,
// } from "react-icons/fa";
// import Logo from "../Logo/Logo";
// import NavBar from "../NavBar/NavBar";
// import { Link } from "react-router-dom";

// import ProfileImg from "../../assets/profile.png";
// import OrdersImg from "../../assets/orders.png";
// import TermsImg from "../../assets/terms.png";
// import PrivacyImg from "../../assets/privacy.png";
// import ContactImg from "../../assets/contact.png";
// import LogoutImg from "../../assets/logout.png";

// const Header = () => {
//   const [accountOpen, setAccountOpen] = useState(false);
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const accountRef = useRef(null);

//   useEffect(() => {
//     const handler = (e) => {
//       if (accountRef.current && !accountRef.current.contains(e.target)) {
//         setAccountOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const handleLinkClick = () => {
//     setAccountOpen(false);
//   };

//   return (
//     <header className="w-full bg-white border-b border-gray-200 relative">
//       {/* 🔹 Top Row */}
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-2">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <Link to="/">
//             <Logo />
//           </Link>
//         </div>

//         {/* Search Bar (Desktop Only) */}
//         <div className="hidden md:flex flex-1 justify-center px-4">
//           <div className="flex items-center w-full max-w-xl border border-[#4f1c51] rounded-lg h-12 px-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="flex-grow outline-none text-[#4f1c51] placeholder-[#4f1c51] text-base"
//             />
//             <button className="text-[#4f1c51]">
//               <FaCamera />
//             </button>
//             <button className="ml-2 text-[#4f1c51]">
//               <FaSearch />
//             </button>
//           </div>
//         </div>

//         {/* Action Icons */}
//         <div className="flex items-center space-x-5 text-[#4f1c51]">
//           {/* Mobile Search Icon */}
//           <button
//             onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
//             className="md:hidden text-xl"
//           >
//             <FaSearch />
//           </button>

//           <Link to="/Wishlist">
//             <div className="flex flex-col items-center cursor-pointer">
//               <FaHeart className="text-xl" />
//               <span className="hidden sm:block text-xs">Wishlist</span>
//             </div>
//           </Link>
//           <Link to="/cart">
//             <div className="flex flex-col items-center cursor-pointer">
//               <FaShoppingCart className="text-xl" />
//               <span className="hidden sm:block text-xs">Cart</span>
//             </div>
//           </Link>

//           {/* Account Dropdown */}
//           <div
//             className="flex flex-col items-center cursor-pointer relative"
//             ref={accountRef}
//           >
//             <div
//               onClick={() => setAccountOpen(!accountOpen)}
//               className="flex flex-col items-center"
//             >
//               <FaUser className="text-xl" />
//               <span className="hidden sm:block text-xs">Account</span>
//             </div>

//             {accountOpen && (
//               <div className="absolute top-12 right-0 w-64 bg-white border shadow-lg rounded-md p-4 z-20">
//                 <p className="font-medium text-gray-700 mb-3">
//                   Welcome To Everglow Jewels !
//                 </p>
//                 <ul className="space-y-3 text-gray-700">
//                   <Link to="/profile" onClick={handleLinkClick}>
//                     <li className="flex items-center gap-2 hover:text-[#4f1c51]">
//                       <img
//                         src={ProfileImg}
//                         alt="Profile"
//                         className="w-5 h-5 m-2"
//                       />
//                       Your Profile
//                     </li>
//                   </Link>
//                   <Link to="/MyOrder" onClick={handleLinkClick}>
//                     <li className="flex items-center gap-2 hover:text-[#4f1c51]">
//                       <img
//                         src={OrdersImg}
//                         alt="Orders"
//                         className="w-5 h-5 m-2"
//                       />
//                       My Orders
//                     </li>
//                   </Link>
//                   <Link to="/terms" onClick={handleLinkClick}>
//                     <li className="flex items-center gap-2 hover:text-[#4f1c51]">
//                       <img
//                         src={TermsImg}
//                         alt="Terms"
//                         className="w-5 h-5 m-2"
//                       />
//                       Terms & Conditions
//                     </li>
//                   </Link>
//                   <Link to="/privacy" onClick={handleLinkClick}>
//                     <li className="flex items-center gap-2 hover:text-[#4f1c51]">
//                       <img
//                         src={PrivacyImg}
//                         alt="Privacy"
//                         className="w-5 h-5 m-2"
//                       />
//                       Privacy Policy
//                     </li>
//                   </Link>
//                   <Link to="/contact" onClick={handleLinkClick}>
//                     <li className="flex items-center gap-2 hover:text-[#4f1c51]">
//                       <img
//                         src={ContactImg}
//                         alt="Contact"
//                         className="w-5 h-5 m-2"
//                       />
//                       Contact Us
//                     </li>
//                   </Link>
//                   <Link to="/logout" onClick={handleLinkClick}>
//                     <li className="flex items-center gap-2 hover:text-red-600">
//                       <img
//                         src={LogoutImg}
//                         alt="Logout"
//                         className="w-5 h-5 m-2"
//                       />
//                       Logout
//                     </li>
//                   </Link>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Search Box (Open When Clicked) */}
//       {mobileSearchOpen && (
//         <div className="px-3 pb-3 md:hidden">
//           <div className="flex items-center w-full border border-[#4f1c51] rounded-lg h-12 px-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="flex-grow outline-none text-[#4f1c51] placeholder-[#4f1c51] text-base"
//             />
//             <button className="text-[#4f1c51]">
//               <FaCamera />
//             </button>
//             <button className="ml-2 text-[#4f1c51]">
//               <FaSearch />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Navbar (unchanged) */}
//       <div className="border-t border-gray-200">
//         <NavBar />
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useRef, useEffect } from "react";
// import {
//   FaHeart,
//   FaShoppingCart,
//   FaSearch,
//   FaCamera,
//   FaUser,
//   FaBars,
// } from "react-icons/fa";
// import { Drawer } from "@mui/material";
// import Logo from "../Logo/Logo";
// import NavBar from "../NavBar/NavBar";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [accountOpen, setAccountOpen] = useState(false);
//   const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const accountRef = useRef(null);

//   useEffect(() => {
//     const handler = (e) => {
//       if (accountRef.current && !accountRef.current.contains(e.target)) {
//         setAccountOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   const handleLinkClick = () => {
//     setDrawerOpen(false);
//     setAccountOpen(false);
//   };

//   return (
//     <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-2">
//         {/* Left Side: Mobile Menu + Logo */}
//         <div className="flex items-center space-x-3">
//           <button
//             className="md:hidden text-2xl text-[#4f1c51]"
//             onClick={() => setDrawerOpen(true)}
//           >
//             <FaBars />
//           </button>

//           <Link to="/">
//             <Logo />
//           </Link>
//         </div>

//         {/* Search (Desktop Only) */}
//         <div className="hidden md:flex flex-1 justify-center px-4">
//           <div className="flex items-center w-full max-w-xl border border-[#4f1c51] rounded-lg h-12 px-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="flex-grow outline-none text-[#4f1c51] placeholder-[#4f1c51] text-base"
//             />
//             <button className="text-[#4f1c51] hover:text-[#a02ca5] transition-colors">
//               <FaCamera />
//             </button>
//             <button className="ml-2 text-[#4f1c51] hover:text-[#a02ca5] transition-colors">
//               <FaSearch />
//             </button>
//           </div>
//         </div>

//         {/* Right Side Icons */}
//         <div className="flex items-center space-x-5 text-[#4f1c51]">
//           {/* Mobile search toggle */}
//           <button
//             onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
//             className="md:hidden text-xl"
//           >
//             <FaSearch />
//           </button>

//           <Link to="/wishlist">
//             <div className="flex flex-col items-center cursor-pointer hover:text-[#a02ca5] transition-colors">
//               <FaHeart className="text-xl" />
//               <span className="hidden sm:block text-xs">Wishlist</span>
//             </div>
//           </Link>
//           <Link to="/cart">
//             <div className="flex flex-col items-center cursor-pointer hover:text-[#a02ca5] transition-colors">
//               <FaShoppingCart className="text-xl" />
//               <span className="hidden sm:block text-xs">Cart</span>
//             </div>
//           </Link>

//           {/* Account Dropdown */}
//           <div
//             className="flex flex-col items-center cursor-pointer relative"
//             ref={accountRef}
//           >
//             <div
//               onClick={() => setAccountOpen(!accountOpen)}
//               className="flex flex-col items-center hover:text-[#a02ca5] transition-colors"
//             >
//               <FaUser className="text-xl" />
//               <span className="hidden sm:block text-xs">Account</span>
//             </div>
//             {accountOpen && (
//               <div className="absolute top-12 right-0 w-64 bg-white border shadow-lg rounded-md p-4 z-20 animate-fadeIn">
//                 <p className="font-medium text-gray-700 mb-3">
//                   Welcome To Everglow Jewels!
//                 </p>
//                 <ul className="space-y-3 text-gray-700">
//                   <Link to="/profile" onClick={handleLinkClick}><li className="hover:text-[#4f1c51] mb-2">Your Profile</li></Link>
//                   <Link to="/myorder" onClick={handleLinkClick}><li className="hover:text-[#4f1c51] mb-2">My Orders</li></Link>
//                   <Link to="/terms" onClick={handleLinkClick}><li className="hover:text-[#4f1c51] mb-2">Terms & Conditions</li></Link>
//                   <Link to="/privacy" onClick={handleLinkClick}><li className="hover:text-[#4f1c51] mb-2">Privacy Policy</li></Link>
//                   <Link to="/contact" onClick={handleLinkClick}><li className="hover:text-[#4f1c51] mb-2">Contact Us</li></Link>
//                   <Link to="/logout" onClick={handleLinkClick}><li className="hover:text-red-600 mb-2">Logout</li></Link>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile Search Box */}
//       {mobileSearchOpen && (
//         <div className="px-3 pb-3 md:hidden animate-fadeIn">
//           <div className="flex items-center w-full border border-[#4f1c51] rounded-lg h-12 px-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="flex-grow outline-none text-[#4f1c51] placeholder-[#4f1c51] text-base"
//             />
//             <button className="text-[#4f1c51]"><FaCamera /></button>
//             <button className="ml-2 text-[#4f1c51]"><FaSearch /></button>
//           </div>
//         </div>
//       )}

//       {/* Desktop Navbar */}
//       <div className="border-t border-gray-200 hidden md:block">
//         <NavBar onLinkClick={handleLinkClick} />
//       </div>

//       {/* Mobile Drawer */}
//       <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         <div className="w-64 h-full p-5 bg-white">
//           <NavBar onLinkClick={handleLinkClick} mobile />
//         </div>
//       </Drawer>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useRef, useEffect } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaCamera,
  FaUser,
  FaBars,
} from "react-icons/fa";
import { Drawer } from "@mui/material";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // ✅ auth state
  const accountRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLinkClick = () => {
    setDrawerOpen(false);
    setAccountOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-2">
        {/* Left Side: Mobile Menu + Logo */}
        <div className="flex items-center space-x-3">
          <button
            className="md:hidden text-2xl text-[#4f1c51]"
            onClick={() => setDrawerOpen(true)}
          >
            <FaBars />
          </button>

          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Search (Desktop Only) */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <div className="flex items-center w-full max-w-xl border border-[#4f1c51] rounded-lg h-12 px-4">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow outline-none text-[#4f1c51] placeholder-[#4f1c51] text-base"
            />
            <button className="text-[#4f1c51] hover:text-[#a02ca5] transition-colors">
              <FaCamera />
            </button>
            <button className="ml-2 text-[#4f1c51] hover:text-[#a02ca5] transition-colors">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-5 text-[#4f1c51]">
          {/* Mobile search toggle */}
          <button
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            className="md:hidden text-xl"
          >
            <FaSearch />
          </button>

          <Link to="/wishlist">
            <div className="flex flex-col items-center cursor-pointer hover:text-[#a02ca5] transition-colors">
              <FaHeart className="text-xl" />
              <span className="hidden sm:block text-xs">Wishlist</span>
            </div>
          </Link>
          <Link to="/cart">
            <div className="flex flex-col items-center cursor-pointer hover:text-[#a02ca5] transition-colors">
              <FaShoppingCart className="text-xl" />
              <span className="hidden sm:block text-xs">Cart</span>
            </div>
          </Link>

          {/* Account Dropdown */}
          <div
            className="flex flex-col items-center cursor-pointer relative"
            ref={accountRef}
          >
            <div
              onClick={() => {
                if (!isAuthenticated) {
                  navigate("/auth"); // 🚀 agar login nahi hai → auth page
                } else {
                  setAccountOpen(!accountOpen);
                }
              }}
              className="flex flex-col items-center hover:text-[#a02ca5] transition-colors"
            >
              <FaUser className="text-xl" />
              <span className="hidden sm:block text-xs">Account</span>
            </div>

            {/* Dropdown only if logged in */}
            {isAuthenticated && accountOpen && (
              <div className="absolute top-12 right-0 w-64 bg-white border shadow-lg rounded-md p-4 z-20 animate-fadeIn">
                <p className="font-medium text-gray-700 mb-3">
                  Welcome To Everglow Jewels!
                </p>
                <ul className="space-y-3 text-gray-700">
                  <Link to="/profile" onClick={handleLinkClick}>
                    <li className="hover:text-[#4f1c51] mb-2">Your Profile</li>
                  </Link>
                  <Link to="/myorder" onClick={handleLinkClick}>
                    <li className="hover:text-[#4f1c51] mb-2">My Orders</li>
                  </Link>
                  <Link to="/terms" onClick={handleLinkClick}>
                    <li className="hover:text-[#4f1c51] mb-2">
                      Terms & Conditions
                    </li>
                  </Link>
                  <Link to="/privacy" onClick={handleLinkClick}>
                    <li className="hover:text-[#4f1c51] mb-2">Privacy Policy</li>
                  </Link>
                  <Link to="/contact" onClick={handleLinkClick}>
                    <li className="hover:text-[#4f1c51] mb-2">Contact Us</li>
                  </Link>
                  <li
                    onClick={() => {
                      setIsAuthenticated(false); // logout
                      handleLinkClick();
                    }}
                    className="hover:text-red-600 mb-2 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Box */}
      {mobileSearchOpen && (
        <div className="px-3 pb-3 md:hidden animate-fadeIn">
          <div className="flex items-center w-full border border-[#4f1c51] rounded-lg h-12 px-4">
            <input
              type="text"
              placeholder="Search..."
              className="flex-grow outline-none text-[#4f1c51] placeholder-[#4f1c51] text-base"
            />
            <button className="text-[#4f1c51]">
              <FaCamera />
            </button>
            <button className="ml-2 text-[#4f1c51]">
              <FaSearch />
            </button>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="border-t border-gray-200 hidden md:block">
        <NavBar onLinkClick={handleLinkClick} />
      </div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className="w-64 h-full p-5 bg-white">
          <NavBar onLinkClick={handleLinkClick} mobile />
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
