import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const age = 24;
  const licenseyears = 1;
  let feedback = '';

  if (age >= 18) 
    if (licenseyears >= 3) 
      {
        feedback = 'You are a qualified, safe driver.';
      }
        else
      {
          feedback = 'You are allowed to drive. YAY!'
      } 
        else 
      {
          feedback = 'You are not yet eligible to drive.'
      }   



  return (
    <View style={styles.container}>
     <Text style={styles.response}> {feedback} {/* This is my message to be displayed to the user*/} </Text> 
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  response: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  }
});
