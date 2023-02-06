import { View, Text, Image, TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 35 : 0, paddingHorizontal:10}}>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Home