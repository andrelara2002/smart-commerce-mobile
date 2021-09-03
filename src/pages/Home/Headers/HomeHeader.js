import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import DefaultColors from '../../../assets/colors/DefaultColors'

import Texts from '../../../texts'

const {
    textColor,
    border } = DefaultColors["dark"]

const styles = StyleSheet.create({
    container: {},
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: textColor,
    },
    subtitle: {
        fontSize: 24,
        color: border
    }
})


export default function HomeHeader({ name, language }) {

    const [saudacao, setSaudacao] = useState('');
    const greetings = Texts[language].greetings;

    console.log(greetings)

    useEffect(() => {
        const time = new Date().getHours()

        if (time >= 0 && time < 12) {
            setSaudacao(greetings.good_morning)
        }
        else if (time >= 12 && time < 18) {
            setSaudacao(greetings.good_afternoon)
        }
        else {
            setSaudacao(greetings.good_night)
        }
    })

    return (
        <View>
            <Text style={styles.subtitle}>{saudacao}</Text>
            <Text style={styles.title}>{name}</Text>
        </View>
    )
}