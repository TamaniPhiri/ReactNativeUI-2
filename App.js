import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';
import Welcome from './Screens/Welcome';

const Stack=createNativeStackNavigator();

export default function App({navigation}) {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName={'Welcome'}>
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}


