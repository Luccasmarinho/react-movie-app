import styled from "styled-components";

export const StyledWrapper = styled.div`
  .button-with-icon {
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-main-red);
    font-family: "Istok Web", sans-serif;
    letter-spacing: 1px;
    padding: 0 12px;
    text-align: center;
    width: 120px;
    height: 40px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: normal;
    border-radius: 3px;
    outline: none;
    user-select: none;
    cursor: pointer;
    transform: translateY(0px);
    position: relative;
    box-shadow: inset 0 30px 30px -15px var(--color-main-red),
      inset 0 0 0 1px var(--color-main-red),
      inset 0 1px 20px var(--color-main-red), 0 3px 0 var(--color-main-red),
      0 3px 2px var(--color-main-red), 0 5px 10px var(--color-main-red);
    background: var(--color-main-red);
    color: white;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
    transition: 150ms all ease-in-out;
  }

  .button-with-icon .icon {
    margin-right: 8px;
    width: 24px;
    height: 24px;
    transition: all 0.5s ease-in-out;
  }

  .button-with-icon:active {
    transform: translateY(3px);
    box-shadow: inset 0 16px 2px -15px rgba(0, 0, 0, 0),
      inset 0 0 0 1px rgba(255, 255, 255, 0.15),
      inset 0 1px 20px rgba(0, 0, 0, 0.1), 0 0 0 #0f988e,
      0 0 0 2px rgba(255, 255, 255, 0.5), 0 0 0 rgba(0, 0, 0, 0),
      0 0 0 rgba(0, 0, 0, 0);
  }

  .button-with-icon:hover .text {
    transform: translateX(80px);
  }
  .button-with-icon:hover .icon {
    transform: translate(23px);
  }

  .text {
    transition: all 0.5s ease-in-out;
  }
`;