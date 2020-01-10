import React, { Component } from 'react';
import {ImageBackground, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export class InsertView extends Component
{
    state = {
        hideForm: false
    }

    hideForm()
    {
        console.log("hide form");
    }

    uploadParagon()
    {
        console.log("upload paragon");
    }

    render() {
        return(
            <ImageBackground source={this.props.picture} style={s.background}>
                <View style={s.form}>
                    <TextInput style={s.input} placeholder="category"/>
                    <TextInput style={s.input} placeholder="title"/>
                    <TextInput style={s.input}
                        placeholder="description"
                        multiline = {true}
                        numberOfLines = {4}/>
                    <View style={s.bottomRow}>
                        <TouchableOpacity onPress={() => this.props.cameraSwitch("ShootPicture")}>
                            <AntDesign name="back" style={s.iconButton}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.hideForm()}>
                            <AntDesign name="picture" style={s.iconButton}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.uploadParagon()}>
                            <AntDesign name="upload" style={s.iconButton}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const s = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: "white",
        padding: 5,
        marginRight: 32,
        marginLeft: 32,
        marginTop: 10,
        marginBottom: 10
    },
    bottomRow: {
        flexDirection: 'row',
		justifyContent: 'space-between',
    },
    iconButton: {
		color: "#fff",
        fontSize: 40,
    }
});