import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack } from 'expo-router';

import { COLORS, SIZES, icons } from '../../constants';
import { FootballNews, Popularmatches, Welcome } from '../../components';


export default function HomeScreen({ navigation }) {
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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />
                    <Popularmatches />
                    <FootballNews />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}