import React from 'react'
import { useSelector } from 'react-redux';

import RegisterProductView from './RegisterProductView';

export default function RegisterProductController(props) {

    const { navigation } = props;
    const [colors, setColors] = React.useState({});
    const [settings, setSettings] = React.useState(useSelector(state => state.app.settings))

    React.useEffect(() => {

    })

    return (
        <RegisterProductView />
    )
}
