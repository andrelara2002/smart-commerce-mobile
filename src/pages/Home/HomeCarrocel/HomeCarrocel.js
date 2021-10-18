import React from 'react'
import { CommonActions } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation'

import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

/* import FakeData from './FakeData' */

import NormalCard from './NormalCard'

export default function HomeCarrocel(props) {
    /* const dataset = useSelector(state => state.settings) */

    const [data, setData] = React.useState(props.data)
    const navigation = useNavigation()

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
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                pagingEnabled={true}
                renderItem={({ item, index }) => (
                    <NormalCard
                        onPress={() => {
                            navigation.navigate('Company', { company: item })
                        }}
                        navigation={props.navigation}
                        index={index}
                        image={item.imageURL}
                        title={item.nome}
                        segment={item.segmento.nome}
                        logo={item.imageURL}
                    />
                )}
            />
        </View>
    )
}