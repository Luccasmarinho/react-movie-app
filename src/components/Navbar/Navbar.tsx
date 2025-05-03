import { HeaderNav, Container } from "./NavbarStyle";
import NavbarleftSection from "./NavbarLeftSection/NavbarleftSection";
import NavbarRightSection from "./NavbarRightSection/NavbarRightSection";
import { useContext, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AppContext from "../../context/AppContext";
import { handleScroll } from "../../utils/utils"

const Navbar = () => {
  const { scrollMove, setScrollMove } = useContext(AppContext);

  useEffect(() => {
       window.addEventListener("scroll", () => handleScroll(setScrollMove));

    return () => {
      window.removeEventListener("scroll", () => handleScroll(setScrollMove));
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
          key="header"
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
