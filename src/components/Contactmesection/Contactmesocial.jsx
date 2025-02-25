import React from "react";
import SingleContactSocial from "./Singlesocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/vivek-singh-656b89212/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/vivekrawat1998" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/vivekrwt4?igsh=MXR6YXY4cWs4NnM4Ng==" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;