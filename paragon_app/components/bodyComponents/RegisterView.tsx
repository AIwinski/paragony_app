import React, { Component } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

export class RegisterView extends Component {

  state = {
    email: null,
    password: null,
    rpassword: null
  }

  emailChange(text) {
    this.setState({email: text});
  }

  submitAction() {
    
  }

  render() {
    return (
        <View style={s.bodyView}>
          <TextInput style={s.textInput} placeholder="Email"
            onChangeText={(text) => this.emailChange(text)}/>
          <TextInput style={s.textInput} placeholder="Password"/>
          <TextInput style={s.textInput} placeholder="Repeat Password"/>
          <View style={s.buttonRow}>
            <View style={s.buttonView}>
              <Button onPress={() => this.props.loginStateSwitch("Login")} title="Return to Login"/>
            </View>
            <View style={s.buttonView}>
              <Button onPress={() => this.submitAction()} title="Register"/>
            </View>
          </View>
        </View>
    );
  }
}

var s = require('./bodyComponentsStyle');