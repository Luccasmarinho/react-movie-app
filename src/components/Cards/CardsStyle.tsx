import styled from "styled-components";

export const AreaCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 280px;
    height: 380px;
    object-fit: cover;
    border-radius: 4px;
  }

  section::before {
    content: "";
    width: 280px;
    height: 380px;
    box-shadow: 0 -100px 40px 1px #000000d8 inset;
    position: absolute;
    border-radius: 4px;
  }

  &:hover {
    section::before {
      content: "";
      width: 280px;
      height: 380px;
      background-color: #0000005a;
      position: absolute;
      border-radius: 4px;
      cursor: pointer;
      transition: ease-in-out 0.5s;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 330px;
    }

    section::before {
      width: 330px;
    }

    &:hover {
      section::before {
        width: 330px;
      }
    }
  }
`;

export const AreaTitleRating = styled.div`
  bottom: 0;
  position: absolute;
  /* padding: 10px; */
  padding: 10px 8px;
  /* padding-right: 15px; */

  p {
    width: 270px;
    word-break: break-word;
    color: white;
    font-family: var(--font-button);
  }
`;
