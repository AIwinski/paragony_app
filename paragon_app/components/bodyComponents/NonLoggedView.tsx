import React, { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';

export class NonLoggedView extends Component {

  render() {
    return (
        <View style={s.bodyView}>
            <View style={s.buttomView}>
                <Button title="Login" onPress={() => this.props.loginStateHandle("Login")}/>
            </View>
            <View style={s.buttomView}>
                <Button title="Register" onPress={() => this.props.loginStateHandle("Register")}/>
            </View>
        </View>
    );
  }
}

var s = require('./bodyComponentsStyle');