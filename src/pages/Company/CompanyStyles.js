import { StyleSheet } from 'react-native'

export default function CompanyStyles(colors) {
    return StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: colors.background,
            paddingLeft: 20,
            paddingRight: 20
        },
        description: {
            fontSize: 16,
            color: colors.textColor,
            fontWeight: '100',
        },
        distance: {
            fontSize: 14,
            color: colors.accent,
            fontStyle: 'italic',
        },
        products: {
            width: '100%',
            backgroundColor: colors.backgroundSecondary,
        },
        productsCard: {
            marginTop: 20,
            padding: 10,
            borderRadius: 5,
            width: "100%",
            backgroundColor: colors.backgroundSecondary,
        },
        productsCardImage: {
            width: 100,
            height: 100,
            borderRadius: 5,
        },
        productsCardTitle: {
            fontSize: 24,
            marginTop: 5,
            paddingLeft: 10,
            color: colors.textColor,
            fontWeight: "bold",
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: colors.accent,
        },
        productsDescription: {
            fontSize: 14,
            paddingLeft: 10,
            color: colors.border,
            marginTop: 10,
            fontWeight: "100",

        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
        }
    })
}