import React from "react";
import Container from "../layout/Container";
import ContentWrapper from "../layout/ContentWrapper";
import Note from "./Note";

const Notes = () => {
  return (
    <section>
      <Container>
        <ContentWrapper className="py-12 flex gap-4 flex-wrap">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </ContentWrapper>
      </Container>
    </section>
  );
};

export default Notes;
