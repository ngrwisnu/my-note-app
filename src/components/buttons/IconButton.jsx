import React from "react";

const IconButton = ({ children, noteButtonHandler, id, name }) => {
  return (
    <button
      className={`rounded-full p-3 text-base`}
      onClick={() => {
        noteButtonHandler(id, name);
      }}
    >
      {children}
    </button>
  );
};

export default IconButton;
