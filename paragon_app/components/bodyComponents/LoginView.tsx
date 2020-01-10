import React, { Component } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

export class LoginView extends Component {

  submitAction() {
    this.props.logUserHandle();
  }

  render() {
    return (
        <View style={s.bodyView}>
          <TextInput style={s.textInput} placeholder="nickname"/>
          <TextInput style={s.textInput} placeholder="password"/>
          <View style={s.buttonRow}>
            <View style={s.buttonView}>
              <Button onPress={() => this.props.loginStateSwitch("Register")} title="Return to Register"/>
            </View>
            <View style={s.buttonView}>
              <Button onPress={() => this.submitAction()} title="login"/>
            </View>
            </View>
        </View>
    );
  }
}

var s = require('./bodyComponentsStyle');

