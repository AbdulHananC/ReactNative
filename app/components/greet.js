import React from 'react';
import { View, Text } from 'react-native';

export default class Greet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: 'john doe',
            showName: false,
            message : this.props.message
        }
    }
    render() {
        let Name = this.state.showName ? this.state.Name : this.state.Name = 'no name found';
        let message = this.state.message = 'stay blessed';
        return (
            <View>
                <Text>{message}</Text>
                <Text>{Name}</Text>
            </View>
        );
    }
}