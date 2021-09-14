import React from "react";

import { Icon } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import texts from "../../texts";

export default function ComingSoon({ colors, language }) {

    const styles = StyleSheet.create({
        container: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.background
        },
        text: {
            color: colors.textColor,
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 10
        }
    })

    return (
        <View style={styles.container}>
            <Icon
                name="exclamation-triangle"
                type="font-awesome"
                color={colors.accent}
                size={100}
            />
            <Text
                style={styles.text}>
                {texts[language].sessions_title.coming_soon}
            </Text>
        </View>
    )
}