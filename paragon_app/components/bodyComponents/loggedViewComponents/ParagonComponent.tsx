import React, { Component } from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';

export class ParagonComponent extends Component
{
    render() {
        console.log(this.props.uri);
        return (
            <View style={s.view}>
                <TouchableOpacity>
                    <Image source={{uri: this.props.uri}} style={s.image}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const s = StyleSheet.create({
    view: {
        backgroundColor: 'red'
    },
    image: {
        aspectRatio: 4/3,
        width: 200
    },
});