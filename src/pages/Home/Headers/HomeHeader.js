import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

import LevelButton from '../../../components/Buttons/LevelButton'
import Button from '../../../components/Buttons/Button'

import Texts from '../../../texts'
import diamond from '../../../assets/image/diamond.png'
import defaultLogo from '../../../assets/image/FakeData/Logos/defaultLogo.png'

export default function HomeHeader({ name, language, colors, navigation, image }) {

    const styles = StyleSheet.create({
        container: {
            padding: 30,
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: colors.backgroundSecondary,
        },
        greetings: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
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
        },
        image: {
            width: 70,
            height: 70,
            borderRadius: 40,
            marginRight: 20,
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


    function mountImage() {
        if (image) {
            return (
                <Image
                    style={styles.image}
                    source={{ uri: image }}
                />
            )
        } else {
            return (
                <Image
                    style={styles.image}
                    source={defaultLogo}
                />
            )
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.greetings}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('User') }}
                >
                    {mountImage()}
                </TouchableOpacity>
                <View>
                    <Text style={styles.subtitle}>{saudacao}</Text>
                    <Text style={styles.title}>{name}</Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.darkButton}
                    onPress={() => {
                        navigation.navigate("RegisterCompany")
                    }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: colors.textColor,
                    }}>Adicionar local</Text>
                </TouchableOpacity>
                <LevelButton
                    text={200}
                    image={diamond}
                    onPress={() => {
                        navigation.navigate("RegisterProduct")
                    }} />
            </View>
        </View>
    )
}