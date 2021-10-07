import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react'

import RegisterCompanyController from '../RegisterCompany/RegisterCompanyController';

import { NavigationContainer } from '@react-navigation/native';


export default function RegisterStack() {
    const Stack = createStackNavigator()

    function Register() {
        return (
            <Stack.Navigator initialRouteName="RegisterCompany">
                <Stack.Screen
                    name="RegisterCompany"
                    component={RegisterCompanyController} />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Register />
        </NavigationContainer>
    )
}