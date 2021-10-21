import React from 'react'

import { useSelector } from 'react-redux'

import SettingsView from './SettingsView'
import Loading from '../../components/Util/Loading'

export default function SettingsController(props) {
    const settings = useSelector(state => state.settings)
    const theme = useSelector(state => state.settings.app.colors.theme)

    const colors = useSelector(state => state.settings.app.colors)
    const [loading, isLoading] = React.useState(true)

    async function load() {
/*         await setColors()
 */        isLoading(false)
    }

    React.useEffect(() => {
        load()
    })

    if (loading) {
        <Loading />
    }

    return (
        <SettingsView
            colors={colors}
            settings={settings}
            theme={theme}
        />
    )
}