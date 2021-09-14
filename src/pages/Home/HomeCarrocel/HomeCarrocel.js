import React from 'react'
import { CommonActions } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

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

export default function HomeCarrocel(props) {

    const [data, setData] = React.useState(FakeData)
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
                            navigation.setParams({ companyid: item.id })
                            navigation.dispatch(
                                CommonActions.navigate({
                                    name: 'Company',
                                })
                            );
                        }}
                        navigation={props.navigation}
                        index={index}
                        image={item.image}
                        title={item.title}
                        segment={item.segment}
                        logo={item.logo}
                    />
                )}
            />
        </View>
    )
}