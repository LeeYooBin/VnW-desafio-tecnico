import * as S from './HomeStyle';
import Main from '../../components/Main';
import About from '../../components/About';
import Form from '../../components/Form';
import Team from '../../components/Team';
import Evts from '../../components/Evts';
import Footer from '../../components/Footer';

export default function Home(){
    return(
        <>
            <S.Home id='home'>
                <S.GlobalStyle />
                <Main />
                <About />
                <Form />
                <Team />
                <Evts />
                <Footer />
            </S.Home>
        </>
    );
}