import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

GoalItem = props => {
  return(
    <View style={styles.listItem}><Text>{props.title}</Text></View>
  );
};

const styles = StyleSheet.create({
  listItem:{
    padding: 5,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  },

});


export default GoalItem;
