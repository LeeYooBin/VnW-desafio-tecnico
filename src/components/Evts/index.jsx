import * as G from '../../style/Style';
import * as S from './EvtsStyle';
import img from '../../assets/img/Grupo 11151@2x.png';

export default function Evts(){
    return(
        <>
            <S.Evts id='evts'>
                <G.Title style={S.TitleStyle}>Eventos</G.Title>
                <S.TextArea>
                    <G.SubTitle>Tech Girls</G.SubTitle>
                    <G.Text style={S.TextStyle}>
                        Com o objetivo de promover network entre mulheres de tecnologia, 
                        conectar talentos femininos com oportunidades no mercado da tecnologia, 
                        oferecer experiências de troca através de eventos com mulheres que já 
                        têm experiência no mercado da tecnologia, acelerar os talentos com ajuda 
                        para custeio de luz e internet para facilitar o processo de estudo, promover 
                        mentoria para as participantes do grupo.
                    </G.Text>
                </S.TextArea>
                <S.Img src={img} alt="Tech Girls" />
            </S.Evts>
        </>
    );
}