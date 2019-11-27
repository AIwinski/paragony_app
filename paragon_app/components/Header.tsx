import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Header extends Component {
  render() {
    return (
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Paragon App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
});