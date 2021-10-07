import React from 'react'

import RegisterCompanyView from './RegisterCompanyView'
import RegisterCompanyStyle from './RegisterCompanyStyles'

import { useSelector } from 'react-redux'

export default function RegisterCompanyController(props) {

    const { navigation } = props

    const [settings, setSettings] = React.useState(useSelector(state => state.settings))
    const [colors, setColors] = React.useState({})
    const [language, setLanguage] = React.useState({})

    const [registerCompany, setRegisterCompany] = React.useState({})

    function onSubmit(data){
        setRegisterCompany(data)
        console.log(data)

        navigation.navigate('RegisterCompanySuccess')
    }

    React.useEffect(() => {
        setColors(settings.app.colors)
        setLanguage(settings.app.language)
    })

    return (
        <RegisterCompanyView
            navigation={navigation}
            colors={colors}
            language={language}
            onSubmit={onSubmit}
        />
    )
}