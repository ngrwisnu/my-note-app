import React from "react";
import Container from "../layout/Container";
import ContentWrapper from "../layout/ContentWrapper";

const Navbar = () => {
  return (
    <header>
      <Container className="shadow-sm">
        <ContentWrapper className="text-center leading-[122%] text-xl py-4">
          <span className="text-main font-semibold">Personal.Note</span>
          <span className="text-neutral-600 font-normal">App</span>
        </ContentWrapper>
      </Container>
    </header>
  );
};

export default Navbar;
