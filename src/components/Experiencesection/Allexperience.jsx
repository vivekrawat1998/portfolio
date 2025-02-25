import React from "react";
import SingleExperience from "./Singleexperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import fadeIn from "../../Framermotion/varients";
const experiences = [
  {
    job: "Full Stack Developer",
    company: "Nexus Star Technology",
    date: "Nov 2024 - Present",
    responsibilities: [
      "Develop full-stack applications using MERN (MongoDB, Express.js, React.js, Node.js).",
      "Build and integrate RESTful APIs for seamless front-end and back-end.",
      "•Design responsive UIs with React.js and optimize performance.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Full Stack Developer Intern",
    company: "Koders",
    date: "May 2024 - August 2024",
    responsibilities: [
      "Designed and developed a Chrome extension for managing Excel files, enabling seamless file conversion to CSV and data persistence using Redux-persist.",
      "Integrated Whisper AI for automatic subtitle generation and implemented animated subtitles using CSS and JavaScript to enhance video content accessibility.",
      "Converted a web application into a desktop app using Electron Builder, ensuring cross-platform compatibility and an optimized user experience.",
    ],
  },
  {
    job: "Full stcak devloper Trainee",
    company: "Workation",
    date: "April 2023 - August 2023",
    responsibilities: [
      "Developed pixel-perfect UI using Material-UI , Tailwind CSS",
      "learning Fully responsive UI using grid and Flexbox.",
      "working on bcrypt and jwt for authenticationand password encyrption.",
      "Learned How to Used Mongodb ODM for schema design",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
