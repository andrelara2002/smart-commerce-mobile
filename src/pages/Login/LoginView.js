import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginTexts from '../../texts';
import LoginInput from '../../Components/Inputs/LoginInput';

export default function LoginView(props) {

    const texts = LoginTexts()[props.lang];

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#252731",
            flexDirection: 'column'
        },
        title: {
            fontSize: 30,
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 20
        },
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {texts.login_introduction}
            </Text>
            <LoginInput lang={props.lang} label={"username"} />
        </View>
    )
}