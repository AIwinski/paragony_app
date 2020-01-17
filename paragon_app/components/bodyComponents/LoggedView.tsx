import React, { Component } from 'react';
import { Button, View, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { ParagonComponent } from './loggedViewComponents/ParagonComponent';
import { getAllReceipts, API_URL } from '../../api'
import { ReceiptList } from './ReceiptList';

export class LoggedView extends Component {
    testImageUri = "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg";

    state = {
        paragons: [],
    }

    addParagon() {
        console.log("add paragon");
        this.props.cameraSwitch("ShootPicture");
    }

    async componentDidMount()
    {
        console.log("mounted logged view");
        const{ status: cameraStatus }  = await Camera.requestPermissionsAsync();
        const{ status: transferStatus } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        console.log( cameraStatus );
        console.log( transferStatus );
        if (cameraStatus === 'granted' && transferStatus === 'granted') {
            console.log("succes");
        } else {
            console.log("no permission");
        }

        let response = await getAllReceipts();
        console.log('============GET_ALL==============');
        console.log(response);
        console.log('=================================')
        if(response != null && response.receipts != null)
        {
            let paragons_a = [];
            response.receipts.forEach((p)=>{
                paragons_a.push(<ParagonComponent uri={API_URL + "/" + p.urlPath}/>);
                console.log(API_URL + "/" + p.urlPath);
            });
            this.setState({paragons: paragons_a});
        }
    }

    getTestParagons()
    {
        let paragonComponents = [];
        for(i = 0; i < 5; i++)
            paragonComponents.push(<ParagonComponent uri={this.testImageUri}/>);
        return paragonComponents;
    }

    render() {
        return (
            <ScrollView style={s.bodyScrollView}>
                <Button title="+" onPress={()=>this.addParagon()}/>
                <ReceiptList></ReceiptList>
            </ScrollView>
        );
    }
}

var s = require('./bodyComponentsStyle');
