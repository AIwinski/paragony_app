import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export class CameraView extends Component
{
	camera;

	async shootPicture()
	{
		console.log("shooted");
		//let picture = await Camera.takePictureAsync();
		let cameraOptions = {
			quality: 1,
			base64: false,
			exif: false,
		};
		let picture = await this.camera.takePictureAsync(cameraOptions);
		console.log(picture.uri);
	}

	exitCameraView()
	{
		this.props.cameraSwitch(false);
	}

	render()
	{
		return (
			<View style={styles.cameraContainer}>
				<Camera style={styles.camera} ref={(cam) => { this.camera = cam; }}>
					<View style={styles.cameraView}>
						<View style={styles.buttonRow}>
							<TouchableOpacity onPress={() => this.exitCameraView()}>
								<AntDesign name="back" style={styles.iconButton}/>
							</TouchableOpacity>
							<TouchableOpacity onPress={() => this.shootPicture()}>
								<FontAwesome name="camera" style={styles.iconButton}/>
							</TouchableOpacity>
						</View>
						<View style={{flex: 0.9}}></View>
					</View>
				</Camera>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  cameraContainer: {
		flex: 1
	},
	camera: {
		flex: 1,
	},
	cameraView: {
		flex: 1,
		backgroundColor: 'transparent',
		flexDirection: 'column-reverse',
		alignItems: 'center',
	},
	buttonRow: {
		flex: 0.1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	iconButton: {
		color: "#fff",
		fontSize: 40,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 20
	}
});