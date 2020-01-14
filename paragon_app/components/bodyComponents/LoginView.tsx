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
    let response = await login(this.state.email, this.state.password);
    console.log(response);
    if( response != null && response.user != null && response.user.email === this.state.email )
    {
      this.props.logUserHandle();
    }
    else
    {
      if(typeof response.message === 'string')
        this.props.showInfoMessage(response.message);
      else
        this.props.showInfoMessage("Something went wrong");
      console.log(response);
    }
  }

  render() {
    return (
        <View style={s.bodyView}>
          <TextInput style={s.textInput} placeholder="email"
            onChangeText={(text) => this.setState({email: text})}/>
          <TextInput style={s.textInput} placeholder="password" secureTextEntry={true}
            onChangeText={(text) => this.setState({password: text})}/>
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

