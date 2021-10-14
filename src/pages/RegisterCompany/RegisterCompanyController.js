import React from 'react'
import ReactNative from 'react-native'

import RegisterCompanyView from './RegisterCompanyView'
import RegisterCompanyStyle from './RegisterCompanyStyles'
import { getCategoria } from '../../utils'
import { useSelector } from 'react-redux'
import Loading from '../../components/Util/Loading';

export default function RegisterCompanyController(props) {

    const { navigation } = props

    const [settings, setSettings] = React.useState(useSelector(state => state.settings))
    const [colors, setColors] = React.useState({})
    const [language, setLanguage] = React.useState({})
    const [categorias, setCategorias] = React.useState([]);

    const [registerCompany, setRegisterCompany] = React.useState({})
    const [loading, setLoading] = React.useState(true);

    function onSubmit(data) {
        setRegisterCompany(data)
        console.log(data)
        ReactNative.Alert.alert(
            '',
            'Local cadastrado com sucesso!',
            [{ text: 'OK' }],
            { cancelable: false }
        )
        //navigation.navigate('RegisterCompanySuccess')
        navigation.goBack()
    }
    async function getCategoriaFromStorage() {
        const categoria = await getCategoria();
        setCategorias(categoria);
        //console.log({ 'categorias: ': categorias })
        setLoading(false);
    }

    React.useEffect(async () => {
        setColors(settings.app.colors)
        setLanguage(settings.app.language)
        await getCategoriaFromStorage();

    }, [])

    if (loading) {
        return <Loading />
    }

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