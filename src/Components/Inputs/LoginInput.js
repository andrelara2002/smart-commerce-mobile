import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import InputTexts from './InputTexts';

export default function LoginInput(props) {

    texts = InputTexts()[props.lang];

    return (
        <View>
            <Text>
                {texts.username_label}
            </Text>
        </View>
    )
}