import Navbar from "../Navbar";
import logo from '../../assets/img/logo.svg';

import './style.css';
export default function Header(){
    return(
        <>
            <header>
                <a href="#"><img src={logo} alt="" className="logo"/></a>
                <Navbar />
            </header>
        </>
    );
}