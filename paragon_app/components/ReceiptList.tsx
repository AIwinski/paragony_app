import { getAllReceipts } from '../../api'
import React, { Component } from 'react';
import { View, FlatList} from 'react-native';
import { Receipt } from './Receipt';

export class ReceiptList extends Component {

    state = {
        receipts: []
    }
    componentDidMount(): void {
        getAllReceipts().then((res => {
            this.setState({receipts: res.data.receipts});
        }));
    }

    render() {
        return (
            <View>
                <FlatList data={this.state.receipts} renderItem={({item}) => <Receipt key={item._id} title={item.title} description={item.description} imageUrl={item.urlPath}></Receipt>} />
            </View>
        );
    }
}

