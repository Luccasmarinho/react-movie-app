// import React from 'react'
import NotificationBadge from "../../NotificationBadge/NotificationBadge";
import ImageAvatar from "../../ImageAvatar/ImageAvatar";

import {
  RightSection,
  StyledSearchIcon,
  StyledArrowDown,
  StyledButtonSearch,
} from "./NavbarRightSectionStyle";
import InputSearch from "../../InputSearch/InputSearch";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const NavbarRightSection = () => {
  const { isClicked, setIsClicked } = useContext(AppContext);
  return (
    <RightSection>
      <StyledButtonSearch
        onClick={() => setIsClicked(true)}
        isClicked={isClicked}
      >
        <StyledSearchIcon />
      </StyledButtonSearch>
      {isClicked && <InputSearch />}
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
