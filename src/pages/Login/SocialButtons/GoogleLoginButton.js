import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'

import texts from '../../../texts';

export default function GoogleLoginButton() {

    const lang = "pt_br"

    const styles = StyleSheet.create({
        container: {

            flex: 1,

            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "#fff",

            margin: 2,

            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 15,
            
            borderRadius: 5,
        },
        image: {
            margin: 10,
            width: 20,
            height: 20,
            resizeMode: "contain",
        },
        text: {
            textAlign: "center",
        }
    })

    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <Image
                    source={require('../../../assets/image/google_logo.png')}
                    style={styles.image} />
            </View>
            <Text>
                {texts[lang].google_login}
            </Text>
        </TouchableOpacity>
    )
}