import React from 'react'
import {
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

import { SearchBar } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Searchbar() {

    const styles = StyleSheet.create({
        searchIcon: {
            width: 20,
            height: 20,
            marginRight: 10
        }
    })

    return (
        <View>
            <SearchBar
                placeholder="Search"
                onChangeText={() => { }}
                onIconPress={() => { }}
                icon={
                    <Icon
                        name="search"
                        size={20}
                        color="black"
                        style={styles.searchIcon}
                    />
                }

            />
        </View>
    )
}