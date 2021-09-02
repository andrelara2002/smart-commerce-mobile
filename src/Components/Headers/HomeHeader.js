import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import DefaultColors from '../../assets/colors/DefaultColors'

const styles = StyleSheet.create({
    container: {},
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    subtitle: {
        fontSize: 15,
        color: '#fff'
    }
})

export default function HomeHeader({ name }) {
    return (
        <View>
            <Text style={styles.subtitle}>Bom dia</Text>
            <Text style={styles.title}>{name}</Text>
        </View>
    )
}