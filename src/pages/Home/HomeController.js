import React, { useEffect } from 'react';

import HomeView from './HomeView';
import { Text, View } from 'react-native';

import { getSettings, getUser, getLocal } from '../../utils'

import { useSelector } from 'react-redux';

export default function HomeController(props) {

    const settings = useSelector(state => state.settings);
    const [username, setUsername] = React.useState('');
    const [locaisVotacao, setLocaisVotacao] = React.useState([]);
    const [locais, setLocais] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    async function getSettingsFromStorage() {

        const username = await getUser();
        const local = await getLocal();

        setLocais(local.slice(1, 10));
        setLocaisVotacao(
            local
                .sort(function (a, b) {
                    if (a.totalVotacao < b.totalVotacao) {
                        return 1;
                    }
                    if (a.totalVotacao > b.totalVotacao) {
                        return -1;
                    }
                    return 0;
                })
                .slice(1, 6));

        setUsername(username.nomeCliente)
        setLoading(false);
    }

    useEffect(() => {
        getSettingsFromStorage();

        props.navigation.setParams({
            companyid: null
        })
        console.log("HOME CONTROLLER LOADED")
    }, [])

    /* constructor({ navigation }) {
        super(navigation);
        this.settings = getUser();
    } */

    if (loading) {
        return <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: "#252731"
        }} />
    }

    return (
        <HomeView
            lang={settings.app.language}
            locais={locais}

            navigation={props.navigation}

            locaisVotacao={locaisVotacao}

            //navigation={navigation}
            colors={settings.app.colors}
            username={username}
        />

    )
}