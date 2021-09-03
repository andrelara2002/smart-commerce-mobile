import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Texts from '../../../texts'
import DefaultColors from '../../../assets/colors/DefaultColors'


export default function LoginInput(props) {
    const type = props.label + "_label";

    const [hidePassword, setHidePassword] = React.useState(true);
    const [texts, setTexts] = React.useState(Texts[props.lang].input_labels[type]);

    const {
        background,
        accent,
        sec_accent,
        trd_accent,
        border,
        deactivate,
        textColor
    } = DefaultColors["dark"];

    React.useEffect(() => {
        if (props.label != "password") {
            setHidePassword(false);
        }
    })

    const style = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            borderColor: border,
            padding: 6,
            borderRadius: 10,
            marginBottom: 10
        },
        label: {
            flex: 1,
            fontSize: 20,
            color: border,
            textAlign: 'center',
        },
        input: {
            flex: 3,
            fontSize: 20,
            color: '#ffffff'
        },
    }
    );

    handleTexts = (text) => {
        setTexts(text);
    }

    return (
        <View style={style.container}>
            <TextInput
                style={style.input}
                secureTextEntry={hidePassword}
                onChangeText={a => props.onChange(a)}
                onKeyPress={() => {
                    setTexts("Show")
                }}
            />
            <Text style={style.label}>
                {texts}
            </Text>
        </View>
    )
}