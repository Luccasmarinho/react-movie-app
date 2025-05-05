import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  background-color: #121212;
`;

export const Container = styled.section`
  margin: 0 auto;
  width: 60%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AreaLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;

  img {
    width: var(--width-logo);
  }

  h2 {
    letter-spacing: 1px;
    color: white;
  }

  strong {
    color: var(--color-main-red);
  }
`;

export const AboutProject = styled.div`
  color: white;
  text-align: center;
  margin: 0 0 10px 0;
  font-family: var(--font-subtitle);
`;

export const End = styled.div`
  color: white;
  font-family: var(--font-subtitle);
  text-align: center;
  background-color: black;
  padding: 8px;
`;
