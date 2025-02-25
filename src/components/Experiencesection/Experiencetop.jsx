import React from "react";
import ExperienceTopLeft from "./ExperienceTopleft";
import ExperienceTopMiddle from "./Experiencetopmiddle";
import ExperienceTopRight from "./Experiencetopright";

const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;