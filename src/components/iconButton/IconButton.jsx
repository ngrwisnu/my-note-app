import React from "react";

const IconButton = ({ children, noteButtonHandler, id, name, isArchived }) => {
  return (
    <button
      className={`rounded-full bg-slate-600 p-3 text-xl ${
        isArchived ? "bg-green-600" : ""
      }`}
      onClick={() => {
        noteButtonHandler(id, name, isArchived);
      }}
    >
      {children}
    </button>
  );
};

export default IconButton;
