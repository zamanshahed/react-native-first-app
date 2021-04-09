import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  // const [outputText, setOutputText] = useState('React Native: Initial Project !')
  const [enterGoal, setEnterGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText)=>{
    setEnterGoal(enteredText);
  }

  const addGoalHandler= () => {
    setCourseGoals(currentGoals => [...courseGoals, enterGoal])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput
          placeholder="Project Goals..."
          onChangeText={goalInputHandler}
          value={enterGoal}
          />
        <Button title="UPDATE"  onPress={addGoalHandler}/>
      </View>
      <View>
        {courseGoals.map((goal)=>
          <Text key={goal}>{goal}</Text>
        )}
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
