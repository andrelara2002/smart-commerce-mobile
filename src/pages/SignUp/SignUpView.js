import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import Input from '../../components/Inputs/Input';
import CompanyCard from '../Company/Components/CompanyCard';
import Spacer from '../../components/Util/Spacer';
import Button from '../../components/Buttons/Button';

import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

export default function SignUpView(props) {
    const colors = useSelector(state => state.settings.app.colors);
    const [name, setName] = React.useState('Your Name');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

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

    function handleSignUp() {
        const data = {
            name,
            password,
            email,
        }
        return data;
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
            <Input
                label='Nome'
                colors={colors}
                onChangeText={setName}
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
                flex={0}
                keyText='Cadastrar'
                onPress={() => props.SignUp(handleSignUp())}
            />
            <Spacer height={20} />
        </ScrollView>
    )
}