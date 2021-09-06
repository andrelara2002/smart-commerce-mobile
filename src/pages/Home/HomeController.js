import React from 'react';

import HomeView from './HomeView';

import { getUser } from '../../utils'

export default class HomeController extends React.Component {

    constructor({ navigation }) {
        super(navigation);
        this.settings = getUser();
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