import React from 'react';

import LoginView from './LoginView';

import { getSettings } from '../../utils';
import Loading from '../../components/Util/Loading';


export default function LoginController(props) {

    const [loading, setLoading] = React.useState(true);
    const [settings, setSettings] = React.useState({});

    const navigation = props.navigation;

    async function getSettingsFromStorage() {
        const settings = await getSettings()
        setSettings(settings);
        setLoading(false);
    }

    React.useEffect(() => {
        getSettingsFromStorage();
    }, [])


    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <LoginView
            lang={settings.app.language}
            navigation={navigation}
            colors={settings.app.colors}
        />
    );

}