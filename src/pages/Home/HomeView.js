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

import { getUser, getUserToken, getSettings } from '../../utils'

/* const {
    background,
    textColor,
    border } = DefaultColors["dark"];
 */
// <- Arquivos de configurações

// Componentes customizados ->

import HomeHeader from './Headers/HomeHeader';
import HomeCarrocel from './HomeCarrocel/HomeCarrocel';
import MostVotted from '../../components/Graphs/HorBarGraph/MostVotted';
import Spacer from '../../components/Util/Spacer';
import Title from '../../components/Util/Title';

// <- Componentes customizados

export default function HomeView(props) {

    const {
        background,
        textColor,
        border } = props.colors;

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

    const [user, setUser] = useState(props.username || '');
    const [language, setLanguage] = useState(props.lang || "en");

    const sessions_title = texts[language].sessions_title

    async function setVariables() {

        /* await getUser().then(user => {
            setUser(user.nomeCliente + ' ' + user.sobrenome)
        }) */

        /* await getSettings().then(settings => {
            setLanguage(settings.app.language)
        }) */
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
                <Spacer height={20} />
                <Title text={sessions_title.close_to_you} />
                <HomeCarrocel navigation={props.navigation} />
                <Spacer height={20} />
                <Title text={sessions_title.most_voted} />
                <MostVotted text={texts[language].sessions_title.see_more} />
                <Spacer height={30} />
            </ScrollView>
        </View>
    )
}