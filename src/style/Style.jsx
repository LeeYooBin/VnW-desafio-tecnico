import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    
`;

export const Home = styled.body`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Prompt:wght@100&family=Roboto+Condensed:ital@1&family=Roboto:wght@100&display=swap');
    font-family: 'Montserrat', sans-serif;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2.7% 0;

    @media screen and (min-width: 500px){
        padding: 1.8% 3%;
    }
`;

export const Logo = styled.img`
    width: 13vw;
    position: fixed;

    @media screen and (min-width: 500px){
        width: 10vw;
    }

    @media screen and (min-width: 920px){
        width: 4vw;
    }
`;

