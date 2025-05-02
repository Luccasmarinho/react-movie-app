import { HeaderNav, Container } from "./NavbarStyle";
import NavbarleftSection from "./NavbarLeftSection/NavbarleftSection";
import NavbarRightSection from "./NavbarRightSection/NavbarRightSection";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrollMove, setScrollMove] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll(): void {
      const scroll: number = window.scrollY;
      scroll > 10 ? setScrollMove(true) : setScrollMove(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      <HeaderNav scrollMove={false}>
        <Container>
          <NavbarleftSection />
          <NavbarRightSection />
        </Container>
      </HeaderNav>

      {scrollMove && (
        <HeaderNav
          scrollMove={scrollMove}
          initial={{ opacity: 0, height: 0, y: -60 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -60 }}
        >
          <Container>
            <NavbarleftSection />
            <NavbarRightSection />
          </Container>
        </HeaderNav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
