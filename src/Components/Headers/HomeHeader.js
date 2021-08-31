import React, { useEffect } from 'react'

import { View, Text, StyleSheet } from 'react-native'

import DefaultColors from '../../assets/colors/DefaultColors'
const {
    border,
    textColor
} = DefaultColors["dark"]

const styles = StyleSheet.create({
    container: {},
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: textColor
    },
    subtitle: {
        fontSize: 20,
        color: border
    }
})

export default function HomeHeader(props) {
    return (
        <View>
            <Text style={styles.subtitle}>Bom dia</Text>
            <Text style={styles.title}>André</Text>
        </View>
    )
}