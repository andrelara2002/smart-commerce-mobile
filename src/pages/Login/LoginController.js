import React from 'react';

import LoginView from './LoginView';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from '../../utils'


export default class LoginController extends React.Component {

    constructor({ navigation }) {
        super(navigation);
        this.settings = getUser();
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