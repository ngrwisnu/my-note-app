import React from "react";
import Container from "../layout/Container";
import ContentWrapper from "../layout/ContentWrapper";
import Note from "./Note";

const Notes = ({ initData, formatDate, noteButtonHandler }) => {
  return (
    <section>
      <Container>
        <ContentWrapper className="flex min-h-[500px] flex-wrap gap-4 py-12">
          {initData.map((note) => (
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
          ))}
        </ContentWrapper>
      </Container>
    </section>
  );
};

export default Notes;
