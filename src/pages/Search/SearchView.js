import React from 'react'

import { Text, StyleSheet, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { color } from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/FontAwesome';
import DefaultColors from '../../assets/colors/DefaultColors'

export default function SearchView() {

    const [Colors, setColors] = React.useState(DefaultColors["dark"])
    const [search, setSearch] = React.useState("")

    const styles = StyleSheet.create({
        container: {
            backgroundColor: Colors.background,
            width: '100%',
            height: '100%',
        },
        containerStyle: {
            backgroundColor: Colors.background,
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
        },
    })

    function updateSearch(search) {
        setSearch(search)
    }

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Type Here..."
                cancelButtonTitle="Cancel"
                value={search}
                onChangeText={(search) => { updateSearch(search) }}

                containerStyle={styles.containerStyle}
                inputContainerStyle={{ backgroundColor: Colors.backgroundSecondary }}
                inputStyle={{
                    backgroundColor: Colors.backgroundSecondary,
                    color: Colors.textColor
                }}

                placeholderTextColor={Colors.border}
                cancelButtonColor={Colors.text}
                searchIcon={{
                    color: Colors.border,
                    borderRightWidth: 1,
                    borderRightColor: Colors.background,
                    size: 20,
                    paddingRight: 10,
                    paddingLeft: 10,
                }}
                clearIcon={{ color: Colors.text }}
                icon={
                    <Icon
                        name="search"
                        size={20}
                        color={"white"}
                    />
                }
            />
        </View>
    )
}