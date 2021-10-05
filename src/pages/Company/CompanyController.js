import React from 'react'
import { View, StyleSheet } from 'react-native'

/* import DefaultColors from '../../assets/colors/DefaultColors' */
import Loading from '../../components/Util/Loading'
import CompanyView from './CompanyView'
import { useSelector } from 'react-redux'

export default function CompanyController(props) {

    const [company, setCompany] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const settings = useSelector(state => state.settings)

    async function getCompany() {
        try {
            await setCompany(props.route.params.company)
        }
        catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        setLoading(true)
        getCompany()
        setLoading(false)
    })

    if (loading) {
        return <Loading />
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
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
            />
        </View>
    )
}