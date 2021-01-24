import React,{ useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import styled from 'styled-components/native';
import { searchName } from '../../store/reducers/filters/index';
 


export default () => {

    const dispatch = useDispatch()


    return(
        <>
            <TextSearch>Pesquise o nome de um Album</TextSearch>
            <InputSearch placeholder="Faça uma busca" onChangeText={text => dispatch(searchName(text))}/>
        </>
    )
}

export const InputSearch = styled.TextInput`
    background-color:white;
    width:80%;
    height:30px;
    border-radius:8px;
`;


export const TextSearch = styled.Text`
    color:white;
    font-size:13px;
    text-transform:uppercase;
    margin-top:70px;

`;