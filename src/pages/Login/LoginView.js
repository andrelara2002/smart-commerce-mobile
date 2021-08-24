import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginTexts from '../../texts';
import LoginInput from '../../Components/Inputs/LoginInput';

import DefaultColors from '../../res/colors/DefaultColors';
import Input from '../../Components/Inputs/Input';
import Button from '../../Components/Buttons/Button';

export default function LoginView(props) {

    const texts = LoginTexts()[props.lang];

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: DefaultColors["dark"].background,
            flexDirection: 'column',
            padding: 10
        },
        title: {
            fontSize: 40,
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
            <Input label={"Nome"} />
            <Button />
        </View>
    )
}