import { StyleSheet } from 'react-native'

export default function HomeStyles(colors) {
    return StyleSheet.create({
        container: {
            height: '100%',
            backgroundColor: colors.background,
        },
        subText: {
            fontSize: 20,
            color: colors.border,
        }
    })
}

