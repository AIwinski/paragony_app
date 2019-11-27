import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import {Header} from './components/Header';

export default class App extends Component {

  render() {
    //console.log("aplikacja uruchomiona");
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.bodyView}>
          <View style={styles.buttomView}>
            <Button title="Login"/>
          </View>
          <View style={styles.buttomView}>
            <Button title="Register"/>
          </View>
        </View>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 32,
  },
  bodyView:{
    borderRadius: 20,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttomView: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  }
  
});
