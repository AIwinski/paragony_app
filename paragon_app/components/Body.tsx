import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

//enum loginStateE = {Login, Register, None};

export class Body extends Component {
    state = { logged: false,
        loginState: "None",
        };

    render() {
        let body;
        if(!this.state.logged)
        {
            if(this.state.loginState==="None")
            {
                return( <View style={styles.bodyView}>
                            <View style={styles.buttomView}>
                                <Button title="Login"/>
                            </View>
                            <View style={styles.buttomView}>
                                <Button title="Register"/>
                            </View>
                        </View>);
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