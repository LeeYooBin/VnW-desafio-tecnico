import styled from "styled-components";
import back from '../../assets/img/Grupo 11153.jpg';


export const Footer = styled.footer`
    background-image: url(https://lh3.googleusercontent.com/VtPHOv0WYiMfjQVhnfTJik8kMItXAL69J2nUI9ZVhye4kAH2YR3VdhRK2ukGSluDdlb3pw=s170);
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


