import React from "react";
import IconButton from "../iconButton/IconButton";
import { FaTrashAlt, FaPen, FaArchive } from "react-icons/fa";

const Note = () => {
  return (
    <div className="flex w-[300px] flex-col gap-4 rounded-md bg-[#FFD966] p-6 shadow-note">
      <h1 className="text-xl font-medium text-neutral-900">Babel</h1>
      <p className="text-xs font-normal text-neutral-600">2/21/2022</p>
      <p className="text-base font-normal text-neutral-700">
        Babel merupakan tools open-source yang digunakan untuk mengubah sintaks
        ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine
        versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru
        termasuk sintaks JSX.
      </p>

      <div className="flex justify-end gap-3">
        <IconButton>
          <FaTrashAlt />
        </IconButton>
        <IconButton>
          <FaPen />
        </IconButton>
        <IconButton>
          <FaArchive />
        </IconButton>
      </div>
    </div>
  );
};

export default Note;
