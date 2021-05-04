import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-style: 'Montserrat', sans-serif;
    }

    html, body {
        background-color: #010203;
    }
`;

export default GlobalStyle;