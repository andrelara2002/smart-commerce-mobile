import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import api from '../../services/api'

/* import DefaultColors from '../../assets/colors/DefaultColors' */
import Loading from '../../components/Util/Loading'
import CompanyView from './CompanyView'
import { useSelector } from 'react-redux'

export default function CompanyController(props) {

    const [company, setCompany] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    const settings = useSelector(state => state.settings)

    async function onSubmitVotar(data) {
        //setLoading(true);
        console.log({ 'onSubmitVotar.data': data })
        const response = await api.post('/votacao', data).catch(error => { console.log(error) })
        // if (response != undefined && !response.request._hasError) {
        //     Alert.alert(
        //         '',
        //         'Votou!',
        //         [{ text: 'OK' }],
        //         { cancelable: false }
        //     )
        // } else {
        //     Alert.alert(
        //         '',
        //         'Falha ao votar!',
        //         [{ text: 'OK' }],
        //         { cancelable: false }
        //     )
        // }
        company.votou = data.voto;
        //setCompany(company);
        //setLoading(false);
    }

    function getCompany() {
        try {
            setCompany(props.route.params.company)
        }
        catch (error) {
            console.log(error)
        }
    }

    React.useEffect(async () => {
        getCompany()
        setLoading(false);
    }, [])

    if (loading) {
        return <Loading />
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#22252e'
        }
    })


    return (
        <View style={styles.container}>
            <CompanyView
                //Settings  
                colors={settings.app.colors}
                language={settings.app.language}
                //Company Info
                name={company.nome}
                description={company.descricao}
                image={company.imageURL}
                logo={company.imageURL}
                rank={1}
                qtdVotacoes={company.totalVotacao}
                products={company.produtos}
                distance={0}
                votou={company.votou}
                id={company.id}
                onSubmitVotar={onSubmitVotar}

            />
        </View>
    )
}