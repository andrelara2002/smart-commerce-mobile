import React from 'react'

import { getUser } from '../../utils'

import UserView from './UserView'
import Loading from '../../components/Util/Loading'
import { useSelector } from 'react-redux'
import UserStyles from './UserStyles'

export default function UserController(props) {

    const [userdata, setUserdata] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    const [settings, setSettings] = React.useState(useSelector(state => state.settings))
    const styles = UserStyles(settings.app.colors)

    async function getUserData() {
        const user = await getUser()
        setUserdata(user)
        setLoading(false)
    }

    React.useEffect(() => {
        getUserData()
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <UserView
            username={userdata.nomeCliente}
            styles={styles}
        />
    )
}