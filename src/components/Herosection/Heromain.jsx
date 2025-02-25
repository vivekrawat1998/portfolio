import React from "react";
import HeroText from "./Herotext.jsx";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-12">
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 max-w-[1300px] mx-auto">
        <HeroText />
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroMain;
