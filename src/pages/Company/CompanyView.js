import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    ActivityIndicator
} from 'react-native'

import Spacer from '../../components/Util/Spacer'
import CompanyCard from './Components/CompanyCard'
import Button from '../../components/Buttons/Button'
import Divisor from '../../components/Util/Divisor'
import CompanyStyles from './CompanyStyles'

export default function CompanyView(props) {
    const {
        id,
        description,
        products,
        distance,
        name,
        rank,
        logo,
        image,
        qtdVotacoes,
        colors,
        type,
        language,
        navigation
    } = props

    const [votou, setVotou] = React.useState(false);
    const styles = CompanyStyles(colors)
    const [loading, setLoading] = React.useState(false);
    const [listProdutos, setListProdutos] = React.useState([]);

    React.useEffect(() => {
        console.log("COMPANY VIEW LOADED")
        setVotou(props.votou);
        setListProdutos(props.products);
    },[])

    function renderProducts() {
        return listProdutos.map((item, index) => {
            return (
                <View style={styles.productsCard} key={index}>
                    <Text
                        style={styles.productsCardTitle}
                    >{
                            item.nome.charAt(0).toUpperCase() + item.nome.slice(1)
                        }
                    </Text>
                    <Text style={styles.productsDescription}>{
                        item.descricao ? item.descricao.charAt(0).toUpperCase() + item.descricao.slice(1) : 'Sem descrição'
                    }</Text>
                </View>
            )
        })
    }


    return (
        <ScrollView style={styles.container}>
            <Spacer height={30} />
            <CompanyCard
                logo={logo}
                image={image}
                name={name}
                type={type}
                rank={rank}
                qtdVotacoes={qtdVotacoes}
                colors={colors}
                language={language}
            />
            {/* Spacer.------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Spacer height={30} />
            <Text style={styles.description}>{
                description ? description.charAt(0).toUpperCase() + description.slice(1) : 'Sem descrição'
            }</Text>
            {/* Spacer.-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Spacer height={10} />
            <Text style={styles.distance}>{
                distance ? `${distance / 10000} Km` : 'Sem distância'
            }</Text>
            {/* Spacer.------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Spacer height={40} />
            <View style={styles.buttons}>
                <Button
                    width={180}
                    height={50}
                    isDark={true}
                    onPress={() => {
                        props.onSubmitAdicionarProduto();
                    }}
                    keyText={'Sugerir Produto'}
                />
                <Button
                    width={180}
                    height={50}
                    isDark={false}
                    keyText={loading ? (
                        <ActivityIndicator size="small" color="#FFF" />
                    ) : (
                        <Text>{votou ? 'remover voto' : 'votar'}</Text>
                    )}
                    onPress={async () => {
                        setLoading(true)
                        var novoVoto = !votou;
                        setVotou(novoVoto);

                        await props.onSubmitVotar({
                            localId: id,
                            voto: novoVoto
                        })

                        setLoading(false)
                    }}
                />
            </View>
            <Spacer height={40} />

            <Text
                style={{
                    color: colors.textColor,
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>Produtos recomendados</Text>


            {listProdutos.length > 0 && listProdutos != undefined ? renderProducts() : <Text style={styles.productsDescription}>Nenhum produto encontrado</Text>}
            <Spacer height={20} />

        </ScrollView>
    )
}