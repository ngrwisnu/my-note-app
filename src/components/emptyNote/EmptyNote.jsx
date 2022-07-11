import React from "react";
import Illustration from "../../assets/no_data.svg";

const EmptyNote = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <img src={Illustration} alt="No Data" width="200" />
      <h1 className="mt-6 text-base font-bold">
        Tidak ada catatan untuk saat ini
      </h1>
    </div>
  );
};

export default EmptyNote;
