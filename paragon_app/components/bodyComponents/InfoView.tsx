import React, { Component } from 'react';
import { StyleSheet, Button, View, Text} from 'react-native';

export class InfoView extends Component {
    render() {
        return (
            <View style={s.bodyView}>
                <Text>{this.props.infoMessage}</Text>
                <Button title="Ok" onPress={()=>this.props.closeInfo()}/>
            </View>
        );
    }
}

var s = require('./bodyComponentsStyle');