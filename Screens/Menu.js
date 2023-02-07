import { View, Text,SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {Feather} from 'react-native-vector-icons'

const Menu = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor:"#D17102", flex:1, paddingTop: Platform.OS === 'android' ? 35 : 0, paddingHorizontal:10, alignItems:'flex-start', flexDirection:'column',justifyContent:'space-between',width:'100%'}}>
        
    <View style={{width:'100%'}}>

        {/*Menu Header*/}
        <View style={{flexDirection:'row', justifyContent:'space-between',width:'100%',paddingTop:5}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Feather name="x" style={{color:"#F0F0F0", fontSize:24}}/>
            </TouchableOpacity>
            <Text style={{color:"#F0F0F0", fontSize:24, fontWeight:'300'}}>
                Menu
            </Text> 
        </View>

        {/*Home*/}
      <TouchableOpacity style={{paddingTop:20, width:'100%', borderBottomWidth:1, borderBottomColor:"#F0F0F0"}} onPress={()=>navigation.navigate('Home')}>
        <View style={{flexDirection:'row',paddingVertical:10, paddingLeft:5}}>
            <Feather name="home" style={{ fontSize:20, color:"#F0F0F0", fontWeight:'300'}}/>
            <Text style={{ fontSize:20, color:"#F0F0F0", paddingLeft:10, fontWeight:'300'}}>Home</Text>
        </View>
      </TouchableOpacity>

        {/*Profile*/}
      <TouchableOpacity style={{paddingTop:20, width:'100%', borderBottomWidth:1, borderBottomColor:"#F0F0F0"}}>
        <View style={{flexDirection:'row', paddingVertical:10, paddingLeft:5}}>
            <Feather name="user" style={{ fontSize:20, color:"#F0F0F0", fontWeight:'300'}}/>
            <Text style={{ fontSize:20, color:"#F0F0F0", paddingLeft:10, fontWeight:'300'}}>Profile</Text>
        </View>
      </TouchableOpacity>

        {/*Settings*/}
      <TouchableOpacity style={{paddingTop:20, width:'100%', borderBottomWidth:1, borderBottomColor:"#F0F0F0"}}>
        <View style={{flexDirection:'row', paddingVertical:10, paddingLeft:5}}>
            <Feather name="settings" style={{ fontSize:20, color:"#F0F0F0", fontWeight:'300'}}/>
            <Text style={{ fontSize:20, color:"#F0F0F0", paddingLeft:10, fontWeight:'300'}}>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>

    {/*Log Out Button*/}
    <View style={{width:'100%',paddingVertical:5}}>
        <TouchableOpacity style={{justifyContent:'center', alignItems:'center',width:'100%'}} onPress={()=>navigation.navigate('Welcome')}>
            <View style={{flexDirection:'row', paddingVertical:10,width:'100%',backgroundColor:'#F0F0F0',alignItems:"center", justifyContent:'center', borderRadius:10}}>
                <Feather name="log-out" style={{ fontSize:16, color:"#D17102"}}/>
                <Text style={{ fontSize:16, color:"#7B7976", paddingLeft:10}}>
                    Log Out
                </Text>
            </View>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Menu;