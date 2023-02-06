import { View, Text, StyleSheet, Image,ScrollView, FlatList,ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { useEffect, useState,React } from 'react'
import {Feather} from 'react-native-vector-icons'



const Welcome = ({navigation}) => {

  return (
        <View style={{flex:1}}>
        <ImageBackground source={{uri:'https://images.pexels.com/photos/6976604/pexels-photo-6976604.jpeg?auto=compress&cs=tinysrgb&w=600'}} style={{display:'flex', flex:1, justifyContent:'center', alignItems:'center'}} resizeMode="cover">

            {/*Input Form*/}
                <View style={{backgroundColor:"#F0F0F0", borderRadius:10, padding:10, width:'80%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:32, color:"#D17102", marginVertical:20, fontWeight:'600'}}>
                        Welcome
                    </Text>
                    <View style={{flexDirection:'row', alignItems:'center',marginBottom:10}}>
                        <Feather name="mail" style={{color:"#CD4406", fontSize:14}}/>
                        <TextInput placeholder="Email" placeholderTextColor={"#D17102"} style={{width:'80%', borderBottomColor:"#D17102", borderBottomWidth:1, paddingHorizontal:5, fontSize:14}}/>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Feather name="lock" style={{color:"#CD4406", fontSize:14}}/>
                        <TextInput placeholder="Password" placeholderTextColor={"#D17102"} secureTextEntry={true} style={{width:'80%', borderBottomColor:"#D17102", borderBottomWidth:1, paddingHorizontal:5, fontSize:14}}/>
                    </View>
                    <TouchableOpacity style={{backgroundColor:"#D17102", borderRadius:5, marginTop:35, width:'90%'}}  onPress={()=>navigation.navigate('Home')}>
                        <View style={{alignItems:'center'}}>
                            <Text style={{padding:10, color:"#F0F0F0",fontWeight:"500"}}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{color:"#D17102", paddingTop:5}}>
                        - or -
                    </Text>
                    <View style={{display:'flex', flexDirection:'row', padding:10}}>
                        <Text style={{color:"#7B7976"}}>
                            Already have an account?
                        </Text>
                        <TouchableOpacity>
                            <Text style={{color:"#D17102", paddingLeft:5, textDecorationLine:'underline'}}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>     
  )
}

export default Welcome;
