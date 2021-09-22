import React from 'react'

import SignUpView from './SignUpView'

export default function SignUpController(props) {
    const navigation = props.navigation;

    return <SignUpView navigation={navigation} />
}