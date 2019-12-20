import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NonLoggedView } from './bodyComponents/NonLoggedView';
import { LoginView } from './bodyComponents/LoginView';
import { RegisterView } from './bodyComponents/RegisterView';
import { LoggedView } from './bodyComponents/LoggedView';

//enum loginStateE {Login, Register, None};

export class Body extends Component {
    state = { logged: false,
        loginState: "None",
    };

    constructor(props) {
        super(props);
    }

    setLoginState(lState)
    {
        this.setState({
            loginState: lState
        })
    }

    logUser()
    {
        this.setState({
            logged: true
        });
    }

    render() {
        if(!this.state.logged)
        {
            if(this.state.loginState==="None")
            {
                return( <NonLoggedView loginStateHandle={this.setLoginState.bind(this)}/> );
            }
            else if(this.state.loginState==="Login")
            {
                return (
                    <LoginView logUserHandle={this.logUser.bind(this)}/>
                );
            }
            else if(this.state.loginState==="Register")
            {
                return (
                    <RegisterView/>
                );
            }
            return (
                <Text>Error: Unknown State</Text>
            );
        }
        else
        {
            return (
                <LoggedView cameraHandle={this.props.cameraHandle.bind(this)}/>
            );
        }
    }
}