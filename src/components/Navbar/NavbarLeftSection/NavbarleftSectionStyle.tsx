import styled from "styled-components";

export interface StyledLiProps {
  navSelect: string;
}

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const AreaTitleImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;

  img {
    width: var(--width-logo);
  }

  h2 {
    letter-spacing: 1px;
  }

  strong {
    color: var(--color-main-red);
  }
`;

export const ListNavegation = styled.nav`
  display: flex;
  align-items: center;

  ul {
    display: flex;
    gap: 35px;
  }

  li {
    cursor: pointer;
    /* background-color: var(--color-main-red); */
    padding: 6px 10px;
    border-radius: 5px;
    transition: all.4s;
  }

  li:hover {
    background-color: var(--color-main-red);
  }
`;

export const StyledLi = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== "navSelect",
})<StyledLiProps>`
  background-color: ${({ navSelect, id }) =>
    navSelect == id ? "var(--color-main-red)" : "transparent"};
`;
