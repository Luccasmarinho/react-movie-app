import styled from "styled-components";

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
    width: 70px;
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
