import React from "react";

const TabButton = ({ children, showNoteHandler, name }) => {
  return (
    <button
      className="flex items-center justify-center py-3 px-2"
      onClick={() => {
        showNoteHandler(name);
      }}
    >
      {children}
    </button>
  );
};

export default TabButton;
