import React from 'react';

// Components ->

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {
    createMaterialBottomTabNavigator
} from '@react-navigation/material-bottom-tabs';


// <- Components

// Importação de Telas ->

import HomeController from '../../pages/Home/HomeController';
import LoginController from '../Login/LoginController';

// <- Importação de Telas 


const Tab = createMaterialBottomTabNavigator();

export default function MainNavigation() {
    return
}