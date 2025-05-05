import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { motion } from "framer-motion";
import { StyledButtonProps } from "../../../types/common/common";

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

export const StyledButtonSearch = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "isClicked",
})<StyledButtonProps>`
  visibility: ${({ isClicked }) => (isClicked ? "hidden" : "visible")};
`;

export const StyledInputSearch = styled(motion.section)``;

export const StyledSearchIcon = styled(SearchIcon)`
  color: white;
`;

export const StyledArrowDown = styled(ArrowDropDownIcon)`
  color: white;
`;
