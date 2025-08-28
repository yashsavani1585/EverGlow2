import React from "react";
import mainImage from "../../assets/EverGlowOffer1.png";
import elegantRing from "../../assets/EverGlowOffer2.png"; 
import diamondRing from "../../assets/EverGlowOffer3.png";

const LatestOffers = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4f1c51]">
          LATEST OFFERS
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Big Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src={mainImage}
            alt="New Jewelry Collection"
            className="w-full h-[500px] object-cover rounded-lg transition-transform duration-500 hover:scale-105 cursor-pointer"
          />
        </div>

        {/* Right Two Small Images */}
        <div className="flex flex-col gap-8">
          
          {/* Top */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={elegantRing}
              alt="Elegant Jewellery"
              className="w-full h-[240px] object-cover rounded-lg transition-transform duration-500 hover:scale-105 cursor-pointer"
            />
          </div>

          {/* Bottom */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={diamondRing}
              alt="Diamond Rings"
              className="w-full h-[240px] object-cover rounded-lg transition-transform duration-500 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestOffers;
