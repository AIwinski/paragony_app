import React, { Component } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { Camera } from 'expo-camera';

export class CameraView extends Component
{
	shootPicture()
	{
		console.log("shooted");
	}

	render()
	{
		return (
			<View style={styles.cameraContainer}>
				<Camera style={styles.camera}>
					<View style={styles.cameraView}>
						<Button title="shoot" onPress={() => this.shootPicture()}/>
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