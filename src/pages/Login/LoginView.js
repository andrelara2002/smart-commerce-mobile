//Importacoes padrao
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Textos da pagina
import LoginTexts from '../../texts';

//Componentes
import LoginInput from '../../Components/Inputs/LoginInput';
import DefaultColors from '../../res/colors/DefaultColors';
import Button from '../../Components/Buttons/Button';
import GoogleLoginButton from '../../Components/Buttons/GoogleLoginButton';

export default function LoginView(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const texts = LoginTexts()[props.lang];

    handleSetUsername = (name) => {
        setUsername(name)
    }

    handleSetPassword = (pass) => {
        setPassword(pass)
    }

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
        socialButtons: {
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {texts.login_introduction}
            </Text>
            <LoginInput lang={props.lang} label={"username"} onChange={handleSetUsername} />
            <LoginInput lang={props.lang} label={"password"} onChange={handleSetPassword} />
            <View style={styles.socialButtons}>
                <GoogleLoginButton lang={props.lang} />
                <GoogleLoginButton lang={props.lang} />
            </View>
            <Button text={"entrar"} onPress={() => {
                console.log(`USUARIO: \t${username}`)
                console.log(`SENHA: \t${password}`)
            }
            } />
        </View>
    )
}