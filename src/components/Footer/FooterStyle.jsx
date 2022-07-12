import styled from "styled-components";

export const Footer = styled.footer`
    background-image: url(https://github.com/LeeYooBin/VnW-desafio-tecnico/blob/main/src/assets/img/Grupo%2011153@2x.jpg?raw=true);
    background-size: cover;
    background-position: 100%;
    margin-top: 5vh;
    padding: 10%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 920px){
        margin-top: 20vh;
        align-items: flex-start;
        padding: 5%;
    }
`;

export const Contacts = styled.div`
    display: flex;
    flex-direction: column-reverse;

    @media screen and (min-width: 920px){
        margin-top: 12vh;
        align-items: center;
        flex-direction: row;
        width: 50%;
    }
`;

export const SocialMedias = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2vh;
    margin-top: 2vh;

    img{
        width: 80%;
    }

    @media screen and (min-width: 920px){
        margin-left: 2vw;
    }
`;


