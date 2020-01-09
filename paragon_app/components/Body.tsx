import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NonLoggedView } from './bodyComponents/NonLoggedView';
import { LoginView } from './bodyComponents/LoginView';
import { RegisterView } from './bodyComponents/RegisterView';
import { LoggedView } from './bodyComponents/LoggedView';

//enum loginStateE {Login, Register, None};

export class Body extends Component {

    constructor(props) {
        super(props);
    }

    logUser()
    {
        this.props.loggedSwitch(true);
    }

    render() {
        if(!this.props.logged)
        {
            if(this.props.loginState==="None")
            {
                return( <NonLoggedView loginStateHandle={this.props.loginStateSwitch.bind(this)}/> );
            }
            else if(this.props.loginState==="Login")
            {
                return (
                    <LoginView logUserHandle={this.logUser.bind(this)}/>
                );
            }
            else if(this.props.loginState==="Register")
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
                <LoggedView cameraSwitch={this.props.cameraSwitch.bind(this)}/>
            );
        }
    }
}