
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import { Thumbs, Autoplay } from "swiper/modules";
import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import 'react-inner-image-zoom/lib/styles.min.css';


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
  const mainSwiperRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 border-4 border-[#CEBB98] border-t-transparent rounded-full animate-spin"></div>
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
          {/* Main Image Swiper */}
          <Swiper
            modules={[Autoplay, Thumbs]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
            thumbs={{ swiper: thumbsSwiper }}
            className="w-full rounded-xl"
          >
            {currentProduct.images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center px-1 py-1 w-full h-[400px] sm:h-[500px] md:h-[600px]">
                  <InnerImageZoom
                    src={img}
                    zoomSrc={img}
                    zoomType="hover"
                    zoomScale={1}
                    alt={`Product Image ${index + 1}`}
                    className="rounded-md w-full h-full object-contain shadow-md"
                    zoomPreload
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails Swiper */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            watchSlidesProgress
            slidesPerView="auto"   // 👈 ek hi line me rakhega
            freeMode={true}        // 👈 scroll kar sakte ho ek line me
            modules={[Thumbs, Autoplay]}
            className="mt-4 w-full flex"
          >
            {currentProduct.images.map((img, index) => (
              <SwiperSlide
                key={index}
                className="!w-20 sm:!w-24" // 👈 fix width thumbnails ek line me
              >
                <img
                  src={img}
                  alt={`thumb-${index}`}
                  className="w-full h-20 sm:h-24 object-cover rounded-md cursor-pointer border hover:border-yellow-600 transition"
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
              <button className="flex-1 bg-[#CEBB98] text-white py-3 rounded-md font-semibold hover:bg-black transition">
                Buy Now
              </button>

              {/* Add to Cart */}
              <button className="flex-1 bg-[#CEBB98] text-white py-3 rounded-md font-semibold hover:bg-black transition">
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
            <button className="w-full bg-[#CEBB98] text-white py-3 rounded-md font-semibold hover:bg-black transition">
              Order on WhatsApp
            </button>
          </div>

          {/* Offers */}
          <div className="bg-[#CEBB98] text-white rounded-lg p-5 space-y-4">
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
              <h3 className="text-lg font-semibold text-yellow-700 mb-2">Weight</h3>
              <p className="text-sm text-gray-700">Gross (Product) - 1.291</p>
              <p className="text-sm text-gray-700">Net (Gold) - 1.005</p>
            </div>

            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-yellow-700 mb-2">Purity</h3>
              <p className="text-sm text-gray-700">14k Yellow Gold</p>
            </div>

            <div className="bg-white rounded-lg shadow p-4 sm:col-span-2">
              <h3 className="text-lg font-semibold text-yellow-700 mb-2">
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
                <h3 className="text-lg font-semibold text-yellow-700 mb-3">
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
