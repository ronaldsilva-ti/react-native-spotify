import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components/native';
import { getLimitAlbum,getCountry } from '../../store/reducers/filters';


export default () => {

    const dispatch = useDispatch()
    const locale = useSelector(state => state?.filters?.filters)
    const localeState = useSelector(state => state.filters.locale)
    const countryState = useSelector(state => state.filters.country)
    const albumLimit = useSelector(state => state.filters.albumLimit);
    const limit = useSelector(state => state.filters.filters)
    const [limitAlbum, setLimitAlbum] = useState()  

    useEffect(() => {
        console.log('locale',countryState)
        Counter();        
    },[locale])

    useEffect(() => {
        console.log('limit',limit)
        console.log('limitAlbum',limitAlbum)    
    }, [limit, limitAlbum])


    useEffect(() => {
    }, [locale])

    function Counter() {
        limit?.map(item =>{
            if(item.id === "limit"){
               const min = item.validation.min;
               const max = item.validation.max;  

               let arrayLimit = [];

               let i = min;
               let maxLimit = max + 1;
       
               for(i;i < maxLimit;i++){   
                  arrayLimit.push(i);
                  console.log(i);
                  setLimitAlbum(arrayLimit)
               }            
                  
            }
        })     
    }
    return(
        <View>
            <Container>

                {
                    locale !== undefined && locale !== null  ?
                    <>
                        <RNPickerSelect
                            onValueChange={value => dispatch(getCountry(value))}
                            value={countryState}
                            style={{
                                color:'white'
                            }}
                            placeholder={{
                                label:`Selecione um País`
                            }}
                            placeholderTextColor="green"
                            items={
                                
                                    locale !== undefined && locale !== null ?                    
                                    locale[1]?.values?.map(item => (
                                        { label: `${item.name}`, value: `${item.value}`}
                                    ))                    
                                    : null                                
                            }                        
                        />   
                    </>

                    : null
                }        
            </Container>
            
            <Container>

                {
                    limitAlbum !== undefined && limitAlbum !== undefined ?
                        <>
                            <RNPickerSelect
                            onValueChange={value =>  dispatch(getLimitAlbum(value))}
                            value={albumLimit}
                            placeholder={{
                                label:`Selecione o Limite`
                            }}
                            items={                        
                                limitAlbum !== undefined && limitAlbum !== undefined ?
                                limitAlbum?.map(item => (
                                    { label: `${item}`, value: `${item}`}

                                ))  
                                :null                      
                            }
                    
                            />

                        </>
                    :null
                }
               
                

           
            </Container>

            
            
        </View>
    )
}



const Container = styled.View`
    margin-top:12px;   
`;