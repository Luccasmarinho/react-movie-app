// import React from 'react'
import SwiperCarousel from "../SwiperCarousel/SwiperCarousel";
import { Container, Content, AreaButton } from "./LandingStyle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

const Landing = () => {
  return (
    <Container>
      <SwiperCarousel />
      <Content>
        <h1>Minecraft: O filme</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sed netus tortor hendrerit
          massa sem nunc nam odio. Orci posuere id donec.Lorem ipsum dolor sit
          amet consectetur. Sed netus tortor hendrerit massa sem nunc nam odio.
          Orci posuere id donec.Lorem ipsum dolor sit amet consectetur. Sed
          netus tortor hendrerit massa sem nunc nam odio. Orci posuere id donec.
        </p>
        <AreaButton>
          <button>
            <PlayArrowIcon />
            Assistir
          </button>
          <button>
            <InfoOutlineIcon />
            Mais informações
          </button>
        </AreaButton>
      </Content>
    </Container>
  );
};

export default Landing;
