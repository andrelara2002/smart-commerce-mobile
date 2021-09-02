import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text: {
        color: "#e37a7a",
        textAlign: "center",
        marginBottom: 10
    }
})

export default function Error({ errorMessage }) {
    return (
        <View>
            <Text
                style={styles.text}>{errorMessage}
            </Text>
        </View>
    )
}
