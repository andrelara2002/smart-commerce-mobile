import React from 'react'
import { View } from 'react-native'

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
            await setCompany(companies.find(company => company.id === companyId))
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
        console.log("COMPANY CONTROLLER LOADED")
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <CompanyView
            //Settings  
            id={company.id}
            colors={settings.app.colors}
            language={settings.app.language}
            //Company Info
            name={company.name}
            description={company.description}
            image={company.image}
            logo={company.logo}
            rank={company.rank}
            qtdVotacoes={company.qtdVotacoes}
            products={company.products}
            distance={company.distance}
        />
    )
}