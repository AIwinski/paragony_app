import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';

export class NonLoggedView extends Component {

  render() {
    return (
        <View style={styles.bodyView}>
            <View style={styles.buttomView}>
                <Button title="Login" onPress={() => this.props.loginStateHandle("Login")}/>
            </View>
            <View style={styles.buttomView}>
                <Button title="Register" onPress={() => this.props.loginStateHandle("Register")}/>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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