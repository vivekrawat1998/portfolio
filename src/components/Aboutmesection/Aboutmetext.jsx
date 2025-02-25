import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I am a skilled Full Stack Developer with a strong passion for crafting
        innovative, interactive, and user-centric web applications. With a sharp
        eye for design and an in-depth understanding of modern web technologies,
        I excel at delivering solutions that are both visually compelling and
        highly functional. My technical expertise includes proficiency in HTML,
        CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and SQL. By
        leveraging Tailwind CSS for responsive and accessible styling, I ensure
        designs are both intuitive and impactful. My specialization lies in
        utilizing modern frameworks and libraries, particularly React, to
        develop dynamic and scalable web applications that enhance user
        experiences and drive business success.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
