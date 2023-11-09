import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import FixturesList from '../../common/cards/fixtures/FixturesList'

export default function Fixtures({activeDate}){
    
    
    
    return(
        <View>
            <FixturesList activeDate = {activeDate}/>
        </View>
    )
}
