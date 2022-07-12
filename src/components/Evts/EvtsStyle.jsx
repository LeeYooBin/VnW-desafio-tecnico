import styled from "styled-components";

export const Evts = styled.section`
    padding: 0 10%;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 920px){
        margin-top: 15vh;
        position: relative;
        overflow-x: hidden;
        padding-left: 5%;
        height: 80vh;
    }

    @media screen and (min-width: 1281px){
        height: 100vh;
    }
`;

export const Img = styled.img`
    width: 100%;

    @media screen and (min-width: 920px){
        position: absolute;
        width: 75%;
        left: 0;
        top: 5%;
    }

    @media screen and (min-width: 1281px){
        top: 10%;
        left: -2%;
    }
`;

export const TextArea = styled.article`
    margin-top: 3vh;

    @media screen and (min-width: 920px){
        position: absolute;
        width: 35%;
        right: -5%;
        top: 25%;
    }

    @media screen and (min-width: 1281px){
        width: 35%;
        top: 35%;
    }
`;

export const TextStyle = window.screen.width >= 1281 ? {width: '65%'} : {};
export const TitleStyle = window.screen.width >= 920 ? {'text-align': 'left'} : {};

