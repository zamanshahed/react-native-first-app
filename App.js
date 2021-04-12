import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  // const [outputText, setOutputText] = useState('React Native: Initial Project !')
  // const [enterGoal, setEnterGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [addVidibility, setAddVisibility] = useState(false);

  const addGoalHandler= goalTitle => {
    setCourseGoals(currentGoals => [...courseGoals, {key: Math.random().toString(), value: goalTitle}]);
    setAddVisibility(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    });
  }

  const cancelGoalInput = () => {
    setAddVisibility(false);
  };


  return (
    <View style={styles.screen}>

      <Button title="Add New Goal" onPress={()=>setAddVisibility(true)} />
      <GoalInput visible={addVidibility} onAddGoal = {addGoalHandler} onCancel={cancelGoalInput}/>

      <FlatList data={courseGoals} renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} />} />

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
    padding:50
  },
});
