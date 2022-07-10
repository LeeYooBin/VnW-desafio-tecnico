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
                  <a href="#">Formação</a>
                  <a href="#">Equipe</a>
                  <a href="#">Eventos</a>
                  <a href="#">Contatos</a>
              </S.Menu>
          </S.Navbar>
      </>
  );
}
