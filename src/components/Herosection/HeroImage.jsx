import React from "react";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
      <img
        src="/images/heropic.png"
        alt="Vivek Singh Rawat"
        className="w-52 sm:w-64 md:w-[20vw] lg:w-80 xl:w-[30vw] object-cover relative"
      />
    </div>
  );
};

export default HeroImage;
