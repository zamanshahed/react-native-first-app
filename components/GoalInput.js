import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enterGoal, setEnterGoal] = useState('');

  const goalInputHandler = (enteredText)=>{
    setEnterGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enterGoal);
    setEnterGoal('')
  }

  return(
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Project Goals..."
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enterGoal}
          />
        <Button title="CANCEL"  color='red' onPress={props.onCancel}/>
        <Button title="UPDATE"  onPress={addGoalHandler}/>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input:{
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom:15,
  },

});

export default GoalInput;
