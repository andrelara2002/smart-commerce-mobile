import { StyleSheet } from 'react-native';

export default function LoginStyles(colors) {
    return StyleSheet.create({
        container: {
            /* flex: 1, */
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: colors.background,
            flexDirection: 'column',
            alignItems: 'center',
            padding: 25
        },
        title: {
            flex: 1,
            fontSize: 40,
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 20,
        },
        socialButtons: {
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 10
        },
        image: {
            /* flex: 1, */
            width: 150,
            height: 150,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: "baseline",
            marginBottom: 20,
        }
    })
}