import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ReviewDetail({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Review Page</Text>
      <Button onPress={()=> navigation.goBack()} title="Return Home"/>
      <Text> Info Passed is: {navigation.getParam("name")}</Text>
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
});
