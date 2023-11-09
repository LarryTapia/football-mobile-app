import * as React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import MatchScreen from './MatchScreen'
import RewardScreen from './RewardScreen'

const homeName = 'Home';
const profileName = 'Profile';
const matchName = 'Match';
const rewardName = 'Reward';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(

            <Tab.Navigator 
                initialRouteName={homeName} 
                screenOptions={({route}) => ({

                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        if(route.name === homeName){
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (route.name === matchName) {
                            iconName = focused ? 'football' : 'football-outline'
                        } else if (route.name === rewardName) {
                            iconName = focused ? 'home' : 'home-outline'
                        } else if (route.name === profileName) {
                            iconName = focused ? 'person' : 'person-outline'
                        }
            
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                      },
                    tabBarActiveBackgroundColor: "black",
                    tabBarInactiveBackgroundColor: "black",
                    tabBarStyle: {backgroundColor: "black", paddingBottom: 10}
                })}

                >

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={matchName} component={MatchScreen}/>
                <Tab.Screen name={rewardName} component={RewardScreen}/>
                <Tab.Screen name={profileName} component={ProfileScreen}/>

            </Tab.Navigator>
    )
}