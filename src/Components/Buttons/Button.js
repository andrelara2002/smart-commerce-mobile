import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import DefaultColors from '../../assets/colors/DefaultColors';

const { background, accent, textColor } = DefaultColors["dark"];

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    touchable: {
        backgroundColor: accent,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    text: {
        color: textColor,
        fontSize: 20,
        textAlign: "center",
        textTransform: "uppercase",
    }
})

export default function Button({ text, onPress }) {


    if (text === null || text === undefined) {
        text = "button"
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}