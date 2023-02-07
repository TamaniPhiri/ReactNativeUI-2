import { View, Text, Image, TouchableOpacity,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Card from '../Components/Card'

const Home = () => {
  return (
    <View style={{backgroundColor:"#272932", flex:1}}>
      <Header/>
      <ScrollView >
        <View style={{flex:1, justifyContent:'center', paddingHorizontal:12, paddingTop:20}}>
          {/*Intro Wrapper*/}
          <View>
            <Text style={{fontSize:32, color:"#fff", fontWeight:"300"}}>Good Morning Enock</Text>
            <Text style={{fontSize:16, fontWeight:"300", color:"#848586", paddingTop:8}}>6 devices are active now</Text>
          </View>
          <Card/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home