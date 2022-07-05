import React from "react";

const IconButton = ({ children }) => {
  return (
    <button className="rounded-full bg-slate-600 p-3 text-xl">
      {children}
    </button>
  );
};

export default IconButton;
