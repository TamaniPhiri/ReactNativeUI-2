import { View, Text,Switch } from 'react-native'
import React, { useState } from 'react'
import {Feather} from 'react-native-vector-icons'

const Card = ({navigation}) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <View>
        <View style={{marginTop:20}}>
            <View style={{backgroundColor:"#343C48",padding:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderRadius:10}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View>
                        <Feather name="cloud-lightning" style={{color:"#848586", fontSize:24}}/>
                    </View>
                    <View style={{paddingLeft:10}}>
                        <Text style={{color:"#F0F0F0", fontSize:20}}>Cloud Lightening</Text>
                        <Text style={{color:"#848586", marginLeft:2}}>Lusaka - Mar,10</Text>
                    </View>
                </View>
                <View>
                    <Text style={{fontSize:24, color:"#F0F0F0"}}>
                        25°
                    </Text>
                </View>
            </View>
        </View>

        <View style={{alignItems:'center', flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{color:"#F0F0F0"}}>On</Text>
            {/*Added switch*/}
            <Switch
            trackColor={{false: '#D17102', true: '#CD4406'}}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
        </View>
      </View>
    </View>
  )
}

export default Card