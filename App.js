import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [outputText, setOutputText] = useState('React Native: Initial Project !')

  return (
    <View style={styles.screen}>
      <View
        style={{
          backgroundColor:'red',
          width: 100,
          height:100,
          justifyContent:'center',
          alignItems:'center'
        }}
        >
        <Text style={{color:'white'}}>1</Text>
      </View>
      <View
        style={{
          backgroundColor:'blue',
          width: 100,
          height:100,
          justifyContent:'center',
          alignItems:'center'
        }}
        >
        <Text style={{color:'white'}}>2</Text>
      </View>
      <View
        style={{
          backgroundColor:'green',
          width: 100,
          height:100,
          justifyContent:'center',
          alignItems:'center'
        }}
        >
        <Text style={{color:'white'}}>3</Text>
      </View>
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
  screen:{
    padding:50,
    flexDirection:'row'
  },
});
