import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
  gap: 31px;
  flex-wrap: wrap;
  position: relative;
`;

export const AreaCard = styled.div`
  position: relative;

  img {
    width: 280px;
    height: 380px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
  }

  section::before {
    content: "";
    width: 280px;
    height: 380px;
    box-shadow: 0 -100px 40px 1px #000000d8 inset;
    position: absolute;
    border-radius: 4px;
  }

  &:hover {
    section::before {
      content: "";
      width: 280px;
      height: 380px;
      background-color: #0000005a;
      position: absolute;
      border-radius: 4px;
      cursor: pointer;
      transition: ease-in-out 0.5s;
    }
  }
`;

export const AreaButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10px 0;
  color: white;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: none;
    cursor: pointer;
    background-color: transparent;
    font-family: var(--font-button);
    font-weight: 400;
    font-size: 18px;
  }
`;

export const AreaCardHide = styled(motion.div)`
  position: relative;

  img {
    width: 280px;
    height: 380px;
    object-fit: cover;
    border-radius: 4px;
  }

  section::before {
    content: "";
    width: 280px;
    height: 380px;
    box-shadow: 0 -100px 40px 1px #000000d8 inset;
    position: absolute;
    border-radius: 4px;
  }

  &:hover {
    section::before {
      content: "";
      width: 280px;
      height: 380px;
      background-color: #0000005a;
      position: absolute;
      border-radius: 4px;
      cursor: pointer;
      transition: ease-in-out 0.5s;
    }
  }
`;

export const AreaTitleRating = styled.div`
  bottom: 0;
  position: absolute;
  padding: 10px;
  padding-right: 15px;

  p {
    width: 270px;
    color: white;
    font-family: var(--font-button);
  }
`;
