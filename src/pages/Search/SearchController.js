import React, { useEffect } from 'react'

import { getSettings } from '../../utils';

import Loading from '../../components/Util/Loading';
import SearchView from './SearchView'

export default function SearchController(props) {

    const [settings, setSettings] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    async function getSettingsFromStorage() {
        try {
            const settings = props.route.params.settings
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