import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Input(props) {
    const { text, setText } = useState('')
    const [type, setType] = useState(props.type || 'text')

    const {
        background,
        accent,
        sec_accent,
        trd_accent,
        border,
        deactivate,
        textColor,
        backgroundSecondary
    } = props.colors;

    const styles = StyleSheet.create({
        container: {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: "100%",
            marginTop: 10,
        },
        input: {
            width: "100%",
            backgroundColor: backgroundSecondary,
            borderRadius: 4,
            padding: 10,
            height: 60,
            fontSize: 24,
            color: textColor
        },
        text: {
            fontSize: 15,
            textTransform: "uppercase",
            color: border,
            marginBottom: 10
        }
    });
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.label}</Text>
            <TextInput style={styles.input}
                onChangeText={text => props.onChangeText(text)}
                defaultValue={text}
                secureTextEntry={type === 'password'}
            />
        </View>
    )
}