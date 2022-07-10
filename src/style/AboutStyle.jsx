import styled from "styled-components";

export const About = styled.section`
    padding: 3.5vh 5%;
    height: auto;

    @media screen and (min-width: 920px){
        display: flex;
        height: 85vh;
        padding: 0;
    }
`;

export const ImageWrapper = styled.div`
    display: none;

    @media screen and (min-width: 920px){
        min-width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const VnwImage = styled.img`
    width: 20vw;
`;

export const AboutArticle = styled.article`
    margin-top: 3.5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 920px){
        width: 60%;
        align-self: center;
    }
`;

export const Title = styled.h1`
    font-size: 1.8em;
    text-align: center;
    color: #0F2260;
    font-weight: 800;
`;

export const AboutText = styled.p`
    font-size: 1em;
    font-weight: 500;
    text-align: justify;

    @media screen and (min-width: 920px){
        font-size: 1em;
        line-height: 3.5vh;
        width: 80%;
    }
`;