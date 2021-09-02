import React from 'react';

export default function Loading({ navigation }) {
    const isLogged = true;

    if (isLogged) {
        // User is logged
        navigation.navigate('App');
    }
    else {
        // User is not logged
        navigation.navigate('Login');
    }

    return null
}