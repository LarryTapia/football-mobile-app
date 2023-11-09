<SafeAreaView style = {{flex: 1, backgroundColor: COLORS.forestgreen}}>
            <Stack.Screen
                options = {{
                    headerStyle: {backgroundColor: COLORS.forestgreen},
                    headerShadowVisible: true,
                    headerLeft: () => (
                        <Text style = {styles.titleText}>FootballHub</Text>
                    ),
                    headerRight: () => (
                        <>
                            <ScreenHeaderBtn iconUrl = {icons.searchicon} dimension = "100%" ></ScreenHeaderBtn>
                            <ScreenHeaderBtn iconUrl = {icons.realmadrid} dimension = "100%" ></ScreenHeaderBtn>
                        </>

                    ),
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {{flex: 1, padding: SIZES.medium}}>
                    <Welcome/>
                    <Popularmatches/>
                    <FootballNews/>
                </View>
            </ScrollView>
        </SafeAreaView>




import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import {COLORS, SIZES, icons} from '../constants';
import {FootballNews, Popularmatches, ScreenHeaderBtn, Welcome} from '../components';
import styles from './index.style'