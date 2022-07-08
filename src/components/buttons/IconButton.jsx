import React from "react";

const IconButton = ({ children, noteButtonHandler, id, name }) => {
  return (
    <button
      className={`rounded-full bg-slate-300 p-3 text-xl`}
      onClick={() => {
        noteButtonHandler(id, name);
      }}
    >
      {children}
    </button>
  );
};

export default IconButton;
