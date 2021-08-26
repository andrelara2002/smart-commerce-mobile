//Standard imports
import React, { useState } from 'react';

//Page texts
import LoginTexts from '../../texts';
//Native Components
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
//Custom Components
import LoginInput from '../../Components/Inputs/LoginInput';

import DefaultColors from '../../assets/colors/DefaultColors'
import Button from '../../Components/Buttons/Button';
import SignIn from '../../Components/Buttons/SignIn';

import GoogleLoginButton from '../../Components/Buttons/GoogleLoginButton';
import FacebookLoginButton from '../../Components/Buttons/FacebookLoginButton '

export default function LoginView(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const texts = LoginTexts()[props.lang];

    breakLine = () => {
        const introduction = texts.login_introduction.split(" ")

        return introduction.map((word, index) => {

            return <Text key={index}>{"\n"}{word}</Text>

        })
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: DefaultColors["dark"].background,
            flexDirection: 'column',
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
            flex: 1,
            width: 200,
            height: 200,
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
            <LoginInput lang={props.lang} label={"username"} onChange={setUsername} />
            <LoginInput lang={props.lang} label={"password"} onChange={setPassword} />
            <View style={styles.socialButtons}>
                <GoogleLoginButton lang={props.lang} />
                <FacebookLoginButton lang={props.lang} />
            </View>
            <Button text={"entrar"} onPress={() => {
                console.log(username, password)
            }} />
            <SignIn lang={props.lang} />
        </View>
    )
}