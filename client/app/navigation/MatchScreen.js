import React, {useState} from 'react'
import { View, ScrollView, SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native';
import Fixtures from '../../components/home/fixtures/Fixtures'
import { COLORS, SIZES, icons } from '../../constants';
import { Stack } from 'expo-router';
import styles from "../../components/home/welcome/welcome.style"

export default function MatchScreen({navigation}){

    const dates = ["Tue, 24 Oct", "Wed, 25 Oct", "Tue, 7 Nov", "Wed, 8 Nov", "Tue, 28 Nov", "Wed, 29 Nov", "Tue, 12 Dec", "Wed, 13 Dec"]
    const [activeDate, setActiveDate] = useState("Tue, 24 Oct")

    function handlePress(item){
        setActiveDate(item)
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "black" },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerShown: false
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                <View style = {styles.tabsContainer}>
                    <FlatList data = {dates}
                        renderItem={({item}) => (
                            <TouchableOpacity style = {styles.tab(activeDate, item)} onPress={() => handlePress(item)} >
                                <Text style = {styles.tabText(activeDate, item)}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        contentContainerStyle = {{columnGap: SIZES.small}}
                        horizontal
                    >
                    </FlatList>
                    <Fixtures activeDate = {activeDate}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}