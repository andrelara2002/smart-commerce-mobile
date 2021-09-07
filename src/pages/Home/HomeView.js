import React, { useState, useEffect } from 'react';

import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

// Configurações padrão ->

import DefaultColors from '../../assets/colors/DefaultColors';


import { getUser, getUserToken, getSettings } from '../../utils'

const {
    background,
    textColor,
    border } = DefaultColors["dark"];

// <- Configurações padrão

// Componentes customizados ->

import HomeHeader from './Headers/HomeHeader';
import HomeCarrocel from './HomeCarrocel/HomeCarrocel';
import MostVotted from '../../components/Graphs/HorBarGraph/MostVotted';

// <- Componentes customizados

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: background,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: textColor,
    },
    subText: {
        fontSize: 20,
        color: border,
    }
})

export default function HomeView(props) {

    const [user, setUser] = useState(null);
    const [language, setLanguage] = useState("pt_br");

    async function setVariables() {

        await getUser().then(user => {
            setUser(user.nomeCliente + ' ' + user.sobrenome)
        })

        await getSettings().then(settings => {
            setLanguage(settings.app.language)
        })
    }

    useEffect(() => {
        setVariables();
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                <HomeHeader
                    name={user}
                    language={language}
                />
                <HomeCarrocel />
                <MostVotted />
            </ScrollView>
        </View>
    )
}