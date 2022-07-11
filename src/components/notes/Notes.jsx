import React from "react";
import EmptyNote from "../emptyNote/EmptyNote";
import Container from "../layout/Container";
import ContentWrapper from "../layout/ContentWrapper";
import Note from "./Note";

const Notes = ({
  initData,
  formatDate,
  noteButtonHandler,
  tabStatus,
  searchValue,
}) => {
  let showNotes;

  if (tabStatus === "recent") {
    showNotes = initData.map((note) => {
      if (note.archived === false) {
        return (
          <Note
            key={note.id}
            title={note.title}
            body={note.body}
            date={note.createdAt}
            isArchived={note.archived}
            formatDate={formatDate}
            noteButtonHandler={noteButtonHandler}
            id={note.id}
            hideNote={`${
              !note.title.toLowerCase().includes(searchValue) && "hidden"
            }`}
          />
        );
      }
    });
  }

  if (tabStatus === "archive") {
    showNotes = initData.map((note) => {
      if (note.archived === true) {
        return (
          <Note
            key={note.id}
            title={note.title}
            body={note.body}
            date={note.createdAt}
            isArchived={note.archived}
            formatDate={formatDate}
            noteButtonHandler={noteButtonHandler}
            id={note.id}
            className={`${
              !note.title.toLowerCase().includes(searchValue) && "hidden"
            }`}
          />
        );
      }
    });
  }

  //  Checking if there are no notes on the page then render the illustration
  const newStatus = showNotes.filter((data) => data !== undefined);

  return (
    <section>
      <Container>
        <ContentWrapper className="flex min-h-[500px] flex-wrap gap-4 pb-12 pt-8">
          {newStatus.length === 0 ? <EmptyNote /> : showNotes}
        </ContentWrapper>
      </Container>
    </section>
  );
};

export default Notes;
