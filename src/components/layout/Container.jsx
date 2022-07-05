import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`${className} flex justify-center w-full`}>{children}</div>
  );
};

export default Container;
