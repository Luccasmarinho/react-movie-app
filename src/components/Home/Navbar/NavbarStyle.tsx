import { motion } from "framer-motion";
import styled from "styled-components";
import { scrollMoveProps } from "../../../types/common/common";

export const HeaderNav = styled(motion.header).withConfig({
  shouldForwardProp: (prop) => prop !== "scrollMove",
})<scrollMoveProps>`
  width: 100%;
  background: ${({ scrollMove }) =>
    scrollMove
      ? "linear-gradient(to right, black 40%, var(--color-main-red))"
      : "transparent"};
  background-color: transparent;
  color: white;
  position: fixed;
  z-index: 999999999999999;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;
