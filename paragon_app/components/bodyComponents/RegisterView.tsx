import React, { Component } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';
import { register } from '../../api'

export class RegisterView extends Component {

  state = {
    email: "",
    password: "",
    rpassword: "",

    wrongEmail: false,
    wrongPassword: false
  }

  emailChange(text) {
    this.setState({email: text});
    let em = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    if(em.test(text) && this.state.wrongEmail || text.length === 0)
    {
      this.setState({wrongEmail: false});
    }
    else if(!em.test(text) && !this.state.wrongEmail)
    {
      this.setState({wrongEmail: true});
    }
  }

  passwordChange(text) {
    this.setState({password: text});
    if(text.length > 7 && text === this.state.rpassword && this.state.wrongPassword || (text.length === 0 && this.state.rpassword.length === 0))
      this.setState({wrongPassword: false});
    else if(text.length < 7 || text !== this.state.rpassword && !this.state.wrongPassword)
    {
      this.setState({wrongPassword: true});
    }
  }

  rpasswordChange(text) {
    this.setState({rpassword: text});
    if(text.length > 7 && text === this.state.password && this.state.wrongPassword || (text.length === 0 && this.state.password.length === 0))
      this.setState({wrongPassword: false});
    else if(text.length < 7 || text !== this.state.password && !this.state.wrongPassword)
    {
      this.setState({wrongPassword: true});
    }
  }

  validStyle(valid: boolean)
  {
    if(valid)
      return(s.textInput);
    else
      return(s.textInputInvalid);
  }

  async submitAction() {
    console.log(this.state.email);
    console.log(this.state.password);
    let response = await register(this.state.email, this.state.password);
    if( response.user.email === this.state.email )
    {
      this.props.logUserHandle();
      this.props.showInfoMessage("Succesfully registered");
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
          <TextInput style={this.validStyle(!this.state.wrongEmail)} placeholder="Email"
            onChangeText={(text) => this.emailChange(text)}/>
          <TextInput style={this.validStyle(!this.state.wrongPassword)} placeholder="Password (min. 8 characters)"
            onChangeText={(text) => this.passwordChange(text)}
            secureTextEntry={true}/>
          <TextInput style={this.validStyle(!this.state.wrongPassword)} placeholder="Repeat Password"
            onChangeText={(text) => this.rpasswordChange(text)}
            secureTextEntry={true}/>
          <View style={s.buttonRow}>
            <View style={s.buttonView}>
              <Button onPress={() => this.props.loginStateSwitch("Login")} title="Return to Login"/>
            </View>
            <View style={s.buttonView}>
              <Button onPress={() => this.submitAction()} title="Register"
                disabled={this.state.wrongEmail || this.state.wrongPassword
                || this.state.email.length === 0 || this.state.password.length === 0 }/>
            </View>
          </View>
        </View>
    );
  }
}

var s = require('./bodyComponentsStyle');