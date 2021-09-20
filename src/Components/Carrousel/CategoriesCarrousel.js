import React from "react";

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from "react-native";

import { Icon } from "react-native-elements";

import DefaultColors from "../../assets/colors/DefaultColors";

export default function CategoriesCarrousel(props) {

    const [colors, setColors] = React.useState(DefaultColors["dark"]);
    const [data, setData] = React.useState(props.data);
    console.log({ 'categoriasss': props.data })
    const styles = StyleSheet.create({
        container: {
            paddingLeft: 20,
            width: "100%",
        },
        card: {
            width: 140,
            height: 160,
            borderRadius: 10,
            marginRight: 10,
            padding: 10,

            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.backgroundSecondary,
        },
        iconFrame: {
            backgroundColor: colors.background,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            padding: 15,
        },
        category: {
            fontSize: 16,
            color: colors.textColor,
            fontWeight: "bold",
            marginTop: 10,
            textAlign: "center",
            textAlignVertical: "bottom"

        },
        more: {
            fontSize: 18,
            color: colors.accent,
            alignSelf: "flex-end",
            marginRight: 20,
            marginTop: 10,
        }
    })

    function renderCategories(category) {
        console.log({ 'category': category })
        return (
            <TouchableOpacity
                key={category.id}
                style={styles.card}>
                <View style={styles.iconFrame}>
                    <Icon
                        name={category.iconeNome}
                        type='material-community'
                        size={25}
                        color={colors.textColor}
                    />
                </View>
                <Text
                    style={styles.category}>
                    {category.nome}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                horizontal={true}
                keyExtractor={item => item.id}
                renderItem={(category) => (
                    renderCategories(category.item)
                )}
            />
            <TouchableOpacity>
                <Text style={styles.more}>{props.more}</Text>
            </TouchableOpacity>
        </View>
    )
}