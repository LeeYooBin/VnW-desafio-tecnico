import * as S from '../../style/Home';
import Main from '../../components/Main';
import About from '../../components/About';
import Form from '../../components/Form';

export default function Home(){
    return(
        <>
            <S.Home>
                <S.GlobalStyle/>
                <Main />
                <About />
                <Form />
            </S.Home>
        </>
    );
}