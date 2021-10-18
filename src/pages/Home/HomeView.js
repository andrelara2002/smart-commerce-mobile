import React, { useState, useEffect } from 'react';

import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

// Arquivos de configurações ->

import texts from '../../texts';
import HomeStyles from './HomeStyles'

// <- Arquivos de configurações

// Componentes customizados ->

import HomeHeader from './Headers/HomeHeader';
import HomeCarrocel from './HomeCarrocel/HomeCarrocel';
import MostVotted from '../../components/Graphs/HorBarGraph/MostVotted';
import Spacer from '../../components/Util/Spacer';
import Title from '../../components/Util/Title';

// <- Componentes customizados

export default function HomeView(props) {

    const styles = HomeStyles(props.colors)

    const [user, setUser] = useState(props.username || '');
    const [language, setLanguage] = useState(props.lang || "en");
    const sessions_title = texts[language].sessions_title

    useEffect(() => {       
        console.log("HOME VIEW LOADED")     
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <HomeHeader
                    navigation={props.navigation}
                    name={user}
                    language={language}
                    colors={props.colors}
                />
                <Spacer height={20} />
                <Title text={sessions_title.close_to_you} />
                <HomeCarrocel
                    navigation={props.navigation}
                    data={props.locais} />
                <Spacer height={20} />
                <Title text={sessions_title.most_voted} />
                <MostVotted text={texts[language].sessions_title.see_more} data={props.locaisVotacao} />
                <Spacer height={30} />
            </ScrollView>
        </View>
    )
}