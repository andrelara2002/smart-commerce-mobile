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
            paddingLeft: 0,
            margin: 0,

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
                renderItem={({ item, index }) => (
                    <NormalCard
                        index={index}
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