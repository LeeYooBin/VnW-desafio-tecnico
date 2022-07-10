import Header from '../Header';
import * as S from '../../style/MainStyle';

export default function Main(){
    return(
        <>
            <S.Main>
                <Header />
                <S.H1>
                    <span>//</span> Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?
                </S.H1>
                <S.Sub>
                    <S.Dots>
                        <div />
                        <div />
                        <div />
                    </S.Dots>
                    <S.Line />
                    <S.SubH2>Inscreva-se no Vai na Web!</S.SubH2>
                    <S.SubP>Inscrições de 02 a 21 de Agosto</S.SubP>
                </S.Sub>
                <S.Link>Link para o formulário: <a href="#" target='_blank'> bit.ly/CarreiraVaiNaWeb</a></S.Link>
            </S.Main>
        </>
    );
}