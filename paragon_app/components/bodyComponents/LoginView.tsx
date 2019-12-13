import React, { Component } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

export class LoginView extends Component {

  submitAction() {

  }

  render() {
    return (
        <View style={s.bodyView}>
          <TextInput style={s.textInput} placeholder="nickname"/>
          <TextInput style={s.textInput} placeholder="Password"/>
          <Button onPress={() => this.submitAction()} title="login"/>
        </View>
    );
  }
}

var s = require('./bodyComponentsStyle');

