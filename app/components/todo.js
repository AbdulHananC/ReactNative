import React, { Component } from 'react';

import {
    StyleSheet,
    ListView,
    Text,
    View,
    TextInput,
    Button,
    AsyncStorage
} from 'react-native';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        
        this.state = {
            dataSource: ds.cloneWithRows([
                'Buy milk',
                'Walk the dog',
                'Do laundry',
                'Write the first chapter of my book',

            ]),
            value: '',
            text: '',
        }; this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleChangeText(changeText) {

        let TexT = this.state.text;
        console.log(TexT);
        AsyncStorage.TexT = JSON.stringify(TexT);
        AsyncStorage.setItem('TexT', TexT);
        this.setState({value: 'TexT'});
        this.setState({ text: '' });

    }
    render() {
        return (<View style={styless.container}>
            <TextInput style={styless.textin}
                placeholder="Enter ur task"
                onChangeText={(changeText) => this.setState({ text: changeText })}
            />

            <Button style={styless.button} onPress={this.handleChangeText} title='Enter' />
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                    <Text>{rowData}</Text>}
            />
        </View>
        );
    }
}
const styless = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32CACB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {

        alignItems: 'center',
        justifyContent: 'center',
        width: 310,
        height: '7%',
        backgroundColor: '#88E5E6',
        borderRadius: 64,
        marginTop: '8%',
        marginBottom: '3%'
    },
    textin: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 310,
        height: '20%',


    },

});