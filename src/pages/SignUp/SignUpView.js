import React from 'react';

//Api
import api from '../../services/api'
import Texts from '../../texts';

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'
import Input from '../../components/Inputs/Input';
import CompanyCard from '../Company/Components/CompanyCard';
import Spacer from '../../components/Util/Spacer';
import Button from '../../components/Buttons/Button';
import Error from '../../components/Text/Error';

import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

export default function SignUpView(props) {

    const lang = useSelector(state => state.settings.app.language);
    const texts = Texts[lang];
    const colors = useSelector(state => state.settings.app.colors);
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: '100%',
            height: '100%',
            backgroundColor: colors.background,
            padding: 20,/* 
            justifyContent: 'center',
            alignItems: 'center', */
        }
    })

    async function handleSignUp() {

        if (name.length === 0 || lastName.length === 0 || email.length === 0 || password.length === 0) {
            setErrorMessage(texts.login_error_empty_fields);
            return;
        }

        setLoading(true);

        try {

            const data = {
                'nome': name,
                'sobrenome': lastName,
                'email': email,
                'senha': password
            }

            const loginResponse = await api.post('/login/create', data)
                .catch(function (error) {
                    return error.response;
                });

            if (loginResponse.data.succeeded == false) {
                setLoading(false)
                setErrorMessage(loginResponse.data.message)
                return;
            }

            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
            })

            setLoading(false)
            props.navigation.dispatch(resetAction)

        } catch (err) {
            console.log(err)
            setLoading(false)
            setErrorMessage(err);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <CompanyCard
                rank={1}
                colors={colors}
                language="pt_br"
                name={name}
                qtdVotacoes={0}
            />

            {!!errorMessage && <Error errorMessage={errorMessage} />}

            <Input
                label='Nome'
                colors={colors}
                onChangeText={setName}
            />
            <Input
                label='Sobrenome'
                colors={colors}
                onChangeText={setLastName}
            />
            <Input
                label='Email'
                colors={colors}
                onChangeText={setEmail}
            />
            <Input
                label='Senha'
                colors={colors}
                onChangeText={setPassword}
                type='password'
            />
            <Spacer height={40} />
            <Button
                flex={null}
                onPress={handleSignUp}
                keyText={loading ? (
                    <ActivityIndicator size="small" color="#FFF" />
                ) : (
                    <Text>Cadastrar</Text>
                )}
            />
            <Spacer height={20} />
        </ScrollView>
    )
}