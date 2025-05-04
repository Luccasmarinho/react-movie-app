import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
  gap: 31px;
  flex-wrap: wrap;
  position: relative;
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

