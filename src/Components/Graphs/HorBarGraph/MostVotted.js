import React from 'react'

import { View, FlatList, Text, StyleSheet } from 'react-native'

import HotBarGraph from './HotBarGraph'
import { mostVotted } from '../../../pages/Home/HomeCarrocel/FakeData'

export default function MostVotted(props) {

    const data = mostVotted

    const styles = StyleSheet.create({
        container: {
            padding: 20,
        }
    })

    return (
        <View style={styles.container}>
            <Text>Most Votted</Text>
            <FlatList
                data={data}
                renderItem={({ item, index }) =>
                    <HotBarGraph
                        image={item.image}
                        title={item.title}
                        qtdVotos={item.qtdVotos}
                        qtdTotalVotos={item.qtdTotalVotos}
                        index={index}
                    />}
            />
        </View>
    )
}