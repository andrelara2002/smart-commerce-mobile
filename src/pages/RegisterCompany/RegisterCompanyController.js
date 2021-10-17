import React from 'react'
import ReactNative from 'react-native'

import RegisterCompanyView from './RegisterCompanyView'
import RegisterCompanyStyle from './RegisterCompanyStyles'
import { getCategoria, getUser, storeLocal, getLocal } from '../../utils'
import { useSelector } from 'react-redux'
import Loading from '../../components/Util/Loading';

//Api
import api from '../../services/api'

export default function RegisterCompanyController(props) {

    const { navigation } = props

    const [settings, setSettings] = React.useState(useSelector(state => state.settings))
    const [colors, setColors] = React.useState({})
    const [language, setLanguage] = React.useState({})
    const [categorias, setCategorias] = React.useState([]);

    const [loading, setLoading] = React.useState(true);

    async function onSubmit(data) {
        setLoading(true);
        const currentUser = await getUser();
        data.usuarioId = currentUser.id;

        console.log({ 'onSubmit.data': data })
        const localResponse = await api.post('/local', data).catch(error => { console.log(error) })

        if (localResponse != undefined && !localResponse.request._hasError) {

            var localDatas = await getLocal();
            localDatas = localDatas.concat(data);
            await storeLocal(localDatas);

            ReactNative.Alert.alert(
                '',
                'Local cadastrado com sucesso!',
                [{ text: 'OK' }],
                { cancelable: false }
            )
            //navigation.navigate('RegisterCompanySuccess')
            navigation.goBack()
        } else {
            ReactNative.Alert.alert(
                '',
                'Falja ao cadastrar o local, tente novamente!',
                [{ text: 'OK' }],
                { cancelable: false }
            )
        }

        setLoading(false);
    }
    async function getCategoriaFromStorage() {
        const categoria = await getCategoria();
        setCategorias(categoria);        
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