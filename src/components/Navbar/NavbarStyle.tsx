import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const HeaderNav = styled.header`
  width: 100%;
  background: linear-gradient(to right, black 40%, var(--color-main-red));
  color: white;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
`;

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

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  button {
    display: flex;
    align-items: center;
    background-color: blue;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  color: white;
`;

export const StyledArrowDown = styled(ArrowDropDownIcon)`
  color: white;
`;
