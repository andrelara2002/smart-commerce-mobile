import React from 'react'
import { View } from 'react-native'

/* import DefaultColors from '../../assets/colors/DefaultColors' */
import Loading from '../Util/Loading'
import CompanyView from './CompanyView'

import { getSettings } from '../../utils'

import { companies } from '../../pages/Home/HomeCarrocel/FakeData'

export default function CompanyController(props) {

    const [company, setCompany] = React.useState({})
    const [companyId, setCompanyId] = React.useState(0)
    const [loading, setLoading] = React.useState(true)
    const [settings, setSettings] = React.useState({})

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
            const settings = await getSettings()
            await setSettings(settings)
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