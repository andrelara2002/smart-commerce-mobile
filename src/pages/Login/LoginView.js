//Standard imports
import React, { useState } from 'react';

//Api
import api from '../../services/api'

import { storeCategoria, storeLocal, storeUser, storeUserToken } from '../../utils'

//Page texts
import Texts from '../../texts';

//Native Components
import { View, Text, StyleSheet, Image, StatusBar, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'

//Custom Components
import LoginInput from './LoginInput/LoginInput';
import DefaultColors from '../../assets/colors/DefaultColors'
import Spacer from '../../components/Util/Spacer';

import Button from '../../components/Buttons/Button';
import SignIn from '../../components/Buttons/SignIn';
import Error from '../../components/Text/Error';

import GoogleLoginButton from './SocialButtons/GoogleLoginButton';
import FacebookLoginButton from './SocialButtons/FacebookLoginButton '

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

    async function loadDatasFromAPI() {
        var localResponse = await api.get('/local');
        var categoriaResponse = await api.get('/segmento');

        const porcentagemTotal = 100 / (localResponse.data.totalPages + categoriaResponse.data.totalPages)
        var porcentagemAtual = 1;
        var localDatas = [];
        var categoriaDatas = [];

        while (localResponse.data.pageNumber != localResponse.data.totalPages && localResponse.data.succeeded == true) {
            localDatas = localDatas.concat(localResponse.data.data);
            console.log({ 'pagina': localResponse.data.pageNumber });
            var localResponse = await api.get('/local?PageNumber=' + (localResponse.data.pageNumber + 1) + '&PageSize=10');

            porcentagemAtual++;
            setErrorMessage('atualizando base ' + (Math.round(porcentagemTotal * porcentagemAtual)) + '%');
        }

        while (categoriaResponse.data.pageNumber != categoriaResponse.data.totalPages && categoriaResponse.data.succeeded == true) {
            categoriaDatas = categoriaDatas.concat(categoriaResponse.data.data);
            console.log({ 'pagina': categoriaResponse.data.pageNumber });
            var categoriaResponse = await api.get('/segmento?PageNumber=' + (categoriaResponse.data.pageNumber + 1) + '&PageSize=10');

            porcentagemAtual++;
            setErrorMessage('atualizando base ' + (Math.round(porcentagemTotal * porcentagemAtual)) + '%');
        }

        await storeLocal(localDatas);
        await storeCategoria(categoriaDatas);

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

            // const localResponse = await api.get('/local');
            // await storeLocal(localResponse.data.data);

            await loadDatasFromAPI();

            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'App' })],
            })

            setLoading(false)
            props.navigation.dispatch(resetAction)

        } catch (err) {

            console.log(err)

            setLoading(false)
            setErrorMessage(texts.login_error_invalid_credentials);
        }
    }


    const styles = StyleSheet.create({
        container: {
            /* flex: 1, */
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: colors.background,
            flexDirection: 'column',
            alignItems: 'center',
            padding: 25
        },
        title: {
            flex: 1,
            fontSize: 40,
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 20,
        },
        socialButtons: {
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 10
        },
        image: {
            /* flex: 1, */
            width: 150,
            height: 150,
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: "baseline",
            marginBottom: 20,
        }
    })


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
        </View>
    )
}