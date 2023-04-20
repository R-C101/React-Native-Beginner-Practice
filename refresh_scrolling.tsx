import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  RefreshControl
} from 'react-native';

const App = () => {

  const [items, setItems] = useState([
    {key:1, item: 'item 1'},
    {key:2, item: 'item 2'},
    {key:3, item: 'item 3'},
    {key:4, item: 'item 4'},
    {key:5, item: 'item 5'},
    {key:6, item: 'item 6'},
    {key:7, item: 'item 7'},
    {key:8, item: 'item 8'},
  ])

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    setRefreshing(true)
    setItems([...items, {key: 69, item: 'item 69'}])
    setRefreshing(false)
  }

  return (
    
    
      <ScrollView  
      style={styles.body} 
      refreshControl={
        <RefreshControl
             refreshing={refreshing}
             onRefresh={onRefresh}
             colors = {['grey']}
             
             />

      }
      >
      {
        items.map((object)=>{
          return (
            <View style={styles.item} key={object.key}>
        <Text style={styles.text}> {object.item}</Text>
        </View>
      
          )
        })
      }

     </ScrollView>
    

      
      
      
      
      
      
  );
};

const styles = StyleSheet.create({ 

  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center'


  },
  


  text: {
    color: '#000000',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
  },
  
});

export default App;