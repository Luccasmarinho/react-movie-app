import styled from "styled-components";

export const Container = styled.section`
  /* height: 400px; */
  width: 100%;
  /* background: linear-gradient(to bottom, var(--color-background-gradient)); */
`;

export const Box = styled.div`
  height: 100%;
  padding: 60px 50px;
`;

export const AreaTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  h1 {
    color: white;
    font-size: 40px;
  }

  button {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all.5s;
  }

  button:hover {
    color: yellow;
  }
`;
