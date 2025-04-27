// import React from 'react'
import NotificationBadge from "../../NotificationBadge/NotificationBadge";
import ImageAvatar from "../../ImageAvatar/ImageAvatar";

import {
  RightSection,
  StyledSearchIcon,
  StyledArrowDown,
} from "./NavbarRightSectionStyle";

const NavbarRightSection = () => {
  return (
    <RightSection>
      <button>
        <StyledSearchIcon />
        {/* <input type="text" style={{ width: "300px" }} /> */}
      </button>
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
