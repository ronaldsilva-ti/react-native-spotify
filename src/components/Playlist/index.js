import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useEffect, useState, useLayoutEffect } from 'react';
import { getFilters, getAlbums } from '../../store/reducers/filters/index'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components/native';
import Card from '../../components/core/Card';

export default () => {

    const client_id = `37a3d30be7494be48db5e40cd1054862`;
    const secret_id = `6a2ea1abffab4a39862d7167426685a8`;
    
    const search = useSelector(state => state.filters.search)
    const [play, setPlay] = useState([])
    const [filteredAlbum,setFilteredAlbum] = useState([])
    const filter = useSelector(state => state.filters.filters)
    const countryState = useSelector(state => state.filters.country)
    const localeState = useSelector(state => state.filters.locale)
    const albumLimit = useSelector(state => state.filters.albumLimit);
    const [messageError, setMessageError] = useState({ message:false, messageHelp:'' })
    const dispatch = useDispatch();

    useEffect(() => {
        if(client_id == '' && secret_id == ''){
          setMessageError({
            ...messageError,
            message:true,
            messageHelp:'Informe seu Cliente ID e seu Secret ID por favor no arquivo .env'
          })
        }
    
      },[])
    
      useEffect(() => {
        getApiFilters();
        getApi();   
      },[ countryState, localeState, albumLimit ])
    
      useEffect(() => {
        console.log('filter',filter)
      },[filter])
    
    
    
     
      useEffect(() => {
        setFilteredAlbum(
          play.filter((res) =>
            res.name.toLowerCase().includes(search?.toLowerCase())
            // console.log("NAME",res.name.toLowerCase().includes(search[0].toLowerCase()))
          )
        );
      }, [play,search]);  
    
      useEffect(() => {
        console.log('search',search)
      }, [search])
      
      async function getApiFilters(){
        try {
            const res = await axios('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
            const data = res.data;
            console.log('getApiFilters',data.filters)
            dispatch(getFilters(data.filters))
        } catch (error) {
                console.log(error)
        }
    }
  
   async function getApi(){   
    
    try {
        const config_token = {
            headers: {
              'Content-Type' : 'application/x-www-form-urlencoded',
              'Authorization' : 'Basic ' + btoa(client_id + ':' + secret_id)      
            },
              data: 'grant_type=client_credentials',
              method: 'POST'
          }
      
          const api_token = await axios('https://accounts.spotify.com/api/token', config_token)
      
          const api_playlist = await axios(`https://api.spotify.com/v1/browse/featured-playlists?locale=${localeState}&&country=${countryState}&&limit=${albumLimit}`,{
            method:'GET',
            headers:{
              'Authorization' : 'Bearer ' +  api_token.data.access_token,
            },     
          })
      
          const res_playlist  = api_playlist.data
      
          console.log('api_playlist',res_playlist.playlists.items) 
          setPlay(res_playlist.playlists.items)
    } catch (error) {
        console.log(error)
    }
}

    return(
        <ScrollView horizontal>
            <Container>
                {/* <Text style={{ color:'white' }}>PLAY</Text> */}
                
                {
                 messageError.message === true ? <MessageError style={{ color:'white', }}>{messageError.messageHelp}</MessageError> : 

                 filteredAlbum?.map(item => (
                    <Card 
                        image={ item.images[0].url }
                        description={ `${item.description.substring(0,70)} ...` }
                        name={ item.name }
                    
                    />
                ))

                  
                }
            </Container>
        </ScrollView>
    )
}



const Container = styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
`;

const MessageError = styled.Text`
    text-align:center;
    font-size:14px;
    width:100%;
`