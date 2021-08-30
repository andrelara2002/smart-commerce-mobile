import React from 'react';

import LoginView from './LoginView';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LoginController extends React.Component {

    constructor({ navigation }) {
        super();
        this.settings = JSON.parse(AsyncStorage.getItem('settings'));
    }

    render() {
        return (
            <LoginView
                lang={this.settings.app["language"]}
                navigation={navigation}
                colors={this.settings.app["colors"]}
            />
        );
    }
}