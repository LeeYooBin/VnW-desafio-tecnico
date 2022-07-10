import styled from "styled-components";

export const Title = styled.h1`
    font-size: 1.8em;
    text-align: center;
    color: #0F2260;
    font-weight: 800;
`;

export const Text = styled.p`
    font-size: 1em;
    font-weight: 500;
    text-align: left;

    @media screen and (min-width: 920px){
        font-size: 1em;
        line-height: 3.5vh;
        width: 80%;
    }
`;