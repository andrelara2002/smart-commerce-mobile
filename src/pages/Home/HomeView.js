import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';


import DefaultColors from '../../assets/colors/DefaultColors';
import HomeHeader from './Headers/HomeHeader';

import { getUser, getUserToken, getSettings } from '../../utils'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: DefaultColors["dark"].background,
        padding: 20,
    },
    title: {
        fontSize: 40,
        color: DefaultColors["dark"].text,
    },
    subText: {
        fontSize: 20,
        color: DefaultColors["dark"].border,
    }
})

export default function HomeView(props) {

    const [user, setUser] = useState(null);
    const [language, setLanguage] = useState("pt_br");

    useEffect(() => {
        setVariables();
    })

    async function setVariables() {
        await getUser().then(user => {
            setUser(user.nomeCliente + ' ' + user.sobrenome)
        })
        await getSettings().then(settings => {
            setLanguage(settings.app.language)
        })
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <HomeHeader
                    name={user}
                    language={language}
                />
            </ScrollView>
        </View>
    )
}