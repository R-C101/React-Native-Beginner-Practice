import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList
} from 'react-native';

const App = () => {

  const [items, setItems] = useState([
    { name: 'item 2'},
    { name: 'item 3'},
    { name: 'item 4'},
    { name: 'item 5'},
    { name: 'item 6'},
    { name: 'item 7'},
    { name: 'item 8'},
    { name: 'item 1'},
  ])

  const DATA = [{
    title: 'Title 1',
    data: ['Item 1-1', 'Item 1-2', 'Item 1-3']
  },
  {
    title: 'Title 2',
    data: ['Item 2-1', 'Item 2-2', 'Item 2-3']
  },
  {
    title: 'Title 3',
    data: ['Item 3-1', 'Item 3-2', 'Item 3-3']
  },
  {
    title: 'Title 4',
    data: ['Item 4-1', 'Item 4-2', 'Item 4-3']
  },
  ]

  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    setRefreshing(true)
    setItems([...items, {name: 'item 69'}])
    setRefreshing(false)
  }

  return (

    <SectionList
    keyExtractor={(item,index)=>index.toString()}
    sections = {DATA}
    renderItem={({item})=>(
       <Text style={styles.text}> {item}</Text>
    )}
    renderSectionHeader={({section})=>(
      <View style={styles.item} >
        <Text style={styles.text}> {section.title}</Text>
         </View>
    )}
    />

    // <FlatList
    
    // keyExtractor={(item,index)=>index.toString()}
    //  data={items}
    //  renderItem={({item}) =>(
    //   <View style={styles.item} >
    //     <Text style={styles.text}> {item.name}</Text>
    //      </View>
    //  )}
    //  refreshControl={
    //       <RefreshControl
    //            refreshing={refreshing}
    //            onRefresh={onRefresh}
    //            colors = {['grey']}
    //             />
    //  }
    
    // />
    
    
    //   <ScrollView  
    //   style={styles.body} 
    //   refreshControl={
    //     <RefreshControl
    //          refreshing={refreshing}
    //          onRefresh={onRefresh}
    //          colors = {['grey']}
    //           />

    //   }
    //   >
    //   {
    //     items.map((object)=>{
    //       return (
    //         <View style={styles.item} key={object.key}>
    //     <Text style={styles.text}> {object.item}</Text>
    //     </View>
      
    //       )
    //     })
    //   }

    //  </ScrollView>
    

  
      
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
    alignItems: 'center',
    borderRadius: 50,



  },
  


  text: {
    color: '#000000',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
  },
  
});

export default App;