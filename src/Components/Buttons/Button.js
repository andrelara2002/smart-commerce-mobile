import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import DefaultColors from '../../assets/colors/DefaultColors';

const { background, accent, textColor, border, backgroundSecondary } = DefaultColors["dark"];


export default function Button({ onPress, keyText, isDark, width, style, height }) {

    const [backgroundColor, setBackgroundColor] = useState(accent);
    const [newWidth, setNewWidth] = useState("100%");
    const [newHeight, setNewHeight] = useState(60);
    const [flex, setFlex] = useState(1);

    const styles = style || StyleSheet.create({
        container: {
            /* flex: flex, */
            width: newWidth,
            height: 0,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
            marginRight: 0,
            /* borderWidth: 1, */
        },
        touchable: {
            backgroundColor: backgroundColor,
            width: newWidth,
            height: newHeight,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            opacity: 1,
        },
        text: {
            color: textColor,
            fontSize: 15,
            fontWeight: "bold",
            textAlign: "center",
            textTransform: "uppercase",
        }
    })

    useEffect(() => {
        if (isDark) { setBackgroundColor(backgroundSecondary) }
        if (width != null || width != undefined) { setNewWidth(width) }
        if (height != null || height != undefined) { setNewHeight(height) }
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

