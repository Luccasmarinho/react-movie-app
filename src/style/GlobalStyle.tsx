import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        outline: none;
        font-family: "Special Gothic Expanded One", sans-serif;
    }

    :root {
        --color-main-red: #AB0511;
        --color-background-gradient: #500308, #AB0511;
        --font-subtitle: "Poppins", sans-serif;
        --font-button: "Montserrat", sans-serif;
    }

    body {
        min-height: 100vh;
    }
`;
