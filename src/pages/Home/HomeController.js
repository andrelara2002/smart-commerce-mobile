import React from 'react';

import HomeView from './HomeView';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default class HomeController extends React.Component {

    constructor({ navigation }) {
        super();
        this.settings = JSON.parse(AsyncStorage.getItem('settings'));
    }

    render() {

        return (
            <HomeView
                lang={this.settings.app["language"]}
                navigation={navigation}
                colors={this.settings.app["colors"]}
            />
        );
    }
}