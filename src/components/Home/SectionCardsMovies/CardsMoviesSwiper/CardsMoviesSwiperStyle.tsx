import { Swiper } from "swiper/react";
import styled from "styled-components";

export const SwiperStyled = styled(Swiper)`
  .swiper-button-prev {
    position: absolute;
    left: 0;
    color: white;
  }

  .swiper-button-next {
    position: absolute;
    right: 0;
    color: white;
  }
`;
