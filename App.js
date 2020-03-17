//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class MyClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.first}>
          <View style={styles.group1}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.group2}>
            <View style={styles.text2}>
              <Text style={styles.text}>2</Text>
            </View>
            <View style={styles.text3}>
              <Text style={styles.text}>3</Text>
            </View>
          </View>
        </View>
        <View style={styles.second}>
          <View style={styles.group3}>
            <Text style={styles.text}>4</Text>
          </View>
          <View style={styles.group4}>
            <View style={styles.text5}>
              <Text style={styles.text}>5</Text>
            </View>
            <View style={styles.text6}>
              <Text style={styles.text}>6</Text>
            </View>
          </View>
          <View style={styles.group5}>
            <View style={styles.text7}>
              <Text style={styles.text}>7</Text>
            </View>
            <View style={styles.text8}>
              <Text style={styles.text}>8</Text>
            </View>
            <View style={styles.text9}>
              <Text style={styles.text}>9</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 10,
    flexDirection:'column',
  },
  first:{
    flex:1,
    flexDirection:'row',
  },
  group1:{
    flex:2,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
  },
  group2:{
    flex:8,
    flexDirection:'column',
  },
  text2:{
    backgroundColor:'red',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text3:{
    backgroundColor:'pink',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  second:{
    flex:1,
    flexDirection:'row',
  },
  group3:{
    flex:2,
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center',
  },
  group4:{
    flex:5,
    flexDirection:'column',
  },
  text5:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'wheat',
  },
  text6:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'violet',
  },
  group5:{
    flex:3,
    backgroundColor:'yellow',
    flexDirection:'column',
  },
  text7:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'slateblue',
  },
  text8:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'thistle',
  },
  text9:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'tomato',
  },


  text:{
    fontSize:50,
    fontWeight:'700',
    color:'white',
  }

});

//make this component available to the app
export default MyClass;
