import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import {Header} from './components/Header';
import {Body} from './components/Body';
import {CameraView} from './components/CameraView';
import {InsertView} from './components/InsertView';

export default class App extends Component {
  state = {
    camera: "Close",//{Close, ShootPicture, Insert}
    logged: false,
    loginState: "None",//{Login, Register, None}

  }

  takenPictureUri = null;

  cameraSwitch(state)
  {
    this.setState({
      camera: state
    });
  }

  loggedSwitch(state: boolean)
  {
    this.setState({
      logged: state
    });
  }

  loginStateSwitch(state)
  {
    console.log(state);
    this.setState({
      loginState: state
    });
  }

  savePicture(uri)
  {
    this.takenPictureUri = uri;
  }

  render() {
    //console.log("aplikacja uruchomiona");
    if(this.state.camera==="Close")
    {
      return (
        <View style={styles.container}>
          <Header />
          <Body cameraSwitch={this.cameraSwitch.bind(this)}
            loggedSwitch={this.loggedSwitch.bind(this)}
            loginStateSwitch={this.loginStateSwitch.bind(this)}
            logged={this.state.logged}
            loginState={this.state.loginState}/>
        </View>
      );
    }
    else if(this.state.camera==="ShootPicture")
    {
      return(
        <CameraView cameraSwitch={this.cameraSwitch.bind(this)}
        savePicture={this.savePicture.bind(this)}/>
      );
    }
    else if(this.state.camera==="Insert")
    {
      return(
        <InsertView picture={this.takenPictureUri} cameraSwitch={this.cameraSwitch.bind(this)}/>
      );
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
