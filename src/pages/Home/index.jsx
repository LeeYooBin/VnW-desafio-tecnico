import * as S from '../../style/Style';
import Main from '../../components/Main';
import About from '../../components/About';

export default function Home(){
    return(
        <>
            <S.Home>
                <S.GlobalStyle/>
                <Main />
                <About />
            </S.Home>
        </>
    );
}