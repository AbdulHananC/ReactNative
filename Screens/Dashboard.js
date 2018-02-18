import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';



export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logIn: 'false' };
    loGin = this.state.logIn;
    AsyncStorage.loGin = JSON.stringify(loGin);
    AsyncStorage.setItem('loGin', loGin);

  }
  static navigationOptions = {
    title: "Dashboard"
  }
  logout() {
    this.state = { logIn: 'false' };
    loGin = this.state.logIn;
    this.props.navigation.navigate('Splash');

  }
  render() {



    const { navigate } = this.props.navigation
    return (
      <View style={styless.container}>
        <Text style={styless.text}>Dashboard</Text>
        <Button
          onPress={this.logout.bind(this)}
          title='Log out' />
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
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});