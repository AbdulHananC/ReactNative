import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';




export default class Drawer extends React.Component {
  constructor(props) {
    super(props);


  }
  static navigationOptions = {
    DrawerLable: "Drawer"
  }

  render() {



    const { navigate } = this.props.navigation
    return (
      <View style={styless.container}>
        <Text style={styless.text}>Drawer</Text>
    
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
  text: {
    fontSize: 50,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});