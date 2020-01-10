import React, { Component } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

export class RegisterView extends Component {

  state = {
    email: null,
    password: null,
    rpassword: null,

    wrongEmail: false,
    wrongPassword: false
  }

  emailChange(text) {
    this.setState({email: text});
    //if()
  }

  passwordChange(text) {
    this.setState({password: text});
  }

  rpasswordChange(text) {
    this.setState({rpassword: text});
  }

  validStyle(valid: boolean)
  {
    if(valid)
      return(s.textInput);
    else
      return(s.textInputInvalid);
  }

  submitAction() {
  }

  render() {
    return (
        <View style={s.bodyView}>
          <TextInput style={this.validStyle(!this.state.wrongEmail)} placeholder="Email"
            onChangeText={(text) => this.emailChange(text)}/>
          <TextInput style={this.validStyle(!this.state.wrongPassword)} placeholder="Password"
            onChangeText={(text) => this.passwordChange(text)}/>
          <TextInput style={this.validStyle(!this.state.wrongPassword)} placeholder="Repeat Password"
            onChangeText={(text) => this.rpasswordChange(text)}/>
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