import React from 'react'

import { View, Text } from 'react-native'


export default function CompanyView(props) {
    const {
        id, description,
        products, distance,
        name, rank,
        qtdVotacoes,
    } = props

    return (
        <View>
            <Text>{id}</Text>
            <Text>{description}</Text>
            <Text>{products}</Text>
            <Text>{distance}</Text>
            <Text>{name}</Text>
            <Text>{rank}</Text>
            <Text>{qtdVotacoes}</Text>
        </View>
    )
}