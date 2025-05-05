import logo from "../../../assets/popcorn.webp";
import Tooltip from "../Tooltip/Tooltip";
import {
  FooterStyle,
  Container,
  AreaLogo,
  AboutProject,
  End,
} from "./FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <Container>
        <AreaLogo>
          <img src={logo} alt="Logo" />
          <h2>
            Movie<strong>Flix</strong>
          </h2>
        </AreaLogo>
        <AboutProject>
          O projeto MovieFlix foi desenvolvido com muita dedicação para fins de
          estudo, com o objetivo de praticar conhecimentos principalmente em
          Typescript e também React, além de outras tecnologias utilizadas ao
          longo do desenvolvimento.
        </AboutProject>
        <div>
          <Tooltip />
        </div>
      </Container>
      <End>© 2025 MovieFlix | Feito por Luccas Marinho Dev</End>
    </FooterStyle>
  );
};

export default Footer;
