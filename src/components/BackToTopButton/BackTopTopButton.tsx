import { AnimatePresence } from "framer-motion";
import { StyledWrapper } from "./BackTopTopButtonStyle";
import { useContext, useEffect } from "react";
import { handleScroll } from "../../utils/utils";
import { CommonContext } from "../../context/Common/CommonContext";
const BackToTopButton = () => {
  const { scrollMove, setScrollMove } = useContext(CommonContext);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(setScrollMove));

    return () => {
      window.removeEventListener("scroll", () => handleScroll(setScrollMove));
    };
  }, []);

  function moveToTop(): void {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {scrollMove && (
        <StyledWrapper
          initial={{ opacity: 0, bottom: -50 }}
          animate={{ opacity: 1, bottom: 10 }}
          exit={{ opacity: 0, bottom: -50 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          <button className="button" onClick={moveToTop}>
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </button>
        </StyledWrapper>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
