//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from './src/common/Button';
// create a component
class MyClass extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Button text="Aler" styleBox={{backgroundColor: 'cyan', padding: 10}}/>
       
      </View>
      
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'flex-start',
    justifyContent:'center',
  },


});

//make this component available to the app
export default MyClass;
