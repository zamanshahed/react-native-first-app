import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enterGoal, setEnterGoal] = useState('');

  const goalInputHandler = (enteredText)=>{
    setEnterGoal(enteredText);
  }

  return(
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Project Goals..."
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enterGoal}
        />
      <Button title="UPDATE"  onPress={props.onAddGoal.bind(this, enterGoal)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },

});

export default GoalInput;
