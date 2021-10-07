import { StyleSheet } from 'react-native';

export function RegisterProductStyle(colors) {

    return StyleSheet.create({
        container: {
            width: '100%',
            height: '100%',
            backgroundColor: colors.background,
            padding: 20,
        },
        image: {
            width: 80,
            height: 80,
            alignSelf: 'center',
            marginTop: 20,
        }
    })
}