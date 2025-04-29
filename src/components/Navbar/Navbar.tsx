// import React from 'react'
import { HeaderNav, Container } from "./NavbarStyle";
import NavbarleftSection from "./NavbarLeftSection/NavbarleftSection";
import NavbarRightSection from "./NavbarRightSection/NavbarRightSection";

const Navbar = ({ scrollMove }: any) => {
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
