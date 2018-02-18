import React, { Component } from 'react';
import {
    StyleSheet,
    AppRegistry,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,

} from 'react-native';

export default class Display extends Component {
   
    render() {
                function onPressButton() {
                    alert("Button pressed");
                }
        return (
            <View style={styless.container}>
                <Image style={styless.image}
                    source={require('../assets/ic_logo_icon.png')}
                />
                <Text style={styless.text} >CONNEXION</Text>
                <TextInput style={styless.textin}
                    underlineColorAndroid="white"
                    placeholder={'      Email'}
                    placeholderTextColor="white"
                    editable={true}
                    marginTop={'8%'}
                />
                <TextInput style={styless.textin}
                    underlineColorAndroid="white"
                    placeholder={'      Mot de passe'}
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    editable={true}
                    maxLength={20}
                />
                <TouchableOpacity style={styless.button}
                    onPress={onPressButton} >
                    <Text style={styless.text}>ME CONNECTER</Text>
                </TouchableOpacity>
                <Text style={styless.text} >Mot de passe oublie?</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={styless.lineStyle} />
                    <Text style={styless.text}>ou</Text>
                    <View style={styless.lineStyle} />
                </View>
                <TouchableOpacity style={styless.button2}
                    onPress={onPressButton} >
                    <Image style={styless.image2}
                    source={require('../assets/facebook_logos_PNG19754.png')}
                />
                    <Text style={styless.text}>     FACEBOOK</Text>
                </TouchableOpacity>
                <Text style={styless.text}>Retour</Text>
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
    text: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        width: 120,
        marginTop: '3%',
        marginBottom: '1%'
    },
    textin: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 310,
        height: '8%',
        
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
    lineStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        width: 145,
        margin: '.5%',
        marginTop: '8%',
        marginBottom: '6%',
    },
    button2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 310,
        height: '7%',
        backgroundColor: '#295396',
        borderRadius: 64,
        marginTop: '2%',
        marginBottom: '20%'
    },
    image2: {
        height: 30,
        width: 30,
    },

});