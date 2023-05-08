import react from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Pressable,
    Alert,
    ToastAndroid,
    Modal,
    Image,
    ImageBackground,
  } from 'react-native';

const Header = (props)=>{
    return(
      <View
      style={styles.view}
      >
      <Text>Rishit Chugh</Text>


      </View>
        
    )
}

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: 50,
    backgroundColor: "#00f",
    justifyContent: "center",
    alignItems: 'center',

  },
  text: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',

  }
   
})

export default Header