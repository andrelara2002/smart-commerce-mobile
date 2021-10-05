//Standard imports
import React, { useState } from 'react';

//Api
import api from '../../services/api'

import { storeUser, storeUserToken } from '../../utils'

//Page texts
import Texts from '../../texts';

//Native Components
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

//Custom Components
import LoginInput from './LoginInput/LoginInput';
import Spacer from '../../components/Util/Spacer';

import Button from '../../components/Buttons/Button';
import Error from '../../components/Text/Error';
import GoogleLoginButton from './SocialButtons/GoogleLoginButton';
import FacebookLoginButton from './SocialButtons/FacebookLoginButton '
import LoginStyles from './LoginStyles';

export default function LoginView(props) {


    const lang = props.lang;
    const [colors, setColors] = useState(props.colors);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const texts = Texts[lang];

    breakLine = () => {
        const introduction = texts.login_introduction.split(" ")

        return introduction.map((word, index) => {

            return <Text key={index}>{"\n"}{word}</Text>

        })
    }

    async function signIn() {

        if (username.length === 0 || password.length === 0) {
            setErrorMessage(texts.login_error_empty_fields);
            return;
        }

        setLoading(true)

        try {

            const credentials = {
                email: username,
                senha: password
            }

            const loginResponse = await api.post('/login', credentials)
            await storeUserToken(loginResponse.data);

            const userResponse = await api.get('/usuario');
            await storeUser(userResponse.data.data);
          
            setLoading(false)
            props.navigation.navigate('AuthLoading')

        } catch (err) {

            console.log(err)

            setLoading(false)
            setErrorMessage(texts.login_error_invalid_credentials);
        }
    }

    function SignUp() {
        props.navigation.navigate('SignUp')
    }

    const styles = LoginStyles(colors)

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {breakLine()}
                </Text>
                <Image
                    source={require('../../assets/image/login_image.png')}
                    style={styles.image}
                />
            </View>
            {!!errorMessage && <Error errorMessage={errorMessage} />}

            <LoginInput
                label={"username"}
                lang={lang}
                onChange={username => setUsername(username)}
            />

            <LoginInput
                label={"password"}
                lang={lang}
                onChange={password => setPassword(password)}
            />

            <View style={styles.socialButtons}>
                <GoogleLoginButton lang={lang} />
                <FacebookLoginButton lang={lang} />
            </View>
            <Spacer height={20} />
            <Button
                flex={null}
                onPress={signIn}
                keyText={loading ? (
                    <ActivityIndicator size="small" color="#FFF" />
                ) : (
                    <Text>Entrar</Text>
                )}>

            </Button>
            <Spacer height={50} />
            <Button
                flex={null}
                isDark={true}
                onPress={SignUp}
                keyText={"Cadastrar-se"}>
            </Button>
        </View>
    )
}