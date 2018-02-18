import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './login';
import Signup from './signup';
import Dashboard from './Dashboard';
import App from '../App';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.logDecider = this.logDecider.bind(this);


  }
  async logDecider() {
    try {
      var loGin = await AsyncStorage.getItem('loGin');
      console.log(loGin);
      if (loGin === 'false') {
        this.props.navigation.navigate('Login');
      }
      else if (loGin === 'true') {
        this.props.navigation.navigate('Dashboard');
      }
      else {
        alert('error')
      }
    }
    catch (error) {
      alert('catch error');
    }
  }
  static navigationOptions = {
    title: "Welcome"
  }
  render() {
    const { navigate } = this.props.navigation
    let timerid = setTimeout(() => { clearInterval(); this.logDecider(); }, 2000);
    return (
      <View style={styless.container}>
        <TouchableHighlight
          style={styless.button}>
          <Text
            style={styless.text}>wellcome to Splash </Text>
        </TouchableHighlight>
      </View>
    );
  }
};
const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32CACB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  Button: {
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',

  }
});