import React, { useState } from 'react';
import * as S from '../../style/Navbar';

export default function Navbar() {
    
  const [open, setOpen] = useState(false);

  return (
      <>  
          <S.Navbar open={open}>
              <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
                  <div />
                  <div />
                  <div />
              </S.StyledBurger>
              <S.Menu open={open}>
                  <a href="#about" onClick={() => setOpen(!open)}>Sobre</a>
                  <a href="#form" onClick={() => setOpen(!open)}>Formação</a>
                  <a href="#" onClick={() => setOpen(!open)}>Equipe</a>
                  <a href="#" onClick={() => setOpen(!open)}>Eventos</a>
                  <a href="#" onClick={() => setOpen(!open)}>Contatos</a>
              </S.Menu>
          </S.Navbar>
      </>
  );
}
