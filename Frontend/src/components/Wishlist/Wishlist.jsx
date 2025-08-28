import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import product1 from "../../assets/ringImg.png";
import emptyImg from "../../assets/Empty.png"; // diamonds background image

const Wishlist = () => {
  // 👉 Wishlist ko state banaya
  const [products, setProducts] = useState([
    // agar empty screen chahiye to empty rakho []
    { id: 1, name: "Silver Ring", price: 299, oldPrice: 399, image: product1 },
    { id: 2, name: "Gold Necklace", price: 499, oldPrice: 699, image: product1 },
    { id: 3, name: "Diamond Earrings", price: 999, oldPrice: 1299, image: product1 },
    { id: 4, name: "Platinum Bracelet", price: 799, oldPrice: 999, image: product1 },
    { id: 5, name: "Ruby Pendant", price: 599, oldPrice: 799, image: product1 },
    { id: 6, name: "Emerald Ring", price: 899, oldPrice: 1199, image: product1 },
  ]);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Agar products empty hain */}
      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          {/* Background style ke liye image */}
          <img
            src={emptyImg}
            alt="Empty Wishlist"
            className="w-full max-w-xl object-contain"
          />

          {/* Text */}
          <p className="text-gray-700 text-lg md:text-xl max-w-lg">
            "Your wishlist is waiting! Browse our collections and add the pieces you love."
          </p>

          {/* Button */}
          <button
            onClick={() =>
              setProducts([
                { id: 1, name: "Silver Ring", price: 299, oldPrice: 399, image: product1 },
              ])
            }
            className="px-6 py-2 bg-[#4F1c51] text-white rounded-md hover:bg-[#4F1c51] transition"
          >
            View Collection
          </button>
        </div>
      ) : (
        // Agar products available hain
        <div className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {products.length > 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products.slice(3, 6).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
