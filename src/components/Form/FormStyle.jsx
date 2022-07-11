import styled from "styled-components";

export const Form = styled.section`
    display: flex;
    flex-direction: row;
    padding: 3.5vh 5%;
    display: flex;

    @media screen and (min-width: 920px){
        padding: 0;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    @media screen and (min-width: 1200px){
        height: 70vh;
    }
`;

export const LeftWrapper = styled.div`
    @media screen and (min-width: 920px){
        width: 50%;
    }
`;

export const Img = styled.img`
    width: 100%;
`;

export const PcImage = styled.img`
    display: none;
    width: 8vw;

    @media screen and (min-width: 920px){
        display: block;
    }
`;

export const TextArea = styled.div`
    margin-top: 3vh;

    @media screen and (min-width: 920px){
        margin-top: 2vh;
        display: flex;
        flex-direction: row;
        padding-left: 12%;
    }
`;

export const RightWrapper = styled.div`
    display: none;

    @media screen and (min-width: 920px){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
    }
`;

export const Article = styled.article`
    @media screen and (min-width: 920px){
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

export const TitleStyle = window.screen.width >= 920 ? {
    'margin-bottom': '7vh',
    'text-align': 'left',
    'margin-left': '12%'
} : {};