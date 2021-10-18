import React from "react";

import { StyleSheet, Text } from "react-native";

import DefaultColors from "../../assets/colors/DefaultColors";

export default function Title(props) {
    const { text } = props;

    const [colors, setColor] = React.useState(DefaultColors["dark"]);

    const styles = StyleSheet.create({
        title: {
            fontSize: 30,
            fontWeight: 'bold',
            color: colors.textColor,
            marginLeft: 30,
            marginBottom: 15,
        },
    })

    return (
        <Text style={styles.title}>{text}</Text>
    )
}