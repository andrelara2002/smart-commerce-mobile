import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginTexts from '../../texts';
import LoginInput from '../../components/Inputs/LoginInput';
import DefaultColors from '../../res/colors/DefaultColors';

export default function LoginView(props) {

    const texts = LoginTexts()[props.lang];

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: DefaultColors["dark"].background,
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
            <LoginInput lang={props.lang} label={"password"} />
        </View>
    )
}