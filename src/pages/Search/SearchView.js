import React from 'react'

import { StyleSheet, View, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';

// Arquivos de configurações ->

import DefaultColors from '../../assets/colors/DefaultColors'

// <- Arquivos de configurações

// Componentes customizados ->

import Title from '../../components/Util/Title';
import Spacer from '../../components/Util/Spacer';
import CategoriesCarrousel from '../../components/Carrousel/CategoriesCarrousel';
import LittleCompaniesCarrousel from '../../components/Carrousel/LittleCompaniesCarroucel';

// <- Componentes customizados

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
        <ScrollView style={styles.container}>
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
            <Spacer height={20} />
            <Title text="Categorias" />
            <CategoriesCarrousel />
            <Spacer height={20} />
            <Title text="Pequenas empresas" />
            <LittleCompaniesCarrousel />

            <Spacer height={30} />
        </ScrollView>
    )
}