import React from "react";
import Container from "../layout/Container";
import ContentWrapper from "../layout/ContentWrapper";

const Footer = () => {
  return (
    <footer>
      <Container className="bg-main">
        <ContentWrapper className="py-3">
          <p className="text-center text-xs text-neutral-50">
            Copyright &copy; 2022. IDCamp React project established by Ngr
            Wisnu.
          </p>
        </ContentWrapper>
      </Container>
    </footer>
  );
};

export default Footer;
