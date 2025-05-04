// import React from 'react'
import NotificationBadge from "../../NotificationBadge/NotificationBadge";
import ImageAvatar from "../../ImageAvatar/ImageAvatar";

import {
  RightSection,
  StyledSearchIcon,
  StyledArrowDown,
  StyledButtonSearch,
  StyledInputSearch,
} from "./NavbarRightSectionStyle";
import InputSearch from "../../InputSearch/InputSearch";
import { useContext } from "react";

import { AnimatePresence } from "framer-motion";
import { CommonContext } from "../../../context/Common/CommonContext";

const NavbarRightSection = () => {
  const { isClicked, setIsClicked } = useContext(CommonContext);
  return (
    <RightSection>
      <AnimatePresence>
        <StyledButtonSearch
          onClick={() => setIsClicked(true)}
          isClicked={isClicked}
        >
          <StyledSearchIcon />
        </StyledButtonSearch>
        {isClicked && (
          <StyledInputSearch
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
          >
            {<InputSearch />}
          </StyledInputSearch>
        )}
      </AnimatePresence>
      <button>
        <NotificationBadge />
      </button>
      <button>
        <ImageAvatar />
        <StyledArrowDown />
      </button>
    </RightSection>
  );
};

export default NavbarRightSection;
