import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Home({navigation}) {

    const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text>Home Page!</Text>
      <TextInput placeholder="Enter Name"  placeholderTextColor="grey" keyboardType="numeric" style={styles.inputStyle} value={String(name)} onChangeText={text => { setName(text); }}/> 
      <Button  onPress={()=>navigation.push("About")} title="About Us"/>
      <Button  onPress={()=> navigation.push("ReviewDetail", {'name':name})} title="Pass info to ReviewDetail Page"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

    inputStyle: {
        borderWidth:2,
        borderColor: "red",
        margin: 15,
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
