import React from 'react'

import { View, StyleSheet, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function Divisor({ height, text, position }) {

    const color = useSelector(state => state.settings.app.colors)

    if (height === undefined) { height = 1 }
    if (color === undefined) { color = '#2D2E38' }

    const styles = StyleSheet.create({
        divisor: {
            marginTop: height / 2,
            marginBottom: height / 2,

            borderBottomWidth: 1,
            borderBottomColor: color.accent,

            width: '100%'
        },
        text: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
            color: color.accent,
            alignSelf: position ? position : 'flex-start'
        }
    })

    return (
        <View style={styles.divisor} >
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}