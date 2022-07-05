import React from "react";

const ContentWrapper = ({ children, className }) => {
  return <div className={`${className} w-full max-w-7xl`}>{children}</div>;
};

export default ContentWrapper;
