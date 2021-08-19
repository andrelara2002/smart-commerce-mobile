import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginTexts from '../../texts';

export default function LoginView(props) {

    texts = LoginTexts()[props.lang];

    return (
        <View>
            <Text>
                {texts.login_introduction}
            </Text>
        </View>
    )
}