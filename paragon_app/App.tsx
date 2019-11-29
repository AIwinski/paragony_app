import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import {Header} from './components/Header';
import {Body} from './components/Body';

export default class App extends Component {
  

  render() {
    //console.log("aplikacja uruchomiona");
    return (
      <View style={styles.container}>
        <Header />
        <Body />
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
  }
});
