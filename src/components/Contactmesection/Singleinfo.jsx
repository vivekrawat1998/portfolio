import React from "react";

const SingleInfo = ({ text, Icon }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Icon className="text-3xl" />
      <p>{text}</p>
    </div>
  );
};

export default SingleInfo;