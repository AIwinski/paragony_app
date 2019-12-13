import React, { Component } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

export class RegisterView extends Component {

  submitAction() {

  }

  render() {
    return (
        <View style={s.bodyView}>
          <TextInput style={s.textInput} placeholder="Login"/>
          <TextInput style={s.textInput} placeholder="Password"/>
          <TextInput style={s.textInput} placeholder="Repeat Password"/>
          <Button onPress={() => this.submitAction()} title="Register"/>
        </View>
    );
  }
}

var s = require('./bodyComponentsStyle');