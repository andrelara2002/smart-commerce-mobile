import React, { useEffect } from 'react'

import { getSettings } from '../../utils';

import Loading from '../../components/Util/Loading';
import SearchView from './SearchView'

export default function SearchController() {

    const [settings, setSettings] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    async function getSettingsFromStorage() {
        try {
            const settings = await getSettings();
            setSettings(settings);
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSettingsFromStorage();
        console.log('SEARCH CONTROLLER LOADED');
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <SearchView
            lang={settings.app.language}
            colors={settings.app.colors}
        />
    )
}