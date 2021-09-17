import React from 'react'

import { View, StyleSheet } from 'react-native'

import HotBarGraph from './HotBarGraph'

import DefaultColors from '../../../assets/colors/DefaultColors'

export default function MostVotted(props) {

    const [data, setData] = React.useState(props.data)

    const { accent, textColor, backgroundSecondary } = DefaultColors["dark"]


    const styles = StyleSheet.create({
        container: {
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
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
        }
    })

    function renderItens() {
        return data.map((item, index) => {
            return (
                <HotBarGraph
                    key={index}
                    image={item.imageURL}
                    title={item.nome}
                    qtdVotos={item.totalVotacao}
                    qtdTotalVotos={10000}
                    index={index}
                />
            )
        }
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.flatList}>
                {renderItens()}
            </View>
        </View>
    )
}