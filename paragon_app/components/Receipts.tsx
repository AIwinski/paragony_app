import React, { Component } from 'react';
import { API_URL } from '../api'
import { StyleSheet, View, Text, Image } from 'react-native';

export class Receipt extends Component {

    render() {
        const imageUrl = API_URL + "/" + this.props.imageUrl;
        console.log(imageUrl);
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.description}>{this.props.description}</Text>
                <Image source={{uri: imageUrl}} style={styles.image} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        width: "100%"
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    description: {
        color: 'red',
    },
    image: {
        width: 50,
        height: 50
    }
});
