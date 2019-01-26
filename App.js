/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//import React from 'react';
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/header'
import Main from './src/components/main'

//export default class App extends React.Component {
export default class App extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Header text={"REACT NATIVE"} />
        <Text style={styles.textStyle}>Some of the things in here might not look like JavaScript to you.</Text>
        <Text style={styles.textContent}>Don't panic. This is the future.</Text>
        <Main text={"REACT NATIVE MAIN"}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor:'#f8f8f8',
    flex:1
},
  textStyle: {
      fontSize:24,
      textAlign:'center',
      marginTop:200,
      marginLeft:20,
      marginRight:20,
      justifyContent:'center',
      color:'#0073e6'
  },
  textContent: {
    fontSize:26,
    textAlign:'center',
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    justifyContent:'center'
}
});

