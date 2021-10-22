import React from 'react'
import ReactNative from 'react-native'
import { useSelector } from 'react-redux'

import RegisterCompanyView from './RegisterCompanyView'
import { getCategoria, storeLocal, getLocal } from '../../utils'
import api from '../../services/api'

export default function RegisterCompanyController(props) {

    const { navigation } = props

    const [settings, setSettings] = React.useState(useSelector(state => state.settings))
    const [colors, setColors] = React.useState({})
    const [language, setLanguage] = React.useState({})
    const [categorias, setCategorias] = React.useState([]);


    async function onSubmit(data) {
        const response = await api.post('/local', data).catch(error => { console.log(error) })

        if (response != undefined && !response.request._hasError) {
            data.id = response.data.data
            var localDatas = await getLocal();
            localDatas = localDatas.concat(data);
            await storeLocal(localDatas);
            
            navigation.replace('Company', { company: data })
        } else {
            ReactNative.Alert.alert(
                '',
                'Falha ao cadastrar o local, tente novamente!',
                [{ text: 'OK' }],
                { cancelable: false }
            )
        }
    }

    async function getData() {
        setColors(settings.app.colors)
        setLanguage(settings.app.language)

        const categoria = await getCategoria();
        setCategorias(categoria);
    }

    React.useEffect(() => {
        getData();
    }, [])

    return (
        <RegisterCompanyView
            navigation={navigation}
            colors={colors}
            language={language}
            onSubmit={onSubmit}
            categorias={categorias}
        />
    )
}