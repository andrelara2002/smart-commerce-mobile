import React from 'react'

/* import { getSettings } from '../../utils'; */
import ComingSoon from '../../components/Util/ComingSoon';
import Loading from '../../components/Util/Loading';

export default function MapController(props) {

    const [settings, setSettings] = React.useState({})
    const [loading, setLoading] = React.useState(true)

    async function getSettingsFromStorage() {
        try {
            const settings = props.route.params.settings
            await setSettings(settings);
            setLoading(false);
        }
        catch (e) {
            console.log(e);
        }
    }

    React.useEffect(() => {
        getSettingsFromStorage();
        console.log("MAP CONTROLLER LOADED")
    })

    if (loading) {
        return <Loading />
    }

    return (
        <ComingSoon
            colors={settings.app.colors}
            language={settings.app.language}
            text={"Mapa indisponível no momento"}
        />
    )
}