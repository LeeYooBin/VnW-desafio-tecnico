import React, { useState } from 'react';
import * as S from './NavbarStyle';

export default function Navbar() {
    
  const [open, setOpen] = useState(false);

  const close = open => setOpen(openState => openState ? !openState : openState); 

  return (
      <>  
          <S.Navbar open={open}>
              <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
                  <div />
                  <div />
                  <div />
              </S.StyledBurger>
              <S.Menu open={open}>
                  <a href="#about" onClick={() => close(open)}>Sobre</a>
                  <a href="#form" onClick={() => close(open)}>Formação</a>
                  <a href="#" onClick={() => close(open)}>Equipe</a>
                  <a href="#" onClick={() => close(open)}>Eventos</a>
                  <a href="#" onClick={() => close(open)}>Contatos</a>
              </S.Menu>
          </S.Navbar>
      </>
  );
}
