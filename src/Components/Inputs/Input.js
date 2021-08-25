import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import DefaultColors from '../../res/colors/DefaultColors';

const {
    background,
    accent,
    sec_accent,
    trd_accent,
    border,
    deactivate,
    textColor
} = DefaultColors["dark"];

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: "100%"
    },
    input: {
        width : "100%",
        backgroundColor: border,
        borderRadius: 4,
        padding: 10,
        height: 60,
        fontSize: 24
    },
    text :{
        fontSize: 15,
        textTransform: "uppercase",
        color: border,
        marginBottom: 10
    }
});



export default function Input(props) {
    const { text, setText } = useState('')

    return (
        <View style={styles.container}>
            <Text style = {styles.text}>{props.label}</Text>
            <TextInput style={styles.input}
                onChangeText={text => setText(text)}
                defaultValue={text}
            />
        </View>
    )
}