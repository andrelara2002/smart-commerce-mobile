import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    Image
} from 'react-native'

import Spacer from '../Util/Spacer'
import CompanyCard from './Components/CompanyCard'
import Button from '../Buttons/Button'
import Divisor from '../Util/Divisor'

export default function CompanyView(props) {
    const {
        id, description,
        products, distance,
        name, rank, logo, image,
        qtdVotacoes, colors, type, language
    } = props


    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: colors.background,
            paddingLeft: 40,
            paddingRight: 40
        },
        description: {
            fontSize: 16,
            color: colors.textColor,
            fontWeight: '100',
        },
        distance: {
            fontSize: 14,
            color: colors.accent,
            fontStyle: 'italic',
        },
        products: {},
        productsCard: {
            padding: 10,
            borderRadius: 5,
            backgroundColor: colors.background,
        },
        productsCardImage: {
            width: 100,
            height: 100,
            borderRadius: 5,
        },
        productsCardTitle: {
            fontSize: 16,
            marginTop: 5,
            paddingLeft: 10,
            color: colors.textColor,
            fontWeight: "bold",
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
        }
    })

    React.useEffect(() => {
        console.log("COMPANY VIEW LOADED")
    })

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
            <Text style={styles.description}>{description}</Text>
            {/* Spacer.-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Spacer height={10} />
            <Text style={styles.distance}>{`${distance / 10000} Km`}</Text>
            {/* Spacer.------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <Spacer height={40} />
            <View style={styles.buttons}>
                <Button
                    width={200}
                    height={50}
                    isDark={true}
                    keyText={'Sugerir Produto'}
                />
                <Button
                    width={120}
                    height={50}
                    isDark={false}
                    keyText={'Votar'}
                />
            </View>
            <Spacer height={40} />

            <Text
                style={{
                    color: colors.textColor,
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>Produtos</Text>
            <FlatList
                horizontal={true}
                data={products}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => {
                    //console.log(item.image)
                    return (
                        <View style={styles.productsCard}>
                            <Image
                                source={item.image}
                                style={styles.productsCardImage}
                            />
                            <Text
                                style={styles.productsCardTitle}
                            >{item.name}</Text>
                        </View>
                    )
                }} />
            <Divisor height={20} color={colors.backgroundSecondary} />
        </ScrollView>
    )
}