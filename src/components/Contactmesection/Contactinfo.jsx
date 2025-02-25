import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="vr90888561@gmail.com" Icon={HiOutlineMail} />
      <SingleInfo text="7906420278" Icon={FiPhone} />
      <SingleInfo text="New Delhi" Icon={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
