import * as S from './HeaderStyle';
import Navbar from "./Navbar";
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