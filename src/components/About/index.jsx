import vnw from '../../assets/img/vnw.png'
import * as G from '../../assets/style/Style';
import * as S from './AboutStyle';

export default function About(){
    return(
        <>
            <S.About id='about'>
                <S.ImageWrapper>
                    <a href={vnw}><S.VnwImage src={vnw} alt="" /></a>
                </S.ImageWrapper>
                <S.AboutArticle>
                    <G.Title>Sobre o Vai na Web</G.Title>
                    <br />
                    <G.Text>
                        Fundado em 2017, no Complexo do Alemão, o Vai na Web vem impactando e 
                        transformando a vida de jovens das classes C, D 
                        e E do Rio de Janeiro e de outros 18 estados do Brasil. 
                    </G.Text>
                    <br />
                    <G.Text>
                        Muito mais do que compartilhar conhecimento de programação 
                        front-end, o programa oferece aulas de inglês e desenvolvimento 
                        de habilidades humanas e socioemocionais, que preparam os futuros 
                        desenvolvedores para o mundo do trabalho e oferecem um espaço em que 
                        é possível descobrir a riqueza de áreas que a tecnologia tem. 
                    </G.Text>
                    <br />
                    <G.Text>
                        Com o objetivo de acentuar a potência mundial que é a juventude,
                        o Vai na Web tem se tornado cada vez mais um lugar de transformação.
                        Através da cultura do afeto, a equipe do programa entende que “educar 
                        não é impor informação, é trocar” e sua maior riqueza, segundo a 
                        coordenadora executiva, Cris dos Prazeres, “é respeitar a geração 
                        da juventude que está nesse processo de compartilhar”.
                    </G.Text>
                </S.AboutArticle>
            </S.About>
        </>
    );
}