import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import NavigationTabScreen from './pages/NavigationTab/NavigationTabScreen';
import LoginController from './pages/Login/LoginController';
import AuthLoadingScreen from './pages/AuthLoading/AuthLoadingScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Switch = createSwitchNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            headerMode="none"
            name="StackNavigator"
        >
            <Stack.Screen name="Home" component={NavigationTabScreen} />
        </Stack.Navigator>
    )
}

function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="SignIn"
            headerMode="none"
            name="AuthStack"
        >
            <Stack.Screen name="SignIn" component={LoginController} />
            <Stack.Screen name="App" component={StackNavigator} />
        </Stack.Navigator>
    )
}

/* const RootStack = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStack,
        App: StackNavigator,
    },
    {
        initialRouteName: 'AuthLoading',
        headerMode: 'none',
        header: null,
    },
); */

function RootStack() {
    return (
        <Switch.Navigator
            initialRouteName="AuthLoading"
            headerMode="none"
            name="RootStack"
        >
            <Switch.Screen name="AuthLoading" component={AuthLoadingScreen} />
            <Switch.Screen name="Auth" component={AuthStack} />
            <Switch.Screen name="App" component={StackNavigator} />
        </Switch.Navigator>
    )
}

function AppContainer() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    )
}

export default AppContainer