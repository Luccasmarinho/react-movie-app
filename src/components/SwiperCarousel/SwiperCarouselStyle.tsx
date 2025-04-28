import styled from "styled-components";
import { Swiper } from "swiper/react";

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100vh;

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
