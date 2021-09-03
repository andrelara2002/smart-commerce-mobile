import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import DefaultColors from '../../assets/colors/DefaultColors';

const { background, accent, textColor, border, backgroundSecondary } = DefaultColors["dark"];


export default function Button({ onPress, keyText, isDark, width }) {

    const [backgroundColor, setBackgroundColor] = useState(accent);
    const [newWidth, setNewWidth] = useState("100%");
    const [flex, setFlex] = useState(1);

    const styles = StyleSheet.create({
        container: {
            flex: flex,
            width: newWidth,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
        },
        touchable: {
            backgroundColor: backgroundColor,
            width: newWidth,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4
        },
        text: {
            color: textColor,
            fontSize: 15,
            textAlign: "center",
            textTransform: "uppercase",
        }
    })

    useEffect(() => {
        if (isDark) { setBackgroundColor(backgroundSecondary) }
        if (width != null || width != undefined) { setNewWidth(width) }
        if (flex != null || flex != undefined) { setFlex(flex) }
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={onPress}>
                <Text style={styles.text}>{keyText}</Text>
            </TouchableOpacity>
        </View>
    )
}

