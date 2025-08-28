

import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import product1 from "../../assets/productImg.png";
import PromotionalBanner2 from "../../assets/ProductBannerAds2.png";
import PromotionalBanner3 from "../../assets/ProductBaneerAds3.png";
import PromotionalBanner1 from "../../assets/productAds1.png";


const EARRINGSProductionSection = () => {
  // Dummy product data
  const products = [
    { id: 1, title: "Diamond Ring", price: "₹2599", image: product1, discount: "10%" },
    { id: 2, title: "Gold Ring", price: "₹1999", image: product1, discount: "10%" },
    { id: 3, title: "Silver Ring", price: "₹999", image: product1, discount: "10%" },
    { id: 4, title: "Emerald Ring", price: "₹2999", image: product1, discount: "10%" },
    { id: 5, title: "Ruby Ring", price: "₹2299", image: product1, discount: "10%" },
    { id: 6, title: "Platinum Ring", price: "₹4999", image: product1, discount: "10%" },
    { id: 7, title: "Sapphire Ring", price: "₹3499", image: product1, discount: "10%" },
    { id: 8, title: "Amethyst Ring", price: "₹1799", image: product1, discount: "10%" },
    { id: 9, title: "Platinum Ring", price: "₹4999", image: product1, discount: "10%" },
    { id: 10, title: "Sapphire Ring", price: "₹3499", image: product1, discount: "10%" },
    { id: 11, title: "Amethyst Ring", price: "₹1799", image: product1, discount: "10%" },
    { id: 12, title: "Platinum Ring", price: "₹4999", image: product1, discount: "10%" },
    { id: 13, title: "Sapphire Ring", price: "₹3499", image: product1, discount: "10%" },
    { id: 14, title: "Amethyst Ring", price: "₹1799", image: product1, discount: "10%" },
    { id: 15, title: "Platinum Ring", price: "₹4999", image: product1, discount: "10%" },
    { id: 16, title: "Sapphire Ring", price: "₹3499", image: product1, discount: "10%" },
    { id: 17, title: "Amethyst Ring", price: "₹1799", image: product1, discount: "10%" },
    { id: 18, title: "Platinum Ring", price: "₹4999", image: product1, discount: "10%" },
    { id: 19, title: "Sapphire Ring", price: "₹3499", image: product1, discount: "10%" },
    { id: 20, title: "Amethyst Ring", price: "₹1799", image: product1, discount: "10%" },
    { id: 21, title: "Platinum Ring", price: "₹4999", image: product1, discount: "10%" },
  ];

  return (
     <div className="container mx-auto px-4 py-10 space-y-10">
      
      {/* First 3 Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Next 3 Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(3, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Banner + 1 Product */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Left Banner */}
        <div className="md:col-span-2 rounded-2xl overflow-hidden">
          <img
            src={PromotionalBanner2}
            alt="Promotional Banner"
            className="w-full h-[250px] sm:h-[350px] md:h-[420px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Single Product */}
        <div>
          <ProductCard product={products[0]} imageH="h-[180px] md:h-[250px]" />
        </div>
      </section>

      {/* 3 More Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(6, 9).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* 2 Products + Big Ad */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch px-2 md:px-12 lg:px-20 py-12">
        {/* Left Side: 2 Products */}
        <div className="flex flex-col gap-6">
          <ProductCard product={products[0]} />
          <ProductCard product={products[1]} />
        </div>

        {/* Right Side: Big Ad */}
        <div className="md:col-span-2 relative rounded-2xl overflow-hidden">
          <img
            src={PromotionalBanner3}
            alt="Ad Banner"
            className="w-full h-[250px] sm:h-[350px] md:h-[865px] object-cover"
          />
        </div>
      </div>

      {/* More Product Grids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(9, 12).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Banner + 1 Product */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Left Banner */}
        <div className="md:col-span-2 rounded-2xl overflow-hidden">
          <img
            src={PromotionalBanner1}
            alt="Promotional Banner"
            className="w-full h-[250px] sm:h-[350px] md:h-[420px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Single Product */}
        <div>
          <ProductCard product={products[0]} imageH="h-[180px] md:h-[250px]" />
        </div>
      </section>

      {/* Remaining Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(12, 15).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(15, 18).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.slice(18, 21).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default EARRINGSProductionSection;
