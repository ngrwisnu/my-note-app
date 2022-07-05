import React from "react";
import IconButton from "../iconButton/IconButton";
import { FaTrashAlt, FaPen, FaArchive } from "react-icons/fa";

const Note = ({ title, body, date, formatDate }) => {
  return (
    <article className="flex w-[300px] flex-col justify-between gap-4 rounded-md bg-[#FFD966] p-6 shadow-note">
      <div id="article__head" className="flex flex-col gap-4">
        <h1 className="text-xl font-medium text-neutral-900">{title}</h1>
        <p className="text-xs font-normal text-neutral-600">
          {formatDate(date)}
        </p>
        <p className="text-base font-normal text-neutral-700">{body}</p>
      </div>

      <div id="article__footer">
        <div className="flex justify-end gap-3">
          <IconButton>
            <FaArchive />
          </IconButton>
          <IconButton>
            <FaPen />
          </IconButton>
          <IconButton>
            <FaTrashAlt />
          </IconButton>
        </div>
      </div>
    </article>
  );
};

export default Note;
