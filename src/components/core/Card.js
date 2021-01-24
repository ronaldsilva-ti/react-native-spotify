import React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native'

export default ({ name,description, image }) => {
    console.log('image',image)
    return(
        <Container >

            <ImageAlbum source={{uri:`${image}`}}/>

            <Title>
                {name}
            </Title>

            <Description>
                {description}
            </Description>

        </Container>
    )
}


export const Container = styled.View`
    max-height:360px;
    background-color:#282828;
    padding:8px;
    width:200px;
    margin:4px;


`;
export const ImageAlbum = styled.Image`
    width:100%;
    margin:auto;
    height:70%;

`

export const Title = styled.Text`
    color:white;
    font-size:17px;
    text-align:center;
    margin-bottom:3px;

`
export const Description = styled.Text`
    color:white;
    font-size:15px;

`