import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './popularmatchcard.style'

const PopularMatchCard = ({item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity style = {styles.container(selectedJob, item)} onPress={(handleCardPress)}>
      <TouchableOpacity styles = {styles.logoContainer(selectedJob, item)}>
        <Text style={styles.companyName} numberOfLines={1}> Match </Text>
      </TouchableOpacity>

      <View styles = {styles.infoContainer}>
        <Text>Match</Text>
      </View>
    </TouchableOpacity>
  )
}
 
export default PopularMatchCard