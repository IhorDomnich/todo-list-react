import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
        background-color: ${({ theme }) => theme.color.white};
        word-break: break-word;
    }

    #root {
        background-color: ${({ theme }) => theme.color.silver};
        min-height: 100vh;
        background-size: cover;
        background-position: center;
    }

`;
