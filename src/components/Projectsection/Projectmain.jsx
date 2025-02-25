import React from "react";
import ProjectsText from "./Projecttext";
import SingleProject from "./Singleproject";
import { motion } from "framer-motion";
import fadeIn from "../../Framermotion/varients";

const projects = [
  {
    name: "Blue Red Production",
    align: "right",
    image: "/images/bluered.png",
    link: "https://blueredproduction.com",
  },
  {
    name: "ReflectFx",
    align: "left",
    image: "/images/reflectfx.png",
    link: "https://www.reflect-fx.com/",
  },
  {
    name: "Uber Clone",
    align: "right",
    image: "/images/uber.png",
    link: "https://uberfrontend.vercel.app/",
  },

  {
    name: "Wonderspher - Travel website",
    align: "left",
    image: "/images/wandersphere.png",
    link: "https://wander-sphere-2qaa.vercel.app/",
  },
  {
    name: "Real time chat application",
    align: "right",
    image: "/images/chat app.png",
    link: "https://realtimechatappfrontend-3cly-rztwly62m-vivek-rawats-projects.vercel.app/",
  },
  {
    name: "Animatrix- clone",
    align: "left",
    image: "/images/animatrix.png",
    link: "https://animted.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link} // Fixed: Pass link prop
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
