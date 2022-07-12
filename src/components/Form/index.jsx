import * as G from '../../style/Style';
import * as S from './FormStyle';
import pc from '../../assets/img/Grupo 11148.svg';
import img from '../../assets/img/Imagem 1@2x.png';

export default function Form(){
    return(
        <>
            <S.Form id='form'>
                <S.LeftWrapper>
                    <G.Title style={S.TitleStyle}>Formação</G.Title>
                    <S.TextArea>
                    <S.PcImage src={pc} alt="pc"/>
                        <S.Article>
                            <G.SubTitle>FRONT-END</G.SubTitle>
                            <G.Text>
                                Quem trabalha com Front End é responsável por desenvolver por meio do 
                                código uma interface gráfica e, normalmente, com as tecnologias base 
                                da Web: HTML, CSS e JavaScript.
                            </G.Text>
                        </S.Article>
                    </S.TextArea>

                    <S.TextArea>
                        <S.PcImage src={pc} alt="pc"/>
                        <S.Article>
                            <G.SubTitle>BACK-END</G.SubTitle>
                            <G.Text>
                                O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados 
                                que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando 
                                as devidas regras de negócio, validações e garantias num ambiente restrito 
                                ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).
                            </G.Text>
                        </S.Article>
                    </S.TextArea>
                </S.LeftWrapper>
                <S.RightWrapper>
                    <S.Img src={img} alt=""/>
                </S.RightWrapper>
    
            </S.Form>
        </>
    );
}