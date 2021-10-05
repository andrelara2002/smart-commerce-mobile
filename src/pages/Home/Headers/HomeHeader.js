import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import LevelButton from '../../../components/Buttons/LevelButton'
import Button from '../../../components/Buttons/Button'

import Texts from '../../../texts'
import diamond from '../../../assets/image/diamond.png'

/* const {
    textColor,
    border,
    backgroundSecondary } = DefaultColors["dark"]
 */

export default function HomeHeader({ name, language, colors }) {

    const styles = StyleSheet.create({
        container: {
            padding: 30,
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: colors.backgroundSecondary,
        },
        title: {
            fontSize: 40,
            fontWeight: 'bold',
            color: colors.textColor,
        },
        subtitle: {
            fontSize: 24,
            color: colors.border
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
        },
        darkButton: {
            backgroundColor: colors.backgroundSecondary,
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 10,
            marginRight: 20,
            height: 60,
            width: '60%',
        }
    })
    

    const [saudacao, setSaudacao] = useState('');
    const greetings = Texts[language].greetings;

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
        <View style={styles.container}>
            <Text style={styles.subtitle}>{saudacao}</Text>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.darkButton}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: colors.textColor,
                    }}>Adicionar local</Text>
                </TouchableOpacity>
                <LevelButton text={200} image={diamond} />
            </View>
        </View>
    )
}