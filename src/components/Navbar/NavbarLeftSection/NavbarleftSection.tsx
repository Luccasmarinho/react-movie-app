// import React from "react";
import {
  LeftSection,
  AreaTitleImg,
  ListNavegation,
  StyledLi,
} from "./NavbarleftSectionStyle";
import image from "../../../assets/popcorn.webp";
import { useContext } from "react";
import { CommonContext } from "../../../context/Common/CommonContext";

const NavbarleftSection = () => {
  const { navSelect, setNavSelect } = useContext(CommonContext);

  return (
    <LeftSection>
      <AreaTitleImg>
        <img src={image} alt="Logo" />
        <h2>
          Movie<strong>Flix</strong>
        </h2>
      </AreaTitleImg>
      <ListNavegation>
        <ul>
          <StyledLi
            navSelect={navSelect}
            id="home"
            onClick={() => setNavSelect("home")}
          >
            Home
          </StyledLi>
          <StyledLi
            navSelect={navSelect}
            id="filmes"
            onClick={() => setNavSelect("filmes")}
          >
            Filmes
          </StyledLi>
          <StyledLi
            navSelect={navSelect}
            id="series"
            onClick={() => setNavSelect("series")}
          >
            Séries
          </StyledLi>
          <StyledLi
            navSelect={navSelect}
            id="favoritos"
            onClick={() => setNavSelect("favoritos")}
          >
            Favoritos
          </StyledLi>
        </ul>
      </ListNavegation>
    </LeftSection>
  );
};

export default NavbarleftSection;
