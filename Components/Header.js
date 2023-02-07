import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {Feather} from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';


const Dashboard = () => {

  const navigation = useNavigation();


  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 35 : 0, paddingHorizontal:10}}>

      {/*Header*/}

    <View style={{display:'flex', justifyContent:'space-between', width:'100%', flexDirection:'row',marginTop:10}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Menu')}>
          <Feather name="menu" style={{fontSize:24, color:"#CD4406"}}/>
      </TouchableOpacity>
      <TouchableOpacity>
          <Feather name="bell" style={{fontSize:24, color:"#CD4406"}}/>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default Dashboard