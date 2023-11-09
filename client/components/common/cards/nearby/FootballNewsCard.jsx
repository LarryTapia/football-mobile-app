import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './footballnewscard.style'

const FootballNewsCard = ({item, selectedJob, handleNavigate}) => {
  return (
    <TouchableOpacity style = {styles.container} onPress={handleNavigate}>
      <TouchableOpacity styles = {styles.logoContainer}>
        <Image
          source = {{}}
          resizeMode = "contain"
          style = {styles.logoImage}
        />
      </TouchableOpacity>

      <View styles = {styles.textContainer}>
        <Text style = {styles.jobName} numberOfLines={1}>News</Text>
      </View>
    </TouchableOpacity>
  )
}
 
export default FootballNewsCard