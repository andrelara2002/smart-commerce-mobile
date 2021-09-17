import React, { useEffect } from 'react';

import HomeView from './HomeView';
import { Text, View } from 'react-native';

import { getSettings, getUser, getLocal } from '../../utils'

import { useSelector } from 'react-redux';

export default function HomeController(props) {

    /* const data = useSelector(state => state.settings);
    console.log(data); */

    //const { navigation } = props;
    /* const [settings, setSettings] = React.useState(props.route.params.settings); */
    const settings = useSelector(state => state.settings);
    const [username, setUsername] = React.useState('');
    const [locais, setLocais] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    async function getSettingsFromStorage() {
        /* const settings = await getSettings(); */
        const username = await getUser();
        const local = await getLocal();

        setLocais(local)
        setUsername(username.nomeCliente + ' ' + username.sobrenome)
        /* setSettings(settings); */

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
            //navigation={navigation}
            colors={settings.app.colors}
            username={username}
        />

    )
}