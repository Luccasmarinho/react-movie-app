import styled from "styled-components";

export const Button = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  border: 1px solid #ffffff7f;
  background-color: #ffffff36;
  border-radius: 50%;

  &:hover {
    border: 1px solid white;
    transition: all.5s;
    background-color: #ffffff5a;
  }
`;
