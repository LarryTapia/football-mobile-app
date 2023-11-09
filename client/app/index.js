import * as React from 'react'
import { Stack, useRouter } from 'expo-router';
import MainContainer from './navigation/MainContainer';
import HomeScreen from './navigation/HomeScreen';
import { ScrollView, SafeAreaView, View, Text} from 'react-native';


import { COLORS, SIZES, icons } from '../constants';
import { ScreenHeaderBtn } from '../components';
import styles from "./navigation/homescreen.style"

const Home = () => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "black"},
                    headerShadowVisible: true,
                    headerTitle: "",
                    headerLeft: () => (
                        <Text style = {styles.titleText}>Football Hub</Text>
                    ),
                    headerRight: () => (
                        <>
                        <ScreenHeaderBtn iconUrl={icons.searchicon} dimension = "80%"/>
                        <ScreenHeaderBtn iconUrl={icons.realmadrid} dimension = "80%"/>
                        </>
                    )
                }}
            />
            
            <MainContainer/>
        </SafeAreaView>

    )
}
export default Home;
