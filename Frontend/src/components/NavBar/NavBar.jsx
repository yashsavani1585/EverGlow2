// import React, { useState, useRef, useEffect } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Close dropdown on menu item click
//   const handleMenuClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="max-w-6xl mx-auto flex justify-center space-x-12 mt-0 text-[#4f1c51] font-medium h-16 items-center relative">
//       {/* Shop by Category with Dropdown */}
//       <div className="relative" ref={dropdownRef}>
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="flex items-center space-x-1 hover:underline focus:outline-none"
//         >
//           <span>Shop by Category</span>
//           {isOpen ? (
//             <FaChevronUp className="text-xs" />
//           ) : (
//             <FaChevronDown className="text-xs" />
//           )}
//         </button>

//         {/* Dropdown */}
//         {isOpen && (
//           <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md z-20">
//             <ul className="flex flex-col text-[#4f1c51] font-semibold">
//               <li
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={handleMenuClick}
//               >
//                 <Link to="/rings">RINGS</Link>
//               </li>
//               <li
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={handleMenuClick}
//               >
//                 <Link to="/earrings">EARRINGS</Link>
//               </li>
//               <li
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={handleMenuClick}
//               >
//                 <Link to="/bracelet">BRACELET</Link>
//               </li>
//               <li
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={handleMenuClick}
//               >
//                 <Link to="/necklace">NECKLACE</Link>
//               </li>
//               <li
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 onClick={handleMenuClick}
//               >
//                 <Link to="/pendantset">PENDANT SET</Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>

//       {/* Other Menu Items */}
//       <Link to="/giftstore" className="hover:underline">
//         Gift Store
//       </Link>
//       <Link to="/personalized" className="hover:underline">
//         Personalized Jewelry
//       </Link>
//       <Link to="/collections" className="hover:underline">
//         Latest Collections
//       </Link>
//     </nav>
//   );
// };

// export default NavBar;


import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = ({ onLinkClick, mobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full text-[#4f1c51] font-medium">
      {/* Desktop Navbar */}
      {!mobile && (
        <div className="flex justify-center items-center space-x-12 p-4 md:px-10">
          {/* Home Link */}
          <Link
            to="/"
            className="hover:text-[#a02ca5] transition-colors"
            onClick={onLinkClick}
          >
            Home
          </Link>

          {/* Shop by Category Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-1 hover:text-[#a02ca5] transition-colors"
            >
              <span>Shop by Category</span>
              {isOpen ? (
                <FaChevronUp className="text-xs" />
              ) : (
                <FaChevronDown className="text-xs" />
              )}
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md z-20 animate-fadeIn">
                <ul className="flex flex-col text-[#4f1c51] font-semibold">
                  {[
                    { name: "RINGS", path: "/rings" },
                    { name: "EARRINGS", path: "/earrings" },
                    { name: "BRACELET", path: "/bracelet" },
                    { name: "NECKLACE", path: "/necklace" },
                    { name: "PENDANT SET", path: "/pendantset" },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 hover:bg-gray-100"
                    >
                      <Link
                        to={item.path}
                        onClick={() => {
                          onLinkClick?.();
                          setIsOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Static Links */}
          <Link
            to="/giftstore"
            className="hover:text-[#a02ca5] transition-colors"
            onClick={onLinkClick}
          >
            Gift Store
          </Link>
          <Link
            to="/personalized"
            className="hover:text-[#a02ca5] transition-colors"
            onClick={onLinkClick}
          >
            Personalized Jewelry
          </Link>
          <Link
            to="/collections"
            className="hover:text-[#a02ca5] transition-colors"
            onClick={onLinkClick}
          >
            Latest Collections
          </Link>
        </div>
      )}

      {/* Mobile Drawer Navbar */}
      {mobile && (
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onLinkClick}
            className="absolute top-3 right-3 text-gray-600 hover:text-black transition-colors z-30"
          >
            <FaTimes size={22} />
          </button>

          {/* Links */}
          <ul className="pt-12 space-y-5 font-semibold px-4">
            {/* Home Link */}
            <li>
              <Link to="/" onClick={onLinkClick} className="hover:text-[#a02ca5]">
                Home
              </Link>
            </li>

            {/* Shop by Category */}
            <li>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full hover:text-[#a02ca5] transition-colors"
              >
                <span>Shop by Category</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isOpen && (
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-700 animate-fadeIn">
                  {[
                    { name: "RINGS", path: "/rings" },
                    { name: "EARRINGS", path: "/earrings" },
                    { name: "BRACELET", path: "/bracelet" },
                    { name: "NECKLACE", path: "/necklace" },
                    { name: "PENDANT SET", path: "/pendantset" },
                  ].map((item, i) => (
                    <li key={i}>
                      <Link to={item.path} onClick={onLinkClick}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Other Links */}
            <li>
              <Link to="/giftstore" onClick={onLinkClick}>
                Gift Store
              </Link>
            </li>
            <li>
              <Link to="/personalized" onClick={onLinkClick}>
                Personalized Jewelry
              </Link>
            </li>
            <li>
              <Link to="/collections" onClick={onLinkClick}>
                Latest Collections
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
