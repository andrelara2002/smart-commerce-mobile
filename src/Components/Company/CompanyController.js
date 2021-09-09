import React from 'react'
import { View } from 'react-native'

import DefaultColors from '../../assets/colors/DefaultColors'
import CompanyView from './CompanyView'

import { companies } from '../../pages/Home/HomeCarrocel/FakeData'

export default function CompanyController(props) {

    const [colors, setColors] = React.useState(DefaultColors["dark"])
    const [company, setCompany] = React.useState({})
    const [companyId, setCompanyId] = React.useState(0)

    async function getCompany() {
        try {
            await setCompany(companies.find(company => company.id === companyId))
            console.log(company)
        }
        catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getCompany()
    })

    return (
        <CompanyView
            id={company.id}
            name={company.name}
            description={company.description}
            image={company.image}
            logo={company.logo}
            colors={colors}
            rank={company.rank}
            qtdVotacoes={company.qtdVotacoes}
            products={company.products}
            distance={company.distance}
        />
    )
}