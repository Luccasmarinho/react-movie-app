// import React from "react";
import {
  LeftSection,
  AreaTitleImg,
  ListNavegation,
  StyledLi,
} from "./NavbarleftSectionStyle";
import image from "../../../assets/popcorn.webp";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const NavbarleftSection = () => {
  const { navSelect } = useContext(AppContext);

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
          <StyledLi navSelect={navSelect} id="home">
            Home
          </StyledLi>
          <StyledLi navSelect={navSelect} id="filmes">
            Filmes
          </StyledLi>
          <StyledLi navSelect={navSelect} id="series">
            Séries
          </StyledLi>
          <StyledLi navSelect={navSelect} id="favoritos">
            Favoritos
          </StyledLi>
        </ul>
      </ListNavegation>
    </LeftSection>
  );
};

export default NavbarleftSection;
