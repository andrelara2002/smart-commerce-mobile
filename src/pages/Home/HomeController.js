import React, { useEffect } from 'react';

import HomeView from './HomeView';
import { Text, View } from 'react-native';

import { getSettings, getUser } from '../../utils'

export default function HomeController(props) {

    //const { navigation } = props;
    const [settings, setSettings] = React.useState(props.route.params.settings);
    const [username, setUsername] = React.useState('');

    const [loading, setLoading] = React.useState(true);

    async function getSettingsFromStorage() {
        /* const settings = await getSettings(); */
        const username = await getUser();

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
            //navigation={navigation}
            colors={settings.app.colors}
            username={username}
        />

    )
}