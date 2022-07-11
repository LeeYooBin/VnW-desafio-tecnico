import styled from "styled-components";

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
    z-index: 20;

    @media screen and (min-width: 500px){
        width: 10vw;
    }

    @media screen and (min-width: 920px){
        width: 4vw;
    }
`;