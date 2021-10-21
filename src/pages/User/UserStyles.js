import { StyleSheet } from "react-native";

export default function UserStyles(colors) {

    return StyleSheet.create({
        container: {
            padding: 20,
            alignItems: "center",
            flex: 1,
            backgroundColor: colors.background,
            width: '100%',
            height: '100%',
        }
    })
}