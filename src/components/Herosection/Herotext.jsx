import React from "react";
import { motion } from "framer-motion";
import fadeIn from "../../Framermotion/varients";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4  mt-10 text-center md:text-left items-center md:items-start">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg sm:text-xl md:text-2xl uppercase text-lightGrey"
      >
        Full Stack Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange font-bold uppercase"
      >
        Vivek Singh <br className="hidden md:block" />
        Rawat
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base sm:text-lg mt-4 max-w-lg"
      >
        A Passionate MERN Stack Developer and Instructor <br /> with 1 year of experience.
      </motion.p>
    </div>
  );
};

export default HeroText;
