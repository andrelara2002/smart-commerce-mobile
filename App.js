import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import LoginController from './src/pages/Login/LoginController';

import Navigator from './src/routes/homeStack'
import Settings from './src/services/settings'

export default function App() {

  const settings = new Settings().getSettings();

  return (
    <Navigator settings={settings} />
  )
}