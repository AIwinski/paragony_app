import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Paragon App</Text>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 32,
  },
  headerView: {
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  headerText: {
    fontSize: 32,
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
