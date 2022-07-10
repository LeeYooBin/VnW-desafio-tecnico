import * as S from '../../style/Header';
import Navbar from "../Navbar";
import logo from '../../assets/img/logo.svg';

export default function Header(){
    return(
        <>
            <S.Header>
                <a href="#"><S.Logo src={logo} alt="" /></a>
                <Navbar />
            </S.Header>
        </>
    );
}