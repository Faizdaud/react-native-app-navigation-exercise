import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Detail({navigation}) {

  let item = navigation.getParam('item');
  return (
    <View style={styles.container}>
      <Text>Review Comments</Text>
      <Button style={styles.button} onPress={()=> navigation.goBack()} title="Go Back"/>
      <View style={styles.review}>
        <Text> {item.Name}</Text>
        <Text> {item.Rating}</Text>
        <Text> {item.Review}</Text>
      </View>
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

  review: {
    backgroundColor: "#66ffc2",
    margin:20,
  }
});
