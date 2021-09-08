import React, { useState, useEffect } from 'react';

import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

// Arquivos de configurações ->

import DefaultColors from '../../assets/colors/DefaultColors';
import texts from '../../texts';

const sessions_title = texts["pt_br"].sessions_title

import { getUser, getUserToken, getSettings } from '../../utils'

const {
    background,
    textColor,
    border } = DefaultColors["dark"];

// <- Arquivos de configurações

// Componentes customizados ->

import HomeHeader from './Headers/HomeHeader';
import HomeCarrocel from './HomeCarrocel/HomeCarrocel';
import MostVotted from '../../components/Graphs/HorBarGraph/MostVotted';
import Spacer from '../../components/Util/Spacer';
import Title from '../../components/Util/Title';

// <- Componentes customizados

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: background,
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
                <Spacer height={30} />
                <Title text={sessions_title.close_to_you} />
                <HomeCarrocel />
                <Spacer height={30} />
                <Title text={sessions_title.most_voted} />
                <MostVotted />
                
                <Spacer height={30} />
            </ScrollView>
        </View>
    )
}