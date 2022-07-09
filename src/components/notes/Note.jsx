import React from "react";
import IconButton from "../buttons/IconButton";
import { FaTrashAlt, FaPen, FaArchive, FaUndo } from "react-icons/fa";

const Note = ({
  title,
  body,
  date,
  formatDate,
  noteButtonHandler,
  id,
  isArchived,
  hideNote,
}) => {
  return (
    <article
      className={`flex w-[300px] flex-col justify-between gap-4 whitespace-pre-line rounded-md bg-[#FFD966] p-6 shadow-note ${hideNote}`}
    >
      <div id="article__head" className="flex flex-col gap-4">
        <h1 className="text-xl font-medium text-neutral-900">{title}</h1>
        <p className="text-xs font-normal text-neutral-600">
          {formatDate(date)}
        </p>
        <p className="text-base font-normal text-neutral-700">{body}</p>
      </div>

      <div id="article__footer">
        <div className="flex justify-end gap-3">
          {!isArchived ? (
            <IconButton
              noteButtonHandler={noteButtonHandler}
              id={id}
              name="archive"
              isArchived={isArchived}
            >
              <FaArchive className="text-neutral-500 hover:text-neutral-900" />
            </IconButton>
          ) : (
            <IconButton
              noteButtonHandler={noteButtonHandler}
              id={id}
              name="undo"
              isArchived={isArchived}
            >
              <FaUndo className="text-neutral-500 hover:text-neutral-900" />
            </IconButton>
          )}

          <IconButton noteButtonHandler={noteButtonHandler} id={id} name="edit">
            <FaPen className="text-neutral-500 hover:text-neutral-900" />
          </IconButton>
          <IconButton
            noteButtonHandler={noteButtonHandler}
            id={id}
            name="delete"
          >
            <FaTrashAlt className="text-neutral-500 hover:text-red-600" />
          </IconButton>
        </div>
      </div>
    </article>
  );
};

export default Note;
