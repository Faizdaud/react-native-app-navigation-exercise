import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function About({navigation}) {

    const [comments, setComments] = useState([
        {
            "id": 1,
            "Name" : "Danny",
            "Rating": 3,
            "Review": "The class is so so.."
        },

        {
            "id": 2,
            "Name" : "Suzy",
            "Rating": 4,
            "Review": " I love how the presenter presents the topic."
        },

        {   "id": 3,
            "Name" : "James",
            "Rating": 5,
            "Review": "Perfect!"
        },


    ]);

  return (
    <View style={styles.container}>
      <Text>About Page</Text>

        <FlatList 
            data= {comments} 
            keyExtractor={item=>item.id} 
            renderItem={({item}) =>(
                <TouchableOpacity  onPress={()=> navigation.push("Detail", {'item':item})}>
                    <View style={styles.flatListStyle} >

                        <Text>{item.Name}:</Text>
                        <Text>{item.Review}</Text>
                  
                    </View>
                </TouchableOpacity>

            )}>
                
        </FlatList>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  flatListStyle: {
    flex: 1,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#ffff80',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:15,
  },

});
