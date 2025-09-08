import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput } from 'react-native';

export default function App() {
  const age = 22;
  const licenseyears = 5;
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
      
      // adding a SWITCH STATEMENT
      let drivingBank = '';
      switch (licenseyears) {
          case 0: 
            drivingBank = 'Newbie drivere';
            break;
          case 1:
            drivingBank = 'Rookie with 1 year of driving experience';
            break;
          case 2: 
            drivingBank = 'Intermediate driver with 2 years of driving experience';
            break;
          case 3:
          case 4: 
            drivingBank = 'Experience driver';
            break; 
          default:
            drivingBank = 'Veteran driver with many years of experience';


      }



  return (
    
    <SafeAreaView style={styles.container}>
    <View style={styles.content} >
      

        {/* Add a custom and other text component specific styles to the Heading */}

      <Text style={[styles.response,{fontSize:48, marginBottom:15, textAlign: 'center', color:'yellow'}]}> Driving  License Checker </Text>
      {/* Added an image */}

      <Image source={{uri:'https://www.autoshippers.co.uk/blog/wp-content/uploads/bugatti-centodieci.jpg',}} style={styles.image}/>
      {/* Response and User values displayed */}

      <Text style={styles.response}> Age: {age} </Text>
      <Text style={styles.response}> License Years: {licenseyears} </Text>

     <Text style={[styles.response, {fontSize:40, marginBottom:15, textAlign: 'center', color:'green'}]}> {feedback} {/* This is my message to be displayed to the user*/} </Text>

      <Text style={[styles.response,{fontSize:28, marginBottom:15, textAlign: 'center', color:'yellow'}]}> Driving Rank: {drivingBank} </Text> 

      <TextInput> Drivers License </TextInput>
     
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent:'center',

  },

  response: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
    textAlign: 'center',
  },

  image: {
    width: '100%',
    height: '30%',
    resizeMode: 'cover',
    top: 0,
  }
});
