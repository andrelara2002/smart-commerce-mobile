import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import LoginController from './src/pages/Login/LoginController';

import Navigator from './src/routes/homeStack'

export default function App() {
  return (
    <Navigator />
  )
}