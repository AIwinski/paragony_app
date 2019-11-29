import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NonLoggedView } from './bodyComponents/NonLoggedView';

//enum loginStateE = {Login, Register, None};

export class Body extends Component {
    state = { logged: false,
        loginState: "None",
        };

    constructor(props) {
        super(props);
    }

    render() {
        if(!this.state.logged)
        {
            if(this.state.loginState==="None")
            {
                return( <NonLoggedView/> );
            }
            else if(this.state.loginState==="Login")
            {
                return (
                    <Text>Developing...</Text>
                );
            }
            else if(this.state.loginState==="Register")
            {
                return (
                    <Text>Developing...</Text>
                );
            }
        }
        else
        {
            return (
                <Text>Logged</Text>
            );
        }
        return (
            <Text>error</Text>
        );
    }
}

const styles = StyleSheet.create({
    bodyView:{
        borderRadius: 20,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
      },
    buttomView: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10
      }
});