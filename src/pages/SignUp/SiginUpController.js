import React from 'react'

import SignUpView from './SignUpView'

export default function SignUpController() {

    function SignUp(data) {
        console.log(data)
    }

    return <SignUpView SignUp={SignUp} />
}