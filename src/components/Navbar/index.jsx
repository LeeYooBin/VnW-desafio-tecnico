import React, { useState } from 'react';
import * as S from '../../style/NavbarStyle';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>  
            <S.Navbar open={open}>
                <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
                    <div />
                    <div />
                    <div />
                </S.StyledBurger>
                <S.Ul open={open}>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Formação</a></li>
                    <li><a href="#">Equipe</a></li>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#">Contatos</a></li>
                </S.Ul>
            </S.Navbar>
        </>
    );
}

export default Navbar