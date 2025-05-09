import styled from "styled-components";

interface MovieAgeGroupsProps {
  age: string | undefined;
}

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "age",
})<MovieAgeGroupsProps>`
  background-color: ${({ age }) =>
    age == "L"
      ? "green"
      : age == "10"
      ? "#09CEFF"
      : age == "12"
      ? "yellow"
      : age == "14"
      ? "orange"
      : age == "16"
      ? "red"
      : age == "18"
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
