import React from "react";
import Container from "../layout/Container";
import ContentWrapper from "../layout/ContentWrapper";
import Note from "./Note";

const Notes = ({ initData, formatDate }) => {
  return (
    <section>
      <Container>
        <ContentWrapper className="flex flex-wrap gap-4 py-12">
          {initData.map((note) => (
            <Note
              key={note.id}
              title={note.title}
              body={note.body}
              date={note.createdAt}
              formatDate={formatDate}
            />
          ))}
        </ContentWrapper>
      </Container>
    </section>
  );
};

export default Notes;
