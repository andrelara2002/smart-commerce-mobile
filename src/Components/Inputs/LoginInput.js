import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import InputTexts from './InputTexts';
import DefaultColors from '../../res/colors/DefaultColors'


export default function LoginInput(props) {

    const texts = InputTexts()[props.lang];
    const type = props.label + "_label";

    const {
        background,
        accent,
        sec_accent,
        trd_accent,
        border,
        deactivate,
        textColor
    } = DefaultColors["dark"];

    const style = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: border,
            padding: 10,
            borderRadius: 4,
            marginBottom: 10
        },
        label: {
            flex: 1,
            fontSize: 20,
            color: border,
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