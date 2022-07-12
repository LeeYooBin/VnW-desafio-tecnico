import * as G from '../../style/Style';
import * as S from './FooterStyle';
import fb from '../../assets/img/social-medias/facebook.svg';
import ig from '../../assets/img/social-medias/insta.svg';
import ln from '../../assets/img/social-medias/linkrdin.svg';
import md from '../../assets/img/social-medias/medium.svg';
import yt from '../../assets/img/social-medias/youtub.svg';


export default function Footer(){
    return(
        <>
            <S.Footer id='footer'>
                <G.Title style={{color: '#FFF'}}>Contato</G.Title>
                <S.Contacts>
                    <G.Text style={{color: '#FFF'}}>
                        Siga nossas redes sociais e fique conectado com todas as novidades.
                    </G.Text>
                    <S.SocialMedias>
                        <a href="#"><img src={fb} alt="facebook" /></a>
                        <a href="#"><img src={ig} alt="instagram" /></a>
                        <a href="#"><img src={ln} alt="linkedin" /></a>
                        <a href="#"><img src={md} alt="medium" /></a>
                        <a href="#"><img src={yt} alt="youtube" /></a>
                    </S.SocialMedias>
                </S.Contacts>
            </S.Footer>
        </>
    );
}