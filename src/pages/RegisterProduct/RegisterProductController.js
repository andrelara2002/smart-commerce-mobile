import React from 'react'
import ReactNative from 'react-native'

import { useSelector } from 'react-redux';

import RegisterProductView from './RegisterProductView';
import Loading from '../../components/Util/Loading';
import api from '../../services/api'

export default function RegisterProductController(props) {

    const { navigation } = props;
    
    const settings = useSelector(state => state.settings)
    const [colors, setColors] = React.useState({})
    const [language, setLanguage] = React.useState({})
    const [company, setCompany] = React.useState({})

    function getData() {
        setColors(settings.app.colors)
        setLanguage(settings.app.language)
        setCompany(props.route.params.company)
    }

    async function onSubmit(data) {
        console.log({ 'onSubmit.data': data })

        const response = await api.post('/produto', data).catch(error => { console.log(error) })
        if (response != undefined && !response.request._hasError) {
            data.id = response.data.data
            company.produtos.push(data);
            navigation.goBack();            
            props.route.params.company = company;

        } else {
            ReactNative.Alert.alert(
                '',
                'Falha ao cadastrar o local, tente novamente!',
                [{ text: 'OK' }],
                { cancelable: false }
            )
        }

    }

    React.useEffect(() => {
        getData();
    }, [])

    return (
        <RegisterProductView
            localId={company.id}
            navigation={navigation}
            colors={colors}
            language={language}
            onSubmit={onSubmit}
        />
    )

}
