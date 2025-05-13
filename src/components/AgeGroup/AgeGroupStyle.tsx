import styled from "styled-components";
import {MovieAgeGroupsProps} from "../../types/common/common"

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "age",
})<MovieAgeGroupsProps>`
  background-color: ${({ age }) =>
    age == "L"
      ? "green"
      : age?.includes("10")
      ? "#09CEFF"
      : age?.includes("12")
      ? "#FECE1C"
      : age?.includes("14")
      ? "orange"
      : age?.includes("16")
      ? "red"
      : age?.includes("18")
      ? "black"
      : "transparent"};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  p {
    color: white;
    font-weight: bold;
    font-size: 18px;
  }
`;
