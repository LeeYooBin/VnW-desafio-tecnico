import * as S from './HomeStyle';
import Main from '../../components/Main';
import About from '../../components/About';
import Form from '../../components/Form';
import Team from '../../components/Team';
import Evts from '../../components/Evts';

export default function Home(){
    return(
        <>
            <S.Home>
                <S.GlobalStyle />
                <Main />
                <About />
                <Form />
                <Team />
                <Evts />
            </S.Home>
        </>
    );
}