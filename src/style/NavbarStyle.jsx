import styled from "styled-components";

export const Navbar = styled.nav`
    width: 100%;
`

export const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    position: absolute;
    top: 15px;
    right: 5%;
    z-index: 20;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        
        &:nth-child(1) {
        transform: ${({ open }) => open ? 'rotate(46deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
        transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-46deg)' : 'rotate(0)'};
        }
    }
    
    @media (min-width: 920px) {
       display: none;
    }
`;

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 15%;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 60vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    a{
        text-decoration: none;
        color: #FFF;
    }

    @media (min-width: 920px) {
        right: 65%;
        top: 3.7%;
        padding: 0;
        width: 45%;
        background: transparent;
        font-weight: 700;
        height: auto;
        flex-direction: row;
        
        a{
            color: #000;
        }
    }
`;