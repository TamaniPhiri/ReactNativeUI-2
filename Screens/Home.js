import { View, Text, Image, TouchableOpacity,SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const Home = () => {
  return (
    <View>
      <Header/>
      <ScrollView >
        <View style={{flex:1, justifyContent:'center', paddingHorizontal:12, paddingTop:20}}>
          {/*Intro Wrapper*/}
          <View>
            <Text style={{fontSize:32}}>Good Morning Enock</Text>
            <Text style={{fontSize:16, fontWeight:"300"}}>6 devices are active now</Text>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default Home