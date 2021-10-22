import React from 'react'
import { View, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome';
import Texts from '../../texts'
import Title from '../../components/Util/Title';
import Spacer from '../../components/Util/Spacer';
import CategoriesCarrousel from '../../components/Carrousel/CategoriesCarrousel';
import LittleCompaniesCarrousel from '../../components/Carrousel/LittleCompaniesCarroucel';
import SearchStyles from './SearchStyles';

export default function SearchView(
    {
        colors,
        lang,
        search,
        locais,
        navigation,
        categorias
    }) {

    const [searchText, setSearchText] = React.useState("")
    const [text, setText] = React.useState(Texts[lang])
    const styles = SearchStyles(colors)

    React.useEffect(() => {
        console.log("SEARCH VIEW LOADED")
    }, [])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.searchbarView}>
                <SearchBar
                    placeholder={text.search_placeholder}
                    cancelButtonTitle="Cancel"
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(searchText) => {
                        setSearchText(searchText)
                        search(searchText)
                    }}
                    value={searchText}

                    containerStyle={styles.containerStyle}
                    inputContainerStyle={{ backgroundColor: colors.backgroundSecondary }}
                    inputStyle={{
                        backgroundColor: colors.backgroundSecondary,
                        color: colors.textColor
                    }}

                    placeholderTextColor={colors.border}
                    cancelButtonColor={colors.text}
                    searchIcon={{
                        color: colors.border,
                        borderRightWidth: 1,
                        borderRightColor: colors.background,
                        size: 20,
                        paddingRight: 10,
                        paddingLeft: 10,
                    }}
                    clearIcon={{ color: colors.text }}
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
            <CategoriesCarrousel more={text.sessions_title.see_more} data={categorias} />
            <Spacer height={30} />
            <Title text={text.sessions_title.little_companies} />
            <LittleCompaniesCarrousel
                data={locais}
                navigation={navigation} />

            <Spacer height={30} />
        </ScrollView>
    )
}