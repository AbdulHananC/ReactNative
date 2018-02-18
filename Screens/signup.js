import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    AsyncStorage
} from 'react-native';

import Login from './login';
export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { USERName: '' };
        this.state = { PASSWord: '' };
        this.handleChangeText1 = this.handleChangeText1.bind(this);

        
    }

      handleChangeText1(username,password) {
          
        
              
          
        User = this.state.USERName;
        AsyncStorage.User = JSON.stringify(User);
        AsyncStorage.setItem('User', User);

        Pass = this.state.PASSWord;
        AsyncStorage.Pass = JSON.stringify(Pass);
        AsyncStorage.setItem('Pass', Pass);
        
        this.setState({ USERName: '' })
        this.setState({ PASSWord: '' })
        console.log("signup"+User+Pass)

        this.props.navigation.navigate('Login');
}
    static navigationOptions = {
        title: "Sign up"
      }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styless.container}>
                <TextInput style={styless.textin}
                    placeholder="Enter username"
                    onChangeText={(username) => this.setState({ USERName: username })}
                    value = {this.state.USERName}
                
                />
                <TextInput style={styless.textin}
                    placeholder="Enter password"
                    onChangeText={(password) => this.setState({ PASSWord: password })}
                    value = {this.state.PASSWord}
                />

                <Button  style={styless.button} onPress={this.handleChangeText1} title='Sign Up' />

                {/* <Button onPress={this.displayData} title='signup' /> */}

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
        marginTop: '4%',
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