import { StyleSheet } from 'react-native';

export default function SearchStyles(colors) {
    return StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            width: '100%',
            height: '100%',
        },
        containerStyle: {
            backgroundColor: colors.background,
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
        },
        searchbarView: {
            paddingLeft: 15,
            paddingRight: 15,
            marginTop: 10,
        }
    })
}