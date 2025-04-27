// import React from "react";
import { LeftSection, AreaTitleImg, ListNavegation } from "./NavbarleftSectionStyle";
import image from "../../../assets/popcorn.webp"

const NavbarleftSection = () => {
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
          <li>Home</li>
          <li>Filmes</li>
          <li>Séries</li>
          <li>Favoritos</li>
        </ul>
      </ListNavegation>
    </LeftSection>
  );
};

export default NavbarleftSection;
