import styled from "styled-components";

interface scrollMoveProps {
  scrollMove: boolean;
}

export const HeaderNav = styled.header.withConfig({
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
  z-index: 1000000;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;
