// import React from 'react'
import { HeaderNav, Container } from "./NavbarStyle";
import NavbarleftSection from "./NavbarLeftSection/NavbarleftSection";
import NavbarRightSection from "./NavbarRightSection/NavbarRightSection";

interface scrollMoveProps {
  scrollMove: boolean;
}

const Navbar = ({ scrollMove }: scrollMoveProps) => {
  return (
    <HeaderNav scrollMove={scrollMove}>
      <Container>
        <NavbarleftSection />
        <NavbarRightSection />
      </Container>
    </HeaderNav>
  );
};

export default Navbar;
