import {
  LeftSection,
  AreaTitleImg,
  ListNavegation,
  StyledLi,
  StyledLink,
} from "./NavbarleftSectionStyle";
import image from "../../../assets/popcorn.webp";
import { useContext, useEffect } from "react";
import { CommonContext } from "../../../context/Common/CommonContext";
import { handleSession } from "../../../utils/utils";

const NavbarleftSection = () => {
  const { navSelect, setNavSelect } = useContext(CommonContext);

  useEffect(() => {
    const session = sessionStorage.getItem("n");
    setNavSelect(session || "");
  }, [navSelect]);

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
              onClick={() => handleSession("n", "home", setNavSelect)}
            >
              Home
            </StyledLi>
          </StyledLink>

          <StyledLink to={"/filmes"}>
            <StyledLi
              navSelect={navSelect}
              id="filmes"
              onClick={() => handleSession("n", "filmes", setNavSelect)}
            >
              Filmes
            </StyledLi>
          </StyledLink>

          <StyledLink to={"/series"}>
            <StyledLi
              navSelect={navSelect}
              id="series"
              onClick={() => handleSession("n", "series", setNavSelect)}
            >
              Séries
            </StyledLi>
          </StyledLink>

          <StyledLink to={"/favorites"}>
            <StyledLi
              navSelect={navSelect}
              id="favoritos"
              onClick={() => handleSession("n", "favoritos", setNavSelect)}
            >
              Favoritos
            </StyledLi>
          </StyledLink>
        </ul>
      </ListNavegation>
    </LeftSection>
  );
};

export default NavbarleftSection;
