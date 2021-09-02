import React from 'react';
import SplashScreen from 'react-native-splash-screen'

import { NavigationContainer } from '@react-navigation/native';
import LoginController from './src/pages/Login/LoginController';

import { getUserToken } from './src/utils';

import Navigator from './src/routes/homeStack'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Navigator />
    )
  }
}