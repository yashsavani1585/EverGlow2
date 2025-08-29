import React, { Suspense, lazy } from "react";

// Lazy load components
const HeroSection2 = lazy(() =>
  import("../../components/HeroSection2/HeroSection2")
);
const PersonalizedJewelryForm = lazy(() =>
  import("../../components/PersonalizedJewelryForm/PersonalizedJewelryForm")
);
const PersonalizedImage = lazy(() =>
  import("../../components/PersonalizedImage/PersonalizedImage")
);

const PersonalizedJewelry = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection2 />
        <PersonalizedJewelryForm />
        <PersonalizedImage />
      </Suspense>
    </div>
  );
};

export default PersonalizedJewelry;
