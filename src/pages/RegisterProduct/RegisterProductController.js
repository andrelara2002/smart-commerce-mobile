import React from 'react'
import { useSelector } from 'react-redux';

import RegisterProductView from './RegisterProductView';
import Loading from '../../components/Util/Loading';

export default function RegisterProductController(props) {

    const { navigation } = props;
    const [loading, setLoading] = React.useState(true);

    const [colors, setColors] = React.useState({});
    const [language, setLanguage] = React.useState({});
    const [settings, setSettings] = React.useState(useSelector(state => state.settings))

    const [registerProduct, setRegisterProduct] = React.useState({})

    async function getData() {
        await setColors(settings.app.colors);
        await setLanguage(settings.app.language);

        setLoading(false);
    }

    function onSubmit(data) {
        console.log(data)
        setRegisterProduct(data);
        navigation.goBack()
        //navigation.navigate('RegisterProductSuccess');
    }

    React.useEffect(() => {
        getData();
    })

    if (loading) {
        return <Loading />
    }

    return (
        <RegisterProductView
            navigation={navigation}
            colors={colors}
            language={language}
            onSubmit={onSubmit}
        />
    )

}
