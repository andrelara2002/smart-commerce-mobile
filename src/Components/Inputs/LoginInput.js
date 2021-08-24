import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import InputTexts from './InputTexts';

export default function LoginInput(props) {

    const texts = InputTexts()[props.lang];
    const type = props.label + "_label";

    const style = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: '#ddd',
            padding: 10,
            borderRadius: 12,
            margin: 20
        },
        label: {
            flex: 1,
            fontSize: 20,
            color: '#ffffff',
            textAlign: 'center',
        },
        input: {
            flex: 3,
            fontSize: 20,
            color: '#ffffff'
        },
    }
    );

    return (
        <View style={style.container}>
            <TextInput style={style.input}></TextInput>
            <Text style={style.label}>
                {texts[type]}
            </Text>
        </View>
    )
}