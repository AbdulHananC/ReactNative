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
  import { TabNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import Dashboard from './Screens/Drawers/Dashboard';
import Splash from './Screens/Stacks/Splash';
import Login from './Screens/Tabs/login';
import Signup from './Screens/Tabs/signup';
import Drawer from './Screens/Drawers/drawer';

const TabApp = TabNavigator({
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
})

const DrawerNavigation = DrawerNavigator({
  Dashboard: {
    screen: Dashboard
  },
  Drawer:{
    screen: Drawer
  },
})

const StackApp = StackNavigator({

  Splash: {
    screen: Splash
  },
  Login: {
    screen: TabApp
  },
  Dashboard: {
    screen: DrawerNavigation
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
        {/* <DrawerNavigation /> */}
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