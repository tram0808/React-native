//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class MyClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.first}>
          <View style={styles.text1}>
            <Text style={styles.text}>A</Text>
          </View>
          <View style={styles.text2}>
            <Text style={styles.text}>B</Text>
          </View>
          <View style={styles.text3}>
            <Text style={styles.text}>C</Text>
          </View>
          <View style={styles.text4}>
            <Text style={styles.text}>D</Text>
          </View>
        </View>
        <View style={styles.second}>
          <View style={styles.text1}>
            <Text style={styles.text}>A</Text>
          </View>
          <View style={styles.text2}>
            <Text style={styles.text}>B</Text>
          </View>
          <View style={styles.text3}>
            <Text style={styles.text}>C</Text>
          </View>
          <View style={styles.text5}>
            <Text style={styles.text}>D</Text>
          </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  first:{
    flex:1,
    flexDirection:'column',

  },
  text1:{
    flex:1,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flex:1,
    backgroundColor:'brown',
    alignItems:'center',
    justifyContent:'center',
  },
  text3:{
    flex:1,
    backgroundColor:'pink',
    alignItems:'center',
    justifyContent:'center',
  },
  text4:{
    flex:1,
    backgroundColor:'#ffe4c4',
    alignItems:'center',
    justifyContent:'center',
  },
  text5:{
    flex:1,
    backgroundColor:'#deb887',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:25,
  },
  second:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'pink',
  },
});

//make this component available to the app
export default MyClass;
