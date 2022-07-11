import styled from "styled-components";

export const Title = styled.h1`
    font-size: 1.8em;
    text-align: center;
    color: #0F2260;
    font-weight: 800;

    @media screen and (min-width: 920px){
        font-size: 2.5em;
    }
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

export const SubTitle = styled.h2`
    margin-bottom: 1.5vh;
    font-size: 1.6em;
    color: #0F2260;
    font-weight: 700;
`;