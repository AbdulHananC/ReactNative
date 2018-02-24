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
        this.state = {multi:[]};
        this.handleChangeText1 = this.handleChangeText1.bind(this);

        
    }

    async  handleChangeText1(username,password) {
           

        for(i = 0; i<= this.state.multi.length; i++){
              
          
        User = this.state.USERName;
        AsyncStorage.User = JSON.stringify(User);
        AsyncStorage.setItem('User', User);

        Pass = this.state.PASSWord;
        AsyncStorage.Pass = JSON.stringify(Pass);
        AsyncStorage.setItem('Pass', Pass);
        
        this.setState({ USERName: '' })
        this.setState({ PASSWord: '' })
        this.state.multi.push({
            USERName : this.state.USERName,
            PASSWord : this.state.PASSWord
        });
        await AsyncStorage.setItem('multi',JSON.stringify(this.state.multi))
        // multi = JSON.parse(AsyncStorage.getItem('multi'));
        console.log("signup "+this.state.multi[i].USERName)
        this.props.navigation.navigate('Login');
        break;
    }
}
    static navigationOptions = {
        title: "Sign up"
      }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styless.container}>
                <TextInput style={styless.textin}
                    placeholder="Enter Email"
                    onChangeText={(username) => this.setState({ USERName: username })}
                    value = {this.state.USERName}
                
                />
                <TextInput style={styless.textin}
                    placeholder="Enter password"
                    secureTextEntry = {true}
                    maxLength = {40}
                    minLength = {5}
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