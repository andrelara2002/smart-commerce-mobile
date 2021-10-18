import React from "react";

import { Icon } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import texts from "../../texts";

export default function ComingSoon({ colors, language, text }) {

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
        },
        subtext: {
            color: colors.accent,
            width: "90%",
            fontSize: 16,
            marginTop: 10,
            fontWeight: "normal",
            textAlign: "center"
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
            <Text style={styles.subtext}>{text}</Text>
        </View>
    )
}