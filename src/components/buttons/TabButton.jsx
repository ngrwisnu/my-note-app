import React from "react";

const TabButton = ({ children, showNoteHandler, name, tabStatus }) => {
  return (
    <button
      className={`flex items-center justify-center bg-inherit py-2 px-4 ${
        tabStatus === name ? "font-bold shadow-tab" : ""
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
