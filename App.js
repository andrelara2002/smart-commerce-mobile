import React from 'react';
import SplashScreen from 'react-native-splash-screen'

import { NavigationContainer } from '@react-navigation/native';
import LoginController from './src/pages/Login/LoginController';

import Navigator from './src/routes/homeStack'
import Settings from './src/services/settings'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    const settings = new Settings().getSettings();
  }

  componentDidMount(){
    SplashScreen.hide();
  }

  render() {
    return (
      <Navigator />
    )
  }
}