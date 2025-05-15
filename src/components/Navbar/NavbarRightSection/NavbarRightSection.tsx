// import React from 'react'
import NotificationBadge from "../../Home/NotificationBadge/NotificationBadge";
import ImageAvatar from "../../Home/ImageAvatar/ImageAvatar";

import {
  RightSection,
  StyledSearchIcon,
  StyledArrowDown,
  StyledButtonSearch,
  StyledInputSearch,
} from "./NavbarRightSectionStyle";
import InputSearch from "../../Home/InputSearch/InputSearch";
import { useContext } from "react";

import { AnimatePresence } from "framer-motion";
import { CommonContext } from "../../../context/Common/CommonContext";

const NavbarRightSection = () => {
  const { isClicked, setIsClicked } = useContext(CommonContext);
  return (
    <RightSection>
      <AnimatePresence mode="popLayout">
        <StyledButtonSearch
          onClick={() => setIsClicked(true)}
          isClicked={isClicked}
        >
          <StyledSearchIcon />
        </StyledButtonSearch>
        {isClicked && (
          <StyledInputSearch
            key="input-search-unique"
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
