import React from "react";

const TabButton = ({ children, showNoteHandler, name, tabStatus }) => {
  return (
    <button
      className={`flex items-center justify-center py-3 px-2 ${
        tabStatus === name ? "font-bold" : ""
      }`}
      onClick={() => {
        showNoteHandler(name);
      }}
    >
      {children}
    </button>
  );
};

export default TabButton;
