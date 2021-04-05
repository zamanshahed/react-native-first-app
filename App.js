import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [outputText, setOutputText] = useState('React Native: Initial Project !')

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <TextInput placeholder="Course Goals..!" style={{borderBottomColor: '#1248', borderBottomWidth: 1, margin:20, width:'80%', textAlign:'center'}} />
      <Button title="UPDATE" onPress={()=>setOutputText('Binary in my Blood !')}/>
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
