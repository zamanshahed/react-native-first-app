import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enterGoal, setEnterGoal] = useState('');

  const goalInputHandler = (enteredText)=>{
    setEnterGoal(enteredText);
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
        <Button title="UPDATE"  onPress={props.onAddGoal.bind(this, enterGoal)}/>
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
