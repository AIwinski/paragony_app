import React, { Component } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';
import { login } from '../../api'

export class LoginView extends Component {

  state = {
    login: "",
    password: "",
  }

  async submitAction() {
    console.log(this.state.email);
    console.log(this.state.password);
    let response = await register(this.state.email, this.state.password);
    console.log(response);
    //this.props.logUserHandle();
  }

  render() {
    return (
        <View style={s.bodyView}>
          <TextInput style={s.textInput} placeholder="email"/>
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

