import React from 'react'

import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import FakeData from './FakeData'

import NormalCard from './NormalCard'

export default function HomeCarrocel() {

    const [data, setData] = React.useState(FakeData)

    const styles = StyleSheet.create({
        container: {
            padding: 2,
            margin: 2,
        },
    })

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.title}
                horizontal={true}
                pagingEnabled={true}
                renderItem={({ item }) => (
                    <NormalCard
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        logo={item.logo}
                    />
                )}
            />
        </View>
    )
}