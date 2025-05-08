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

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-90%, -30%);
  color: white;
  z-index: 10;

  h1 {
    font-size: 48px;
    margin-bottom: 15px;
    text-shadow: 2.2px 2.2px black;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
    text-align: left;
    font-family: var(--font-subtitle);
    text-shadow: 1.2px 1.2px black;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const AreaButton = styled.div`
  /* display: flex;
  gap: 15px; */
`;
