import React from 'react'
import { View, StyleSheet } from 'react-native'

/* import DefaultColors from '../../assets/colors/DefaultColors' */
import Loading from '../../components/Util/Loading'
import CompanyView from './CompanyView'

import { useSelector } from 'react-redux'

import { companies } from '../Home/HomeCarrocel/FakeData'

export default function CompanyController(props) {

    const [company, setCompany] = React.useState({})
    const [companyId, setCompanyId] = React.useState(0)
    const [loading, setLoading] = React.useState(true)
    const settings = useSelector(state => state.settings)

    async function getCompany() {
        try {
            /* await setCompany(companies.find(company => company.id === companyId)) */
            await setCompany(props.route.params.company)
        }
        catch (error) {
            console.log(error)
        }
    }

    async function getSettingsFromStorage() {
        try {
            /* const settings = props.route.params.settings
            await setSettings(settings) */
            setLoading(false)
            //console.log(settings.app.language)
        }
        catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getSettingsFromStorage()
        getCompany()
        console.log(props.route.params)
        console.log("COMPANY CONTROLLER LOADED")
    }, [])

    if (loading) {
        return <Loading />
    }

    const styles = StyleSheet.create({
        container:{
            flex:1,
        }
    })

    return (
        <View style={styles.container}>
            <CompanyView
            //Settings  
            id={companyId}
            colors={settings.app.colors}
            language={settings.app.language}
            //Company Info
            name={company.nome}
            description={company.segmento.descricao}
            image={company.imageURL}
            logo={company.imageURL}
            rank={1}
            qtdVotacoes={company.totalVotacao}
            products={company.produtos}
            distance={0}
        />
        </View>
    )
}