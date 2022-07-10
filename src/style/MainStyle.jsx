import styled from "styled-components";
import background from '../assets/img/background.png';


export const Main = styled.main`
    width: 100%;
    height: 100vh;
    padding: 0 4%;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 60%;

    @media screen and (min-width: 1281px){
        background-position: 80%;
    }
`;

export const H1 = styled.h1`
    margin-top: 18vh;
    color: #FFAC2D;
    font-size: 1.6em;
    font-weight: 900;
    text-align: left;

    span{
        color: #FF611E;
        font-weight: 200;
    }

    @media screen and (min-width: 700px){
        width: 85%;
        font-size: 2em;
        margin-left: 10vw;
    }

    @media screen and (min-width: 800px){
        width: 80%;
        font-size: 1.8em;
    }

    @media screen and (min-width: 1000px){
        margin-top: 15vh;
        font-size: 2em;
    }

    @media screen and (min-width: 1281px){
        font-size: 2.7em;
    }
`;

export const Sub = styled.div`
    width: 100%;
    height: 17vh;
    margin-top: 8vh;
    padding: 2.5% 5% ;
    border-radius: 15px;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    @media screen and (min-width: 500px){
        width: 70%;
    }

    @media screen and (min-width: 700px){
        width: 55%;
        height: 14vh;
        margin-left: 10vw;
    }

    @media screen and (min-width: 800px){
        height: 13vh;
    }

    @media screen and (min-width: 1000px){
        margin-left: 10vw;
        width: 45%;
        height: 23vh;
        padding: 1.5% 2.5% ;
    }

    @media screen and (min-width: 1281px){
        width: 45%;
        height: 23vh;
    }
`;

export const Dots = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-between;

    div{
        height: 12px;
        width: 12px;
        background-color: #0F2260;
        border-radius: 50%;
    }

    @media screen and (min-width: 700px){
        width: 13%;
    }

    @media screen and (min-width: 1000px){
        width: 12%;
    }

    @media screen and (min-width: 1281px){
        width: 10%;
    }
`;

export const SubH2 = styled.h2`
    font-size: 1.3em;
    font-weight: 900;
    color: #0F2260;

    @media screen and (min-width: 500px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 800px){
        font-size: 1.3em;
    }

    @media screen and (min-width: 1000px){
        font-size: 1.5em;
    }

    @media screen and (min-width: 1200px){
        font-size: 2.1em;
    }
`;

export const Line = styled.hr`
    width: 95%;
    height: 5px;
    border-radius: 10px;
    background-color: #0F2260;

    @media screen and (min-width: 500px){
        width: 90%;
    }

    @media screen and (min-width: 1000px){
        width: 95%;
    }
`;

export const SubP = styled.p`
    font-size: 1em;
    font-weight: 500;

    @media screen and (min-width: 800px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1000px){
        font-size: 0.8em;
    }

    @media screen and (min-width: 1281px){
        font-size: 1.2em;
    }
`;


export const Link = styled.p`
    color: #FFF;
    font-size: 0.8em;
    font-weight: 600;
    margin-top: 2vh;

    a{
        text-decoration: none;
        color: #FFF;
        font-weight: 300;
    }

    @media screen and (min-width: 700px){
        margin-left: 10vw;
    }

    @media screen and (min-width: 800px){
        font-size: 1.2em;
    }

    @media screen and (min-width: 1000px){
        font-size: 0.8em;
    }

    @media screen and (min-width: 1281px){
        font-size: 1.2em;
    }
`;