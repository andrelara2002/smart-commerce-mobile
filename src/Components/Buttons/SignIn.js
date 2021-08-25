import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignIn(props) {
    const styles = StyleSheet.create({
        container: {
            marginTop: 10,
            width: "100%",
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
        },
        text: {
            fontSize: 15,
            color: "#fff",
            textAlign: 'right'
        }
    })
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>Cadastrar-se</Text>
        </TouchableOpacity>
    );
}