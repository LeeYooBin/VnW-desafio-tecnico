import React, { useState } from 'react';
import * as G from '../../assets/style/Style';
import * as S from './TeamStyle';
import { GrFormSearch } from 'react-icons/gr';
import './style.css';
import TeamData from '../../TeamData';

export default function Team(){
    const [team] = useState(TeamData);
    const [teamList, setTeamList] = useState(team);
    const [input, setInput] = useState();

    const search = input => {
        const filter = team.filter(item => item.name.toLowerCase().includes(input.toLowerCase()));
        setTeamList(filter);
    };

    return(
        <>
            <S.Team id='team'>
                <G.Title style={S.TitleStyle}>Equipe</G.Title>
                <S.InputWrapper onSubmit={e => e.preventDefault()}>
                    <S.Label>
                        <S.Input 
                            type="text" 
                            placeholder='Pesquisar...'
                            onChange={e => setInput(e.target.value)}
                        />
                        <S.SearchButton onClick={() => search(input)}>
                            <GrFormSearch />
                        </S.SearchButton>
                    </S.Label>
                </S.InputWrapper>

                {teamList.length ? 
                    <S.ImgWrapper>
                        {teamList.map((item, index) => (
                            <li>
                                <S.ImgSpace href={item.image} target='_blank' key={index}>
                                    <S.Img src={item.image} alt={item.name} />
                                    <S.Name>{item.name}</S.Name>
                                    <S.Position>#{item.position}</S.Position>
                                    <S.Gradient></S.Gradient>
                                </S.ImgSpace>
                            </li>
                        ))}
                    </S.ImgWrapper>
                    :
                    <S.MessageWrapper>
                        <h1 >
                            Membro da equipe técnica não encontrado.
                        </h1>
                    </S.MessageWrapper>
                }
            </S.Team>
        </>
    );
}