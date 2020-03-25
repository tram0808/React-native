//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
class Button extends Component {
    checkRenderTextTitle() {
        if (this.props.text) {
          return this.props.text;
        } else {
          return '';
        }
        return this.props.text ? this.props.text : '';
      }
      render() {
        return (
          <TouchableOpacity
            style={{backgroundColor: 'gray', padding: 10, borderRadius: 5,...this.props.styleBox}}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
              {this.checkRenderTextTitle()}
            </Text>
        </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
 
});

//make this component available to the app
export default Button;
