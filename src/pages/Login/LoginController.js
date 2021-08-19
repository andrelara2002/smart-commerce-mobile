import React from 'react';

import LoginView from './LoginView';

export default class LoginController extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            language: 'pt_br'
        }
    }

    render() {
        return (
            <LoginView lang = {this.state.language}/>
        );
    }
}