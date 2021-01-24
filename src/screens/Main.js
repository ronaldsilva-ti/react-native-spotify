import React from 'react';
import { View,Text } from 'react-native';
import styled from 'styled-components/native';
import Filters from '../components/Filters/index';
import Playlist from '../components/Playlist/index';
import InputSearch from '../components/core/Input'
export default () => {
    return(
        <Container>
            <InputSearch/>
            <Filters/>
            <Playlist/>
        </Container>
    )
}

const Container = styled.View`
    flex:1;
    background-color:  black;  
    align-items:center;
    
`;

const TextLabel = styled.Text`
    color: whitesmoke;
    margin-top:70px;
`