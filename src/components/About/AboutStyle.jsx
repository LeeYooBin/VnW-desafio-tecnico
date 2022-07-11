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
