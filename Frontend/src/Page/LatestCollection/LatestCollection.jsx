import React, { Suspense, lazy } from "react";

// Lazy load components
const HeroSection2 = lazy(() =>
  import("../../components/HeroSection2/HeroSection2")
);
const JewelryShowcase = lazy(() =>
  import("../../components/JewelryShowcase/JewelryShowcase")
);

const LatestCollection = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection2 />
        <JewelryShowcase />
      </Suspense>
    </div>
  );
};

export default LatestCollection;
