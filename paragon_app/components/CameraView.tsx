import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';

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

	render()
	{
		return (
			<View style={styles.cameraContainer}>
				<Camera style={styles.camera} 
					ref={(cam) => { this.camera = cam; }}>
					<View style={styles.cameraView}>
						<TouchableOpacity onPress={() => this.shootPicture()}>
							<FontAwesome name="camera" style={{ color: "#fff", fontSize: 40}}/>
						</TouchableOpacity>
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
	}
});