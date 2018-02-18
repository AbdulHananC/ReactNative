import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    AsyncStorage,
    TouchableHighlight,
    Text
} from 'react-native';

import Dashboard from './Dashboard';
import Splash from './Splash';
import Signup from './signup';
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { logIn: false};
        // var loGin = this.state.logIn;
        this.state = { userName: '' };
        this.state = { passWord: '' };
        this.displayData = this.displayData.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);




    }



    handleChangeText(username, password, logIn) {

        user = this.state.userName;
        AsyncStorage.user = JSON.stringify(user);
        AsyncStorage.setItem('user', user);

        pass = this.state.passWord;
        AsyncStorage.pass = JSON.stringify(pass);
        AsyncStorage.setItem('pass', pass);

        this.setState({ userName: '' })
        this.setState({ passWord: '' })
        console.log('function executed');
        console.log(user);
        console.log(pass);
        console.log('function executed');
        
        this.displayData();
        
        
        // var loGin = this.state.logIn;
        //this.state.logIn = true;
    }
    
    async displayData() {
        try {
            
            let user = await AsyncStorage.getItem('user');
            let pass = await AsyncStorage.getItem('pass');
            
            // this.props.navigation.push({
                //     id: 'Dashboard'
                // });
                // navigate("Dashboard", { screen: "Dashboard" })
                if (user !== User) {
                    alert('try again');
                }
                else {
                    if (pass === Pass) {
                        this.setState({ logIn: 'true' });
                        alert('Logged In');
                        this.props.navigation.navigate('Dashboard');
                }
                else {
                    alert('Error2');
                }
            }

        }
        catch (error) {
            alert(error);
        }
    }

    static navigationOptions = {
        title: "Sign In"
    }
    render() {
        const { navigate } = this.props.navigation;
        // const { params } = this.props.navigation.state;
        // const loGin = params ? params.loGin : loGin;
        return (
            <View style={styless.container}>
                <TextInput style={styless.textin}
                    placeholder="Enter username"
                    onChangeText={(username) => this.setState({ userName: username })}
                />
                <TextInput style={styless.textin}
                    placeholder="Enter password"
                    onChangeText={(password) => this.setState({ passWord: password })}
                />

                {/* <Button style={styless.button} onPress={this.handleChangeText} title='save' /> */}
                <Button
                    onPress={this.handleChangeText}
                    title='Sign In' />
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Signup')}
                    style={styless.button}>
                    <Text
                        style={styless.text}>if u r new user plz signup </Text>
                </TouchableHighlight>

            </View>
        )
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
        height: '10%',


    },
});