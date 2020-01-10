import React, { Component } from 'react';
import { Button, View } from 'react-native';
import { Camera } from 'expo-camera';

export class LoggedView extends Component {
    addParagon() {
        console.log("add paragon");
        this.props.cameraSwitch("ShootPicture");
    }

    async componentDidMount()
    {
        console.log("mounted logged view");
        const{status}  = await Camera.requestPermissionsAsync();
        if (status === 'granted') {
            console.log("succes");
        } else {
            console.log("no permission");
        }
    }
  
    render() {
        return (
            <View style={s.bodyView}>
                <Button title="+" onPress={()=>this.addParagon()}/>
            </View>
        );
    }
}

var s = require('./bodyComponentsStyle');