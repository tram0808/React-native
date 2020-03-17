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
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.text2}>
            <Text style={styles.text}>2</Text>
          </View>
        </View>
        <View style={styles.second}>
          <View style={styles.group1}>
            <View style={styles.text3}>
              <Text style={styles.text}>3</Text>
            </View>
            <View style={styles.text4}>
              <Text style={styles.text}>4</Text>
            </View>
          </View>
          <View style={styles.group2}>
            <Text style={styles.text}>5</Text>
          </View>

        </View>
        <View style={styles.third}>
          <View style={styles.text6}>
            <Text style={styles.text}>6</Text>
          </View>
          <View style={styles.text7}>
            <Text style={styles.text}>7</Text>
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
    borderColor: 'black',
    borderWidth: 5,
  },
  first:{
    flex:2,
    flexDirection:'row',
    
    
  },
  text1:{
    backgroundColor:'red',
    flex:3,
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'black',
    borderBottomWidth:5,
    borderRightWidth:5,
  },
  text2:{
    backgroundColor:'yellow',
    flex:7,
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'black',
    borderBottomWidth:5,
  },
  second:{
    flex:6,
    flexDirection:'row',
  },
  group1:{
    flexDirection:'column',
    flex:7,
  },
  group2:{
    flex:3,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#d8bfd8',
    borderColor: 'black',
    borderBottomWidth:5,
    borderLeftWidth:5,

  },
  text3:{
    flex:1,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'black',
    borderBottomWidth:5,
   
  },
  text4:{
    flex:1,
    backgroundColor:'#ee82ee',
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'black',
    borderBottomWidth:5,
  },
  third:{
    flex:2,
    flexDirection:'row',
    backgroundColor:'red',
  },
  text6:{
    flex:1,
    backgroundColor:'salmon',
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'black',
    borderRightWidth:5,
  },
  text7:{
    flex:1,
    backgroundColor:'powderblue',
    alignItems:'center',
    justifyContent:'center',
  },

  text:{
    fontSize:50,
    fontWeight:'700',
    color:'white',
  }

});

//make this component available to the app
export default MyClass;
