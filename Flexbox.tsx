import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView
} from 'react-native';

const App = () => {

  return (
    
    <View style={styles.body}>

        <View style={styles.row}> 
            <View style={styles.view1}><Text style={styles.text}> 1 </Text></View>
            <View style={styles.view2}><Text style={styles.text}> 2 </Text></View>
            <View style={styles.view3}><Text style={styles.text}> 3 </Text></View>
        </View>
        
        <View style={styles.row}> 
            <View style={styles.view4}><Text style={styles.text}> 4 </Text></View>
        </View>

        <View style={styles.row}> 
            <View style={styles.view5}><Text style={styles.text}> 5 </Text></View>
        </View>
        <View style={styles.row2}> 
            <View style={styles.view6}><Text style={styles.text}> 6 </Text></View>
            <View style={styles.view7}><Text style={styles.text}> 7 </Text></View>
        </View>
        </View>

      
      
      
      
      
      
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
  }, 

  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0000ff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },

  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  view1: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
  row2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  safetext:{
    fontSize: 25,
    fontWeight: '500',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  },
  toprowleft:{
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  topright:{
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

export default App;