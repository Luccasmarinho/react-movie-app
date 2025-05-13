import {
  LeftSection,
  AreaTitleImg,
  ListNavegation,
  StyledLi,
  StyledLink,
} from "./NavbarleftSectionStyle";
import image from "../../../assets/popcorn.webp";
import { useContext } from "react";
import { CommonContext } from "../../../context/Common/CommonContext";
import { handleSession } from "../../../utils/utils"

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
          <StyledLink to={"/"}>
            <StyledLi
              navSelect={navSelect}
              id="home"
              onClick={() => handleSession("home", setNavSelect)}
            >
              Home
            </StyledLi>
          </StyledLink>

          <StyledLink to={"/filmes"}>
            <StyledLi
              navSelect={navSelect}
              id="filmes"
              onClick={() => handleSession("filmes", setNavSelect)}
            >
              Filmes
            </StyledLi>
          </StyledLink>

          <StyledLink to={"/series"}>
            <StyledLi
              navSelect={navSelect}
              id="series"
              onClick={() => handleSession("series", setNavSelect)}
            >
              Séries
            </StyledLi>
          </StyledLink>

          <StyledLi
            navSelect={navSelect}
            id="favoritos"
            onClick={() => handleSession("favoritos", setNavSelect)}
          >
            Favoritos
          </StyledLi>
        </ul>
      </ListNavegation>
    </LeftSection>
  );
};

export default NavbarleftSection;
