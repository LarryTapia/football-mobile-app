import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './footballnews.style'
import {COLORS} from '../../../constants'
import FootballNewsCard from '../../common/cards/nearby/FootballNewsCard'

const FootballNews = () => {

  const router = useRouter()  
  const isLoading = false;
  const error = false;

  return (
    <View >
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Football News</Text>
      </View>

      <View style = {styles.cardsContainer}>
        {isLoading ? (<ActivityIndicator 
        size="large" 
        colors={COLORS.primary}/>) : 
        error ? (<Text>Something went wrong</Text>) : 
        (<FootballNewsCard/>)    
        }
      </View>
    </View>

    
  )
}

export default FootballNews