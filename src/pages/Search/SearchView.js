import React from 'react'

import { StyleSheet, View, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';

// Arquivos de configurações ->

/* import DefaultColors from '../../assets/colors/DefaultColors' */
import Texts from '../../texts'

// <- Arquivos de configurações

// Componentes customizados ->

import Title from '../../components/Util/Title';
import Spacer from '../../components/Util/Spacer';
import CategoriesCarrousel from '../../components/Carrousel/CategoriesCarrousel';
import LittleCompaniesCarrousel from '../../components/Carrousel/LittleCompaniesCarroucel';
import SearchStyles from './SearchStyles';

// <- Componentes customizados

export default function SearchView(props) {

    const [Colors, setColors] = React.useState(props.colors)
    const [search, setSearch] = React.useState("")
    const [text, setText] = React.useState(Texts[props.lang])

    const styles = SearchStyles(props.colors)

    function updateSearch(search) {
        setSearch(search)
    }

    React.useEffect(() => {
        console.log("SEARCH VIEW LOADED")        
    }, [])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchbarView}>
                <SearchBar
                    placeholder={text.search_placeholder}
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
            <Spacer height={20} />
            <Title text={text.sessions_title.categories} />
            <CategoriesCarrousel more={text.sessions_title.see_more} data={props.categorias}/>
            <Spacer height={30} />
            <Title text={text.sessions_title.little_companies} />
            <LittleCompaniesCarrousel data={props.locais}/>

            <Spacer height={30} />
        </ScrollView>
    )
}