import React from 'react'

import { View, StyleSheet } from 'react-native'

export default function Divisor({ height, color }) {

    if (height === undefined) { height = 1 }
    if (color === undefined) { color = '#2D2E38' }

    const styles = StyleSheet.create({
        divisor: {
            marginTop: height / 2,
            marginBottom: height / 2,

            borderBottomWidth: 1,
            borderBottomColor: color,

            width: '100%'
        }
    })

    return (
        <View style={styles.divisor} />
    )
}