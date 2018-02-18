import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class Somefile extends React.Component {
   
    render() {
        function handleFunction(){
            alert("button pressd");
        }
        function handleFunction2(){
            alert("TouchableOpacity Pressd");
        }
        return (
            <View>
                <Button onPress={handleFunction} title = 'Clickme' />

                <TouchableOpacity onPress = {handleFunction2}>
                    <Text style = {mystyles.text}>This is Somefile</Text> 
                </TouchableOpacity> 
             </View>
        );
    }
}

const mystyles = StyleSheet.create({
    text : {
        color: 'blue',
    },
    myview:{
        backgroundColor: 'yellow'
    }  
})