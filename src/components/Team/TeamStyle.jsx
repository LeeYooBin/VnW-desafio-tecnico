import styled from "styled-components";

export const Team = styled.section`
    margin-top: ${window.screen.width >= 920 ? '10vh' : '3.5vh'};
    margin-bottom: ${window.screen.width >= 920 ? '10vh' : '3.5vh'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InputWrapper = styled.form`
    margin-top: 3.5vh;
    margin-bottom: 3.5vh;
    width: 90%;
    height: 10vh;
    background-color: #00145D;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 1000px) {
        width: 90%;
        height: 13vh;
    }    
`;

export const Label = styled.label`
    position: relative;
    width: auto;

    @media screen and (min-width: 1000px) {
        left: -32%;
        top: 5%;
    }    
`;

export const Input = styled.input`
    padding: 1%;
    padding-right: 1.5%;
    max-height: 4vh;
    outline: none;
    border: none;
    border-radius: 4px;
    background-color: transparent;
    border: 2px #FFF solid;
    opacity: 0.5;
    color: #FFF;
    font-size: 1em;

    ::-webkit-input-placeholder {
        color: #FFF;
    }

    @media screen and (min-width: 1000px) {
        width: 90%;
        height: 13vh;
    }
`;

export const SearchButton = styled.button`
    width: 10%;
    height: 65%;
    position:absolute;
    top: 19%; 
    right: 0;
    z-index: 10;
    border:none;
    background: #FFF;
    outline:none;
    opacity: 0.5;
    color: #000;
    font-weight: 900;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media screen and (min-width: 920px){
        top: 18%;
        right: 12%;
    }
`;

export const Gradient = styled.div`
    position: absolute;
    top: 70%;
    width: 100%;
    height: 30%;
    background-image: linear-gradient(to top, #00145D 0.1%, transparent);
    z-index: 0;

    @media screen and (min-width: 700px){
        width: 70%;
    }

    @media screen and (min-width: 900px){
        width: 85%;
    }

    @media screen and (min-width: 1000px) {
        width: 100%;
    }  
`;

export const MessageWrapper = styled.div`
    width: 80%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.5vh;
    margin-bottom: 3.5vh;
    font-size: 1.2em;
    text-align: center;
`;

export const ImgWrapper = styled.ul`
    width: 80%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 700px){
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }

    @media screen and (min-width: 800px) {
        justify-content: space-evenly;
    }

    @media screen and (min-width: 1000px) {
        width: 90%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.5rem;
    }
`;

export const ImgSpace = styled.a`
    margin-bottom: 3vh;
    position: relative;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFF;
    text-decoration: none;

    @media screen and (min-width: 1000px) {
        margin: 0;
    }    
`;

export const Img = styled.img`
    width: 100%;

    @media screen and (min-width: 700px){
        width: 70%;
    }

    @media screen and (min-width: 900px){
        width: 85%;
    }

    @media screen and (min-width: 1000px) {
        width: 100%;
    }  
`;

export const Name = styled.h3`
    font-size: 1.2em;
    position: absolute;
    top: 80%;
    z-index: 1;
`;

export const Position = styled.p`
    font-size: 0.8em;
    position: absolute;
    top: 90%;
    z-index: 1;
`;

export const TitleStyle = window.screen.width > 920 ? {
    'align-self': 'flex-start',
    'margin-left': '5%',
    'margin-top': '8vh'
} : {};