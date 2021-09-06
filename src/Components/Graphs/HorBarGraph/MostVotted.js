import React from 'react'

import { View, FlatList, Text, StyleSheet } from 'react-native'

import HotBarGraph from './HotBarGraph'
import { mostVotted } from '../../../pages/Home/HomeCarrocel/FakeData'

import DefaultColors from '../../../assets/colors/DefaultColors'

export default function MostVotted(props) {

    const data = mostVotted

    const { accent, textColor, backgroundSecondary } = DefaultColors["dark"]

    const styles = StyleSheet.create({
        container: {
            padding: 20,
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
            color: textColor,
        },
        flatList: {
            backgroundColor: backgroundSecondary,
            padding: 10,
            borderRadius: 10,
            width: '98%',
        }
    })

    function renderItens() {
        return data.map((item, index) => {
            return (
                <HotBarGraph
                    key={index}
                    image={item.image}
                    title={item.title}
                    qtdVotos={item.qtdVotos}
                    qtdTotalVotos={item.qtdTotalVotos}
                    index={index}
                />
            )
        }
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Most Votted</Text>
            <View style={styles.flatList}>
                {renderItens()}
            </View>
        </View>
    )
}