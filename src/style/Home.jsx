import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const Home = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Prompt:wght@100&family=Roboto+Condensed:ital@1&family=Roboto:wght@100&display=swap');
    font-family: 'Montserrat', sans-serif;
    width: 100%
    height: auto;
`;