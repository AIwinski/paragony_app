import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import {Header} from './components/Header';
import {Body} from './components/Body';
import {CameraView} from './components/CameraView';

export default class App extends Component {
  state = {
    openCamera: false
  }

  openCamera()
  {
    this.setState({
      openCamera: true
    });
  }

  render() {
    //console.log("aplikacja uruchomiona");
    if(!this.state.openCamera)
    {
      return (
        <View style={styles.container}>
          <Header />
          <Body cameraHandle={this.openCamera.bind(this)}/>
        </View>
      );
    }
    else
    {
      return(
        <CameraView/>
      )
    }
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 32,
  }
});
