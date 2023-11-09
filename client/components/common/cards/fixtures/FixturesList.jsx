import React,{useState,useEffect} from 'react'
import {View,Text} from 'react-native'
import FixtureCard from './FixtureCard'

export default function FixturesList({activeDate}){
    const [fixturesList, setFixturesList] = useState([])

    useEffect(() => {
        fetch("https://1fb1-71-190-177-64.ngrok-free.app/fixtures")
        .then(response => response.json())
        .then(fixtureData => {
            setFixturesList(fixtureData)
        })
    },[]) 

    const filteredFixtures = fixturesList.filter(fixture => activeDate === fixture.date)

    const mappedFixtures = filteredFixtures.map(fixture => <FixtureCard key = {fixture.id} fixture={fixture} />)

    return(
        <View>
            {mappedFixtures}
        </View>
    )
}
