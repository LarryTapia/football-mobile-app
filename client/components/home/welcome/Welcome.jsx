import React from 'react'
import { View, Text } from 'react-native'

import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
      <View>
        <Text style={styles.userName}>Welcome Chett
        </Text>
        <Text style={styles.welcomeMessage}>Total Points: 500 pts</Text>
      </View>
    </View>
  )
}

export default Welcome