// import React from 'react';
// import { StyleSheet, Text, View ,Image } from 'react-native';
// import  Greet from"./app/components/greet";
// import Somefile from "./app/components/somefile";
// import Takeinput from "./app/components/inputRN";
// import Pretty from "./app/components/pretty.js";
// import Display from "./app/components/display.js";
// import Login from "./app/components/login.js";
// import Signup from "./app/components/signup.js";
// import Todo from "./app/components/todo.js";

import React from 'react';
import { Text, 
  View, 
  StyleSheet, 
  Button,
  AsyncStorage  } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Dashboard from './Screens/Dashboard';
import Splash from './Screens/Splash';
import Login from './Screens/login';
import Signup from './Screens/signup';

const StackApp = StackNavigator({

  Splash: {
    screen: Splash
  },
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  Dashboard: {
    screen: Dashboard
  }
})
export default class extends React.Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    //var logIn = false;
    return (

      <View style={styless.container}>
        <StackApp />
      </View>
    );
  }
}
const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32CACB',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  Button: {
    justifyContent: 'center',
    fontWeight: 'bold',

  }
});