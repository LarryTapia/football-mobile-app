import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularmatches.style'
import {COLORS, SIZES} from '../../../constants'
import PopularMatchCard from '../../common/cards/popular/PopulaMatchCard'

const Popularmatches = () => {

  const router = useRouter()  
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Matches</Text>
      </View>

      <View style = {styles.cardsContainer}>
        {isLoading ? (<ActivityIndicator 
        size="large" 
        colors={COLORS.primary}/>) : 
        error ? (<Text>Something went wrong</Text>) : 
        (<FlatList 
          data = {[1,2,3,4,5]} 
          renderItem={({item}) => (<PopularMatchCard item={item}/>)}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
        />)    
        }
      </View>
    </View>

    
  )
}

export default Popularmatches