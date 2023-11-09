import React, {useState} from 'react'
import { View, ScrollView, SafeAreaView, Text, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';
import { Stack } from 'expo-router';

export default function RewardScreen({navigation}){
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
        </SafeAreaView>
    )
}