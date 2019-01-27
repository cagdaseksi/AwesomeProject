import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold'
    },
    viewStyle: {
        
    }
});

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);
