import React, { Component } from 'react';
import {ImageBackground, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { addReceipt } from '../api'

export class InsertView extends Component
{
    //try CAMERA_ROLL permission

    state = {
        hideForm: false,

        title: "",
        description: "",
    }

    hideForm()
    {
        this.setState({hideForm: true});
    }

    showForm()
    {
        this.setState({hideForm: false});
    }

    async uploadParagon()
    {
        console.log(this.state.title);
        console.log(this.state.description);
        console.log(this.props.picture);

        const pictureUri = this.props.picture.uri;
        const picture = {
            name: pictureUri.substring(pictureUri.lastIndexOf('/')+1),
            type: "image/" + pictureUri.substring(pictureUri.lastIndexOf('.')+1),
            uri: pictureUri.replace("file://", "")
        };
        console.log(picture);

        let response = await addReceipt(this.state.title, this.state.description,
            picture);
        console.log(response);

    }

    render() {
        if(!this.state.hideForm)
        {
            return(
                <ImageBackground source={this.props.picture} style={s.background}>
                    <View style={s.form}>
                        <TextInput style={s.input} placeholder="title"
                            onChangeText={(text) => this.setState({title: text})}
                            value={this.state.title}/>
                        <TextInput style={s.input}
                            placeholder="description"
                            multiline = {true}
                            numberOfLines = {4}
                            onChangeText={(text) => this.setState({description: text})}
                            value={this.state.description}/>
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
        else
        {
            return(
                <ImageBackground source={this.props.picture} style={s.background}>
                    <TouchableOpacity style={{width: '100%',height: '100%'}}
                        onPress={() => this.showForm()}>
                    </TouchableOpacity>
                </ImageBackground>
            );
        }
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