import React from "react";
import Container from "../layout/Container";
import ContentWrapper from "../layout/ContentWrapper";
import Note from "./Note";

const Notes = ({ initData, formatDate, noteButtonHandler, tabStatus }) => {
  let showNote;

  if (tabStatus === "recent") {
    showNote = initData.map((note) => {
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
          />
        );
      }
    });
  }

  if (tabStatus === "archive") {
    showNote = initData.map((note) => {
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
          />
        );
      }
    });
  }

  return (
    <section>
      <Container>
        <ContentWrapper className="flex min-h-[500px] flex-wrap gap-4 pb-12 pt-8">
          {showNote}
        </ContentWrapper>
      </Container>
    </section>
  );
};

export default Notes;
