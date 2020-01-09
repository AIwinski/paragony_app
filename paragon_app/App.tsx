import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import {Header} from './components/Header';
import {Body} from './components/Body';
import {CameraView} from './components/CameraView';

export default class App extends Component {
  state = {
    openCamera: false,
    logged: false,
    loginState: "None",
  }

  cameraSwitch(state)
  {
    this.setState({
      openCamera: state
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

  render() {
    //console.log("aplikacja uruchomiona");
    if(!this.state.openCamera)
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
    else
    {
      return(
        <CameraView cameraSwitch={this.cameraSwitch.bind(this)}/>
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
