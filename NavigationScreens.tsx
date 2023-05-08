import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  
 
} from 'react-native';

const Stack = createStackNavigator()



function ScreenA({navigation}){
  const onPressHandler =  ()=>{
    navigation.navigate('Screen_B')
    //navigation.replace('Screen_B')

  }


  return(
    <View style={Styles.body}>
    <Text style={Styles.text}>Screen A</Text>
    <Pressable 
    onPress={onPressHandler}
    style={({pressed})=>({backgroundColor: pressed? '#ddd': '#0f0' })}>
    <Text style={Styles.text}>
      Go to screen B
    </Text>
    </Pressable>
    </View>
  )
}
function ScreenB({navigation}){

  const onPressHandler=()=>{
   // navigation.navigate('Screen_A')
   navigation.goBack()
  }
  return(
    <View style={Styles.body}>
    <Text style={Styles.text}>Screen A</Text>
    <Pressable 
    onPress={onPressHandler}
    style={({pressed})=>({backgroundColor: pressed? '#ddd': '#0f0' })}>
    <Text style={Styles.text}>
      Go back to screen A
    </Text>
    </Pressable>
    </View>
  )
}


function App(){
  return(
    <NavigationContainer>

    <Stack.Navigator
    screenOptions={{
      header: ()=> null
    }}
    >
    <Stack.Screen
    name="Screen_A"
    component={ScreenA}
    // options={{
    //   header: ()=> null
    // }}
    />
    <Stack.Screen
    name="Screen_B"
    component={ScreenB}
    // options={{
    //   header: ()=> null
    // }}
    />
    </Stack.Navigator>
    </NavigationContainer>
  
  )
}

const Styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  }
})


export default App;