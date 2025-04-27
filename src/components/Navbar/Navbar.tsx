// import React from 'react'
import NotificationBadge from "../NotificationBadge/NotificationBadge";
import ImageAvatar from "../ImageAvatar/ImageAvatar";
import image from "../../../public/popcorn.webp";
import {
  HeaderNav,
  Container,
  LeftSection,
  AreaTitleImg,
  ListNavegation,
  RightSection,
  StyledSearchIcon,
  StyledArrowDown,
} from "./NavbarStyle";

const Navbar = () => {
  return (
    <HeaderNav>
      <Container>
        {/* navbarleftsection */}
        <LeftSection>
          <AreaTitleImg>
            <img src={image} alt="Logo" />
            <h2>
              Movie<strong>Flix</strong>
            </h2>
          </AreaTitleImg>
          <ListNavegation>
            <ul>
              <li>Home</li>
              <li>Filmes</li>
              <li>Séries</li>
              <li>Favoritos</li>
            </ul>
          </ListNavegation>
        </LeftSection>

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

      </Container>
    </HeaderNav>
  );
};

export default Navbar;
