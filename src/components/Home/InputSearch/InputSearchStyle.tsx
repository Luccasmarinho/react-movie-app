import styled from "styled-components";
import { motion } from "framer-motion";


export const StyledWrapper = styled.div`
  .form {
    --input-text-color: #fff;
    --input-bg-color: #283542;
    --focus-input-bg-color: transparent;
    --text-color: #949faa;
    --active-color: #1b9bee;
    --width-of-input: 300px;
    --inline-padding-of-input: 1.2em;
    --gap: 0.9rem;
  }
  /* form style */
  .form {
    font-size: 0.9rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    width: var(--width-of-input);
    position: relative;
    isolation: isolate;
  }
  .fancy-bg {
    position: absolute;
    width: 100%;
    inset: 0;
    background: transparent;
    border: 1px solid white;
    border-radius: 30px;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  label {
    width: 100%;
    padding: 0.8em;
    height: 40px;
    padding-inline: var(--inline-padding-of-input);
    display: flex;
    align-items: center;
  }

  .search,
  .close-btn {
    position: absolute;
  }
  .search {
    fill: var(--text-color);
    left: var(--inline-padding-of-input);
  }
  svg {
    width: 17px;
    display: block;
    color: white;
  }
  .close-btn {
    border: none;
    right: var(--inline-padding-of-input);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0.1em;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--active-color);
    opacity: 0;
    visibility: hidden;
  }
  .input {
    color: var(--input-text-color);
    width: 100%;
    margin-inline: min(2em, calc(var(--inline-padding-of-input) + var(--gap)));
    background: none;
    border: none;
    font-family: var(--font-button);
  }

  .input:focus {
    outline: none;
  }

  .input::placeholder {
    color: var(--text-color);
  }
  .input:focus ~ .fancy-bg {
    border: 1px solid white;
    background: var(--focus-input-bg-color);
  }
  .input:focus ~ .search {
    fill: white;
  }
  .input:valid ~ .close-btn {
    opacity: 1;
    visibility: visible;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

export const StyledButton = styled(motion.button)`

`