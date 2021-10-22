import React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import api from '../../services/api'

import Loading from '../../components/Util/Loading'

import CompanyView from './CompanyView'
import { useSelector } from 'react-redux'

export default function CompanyController(props) {

    const { navigation } = props
    const [company, setCompany] = React.useState({})
    const [loading, setLoading] = React.useState(true)
    const settings = useSelector(state => state.settings)
    const [colors, setColors] = React.useState({})
    const [language, setLanguage] = React.useState({})

    async function onSubmitVotar(data) {
        const response = await api.post('/votacao', data).catch(error => { console.log(error) })
        company.votou = data.voto;
    }

    function onSubmitAdicionarProduto() {
        navigation.navigate('RegisterProduct', { company })
        getData()
    }

    function getData() {
        setColors(settings.app.colors)
        setLanguage(settings.app.language)
        setCompany(props.route.params.company)
        setLoading(false)
    }

    React.useEffect(() => {
        getData()
    })


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#22252e'
        }
    })

    if (loading) {
        return (
            <Loading />
        )
    }


    return (
        <View style={styles.container}>
            <CompanyView
                //Settings  
                colors={colors}
                language={language}
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
                onSubmitAdicionarProduto={onSubmitAdicionarProduto}
                navigation={navigation}
            />
        </View>
    )
}