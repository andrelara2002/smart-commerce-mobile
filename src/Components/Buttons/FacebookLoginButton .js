import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'

export default function FacebookLoginButton() {

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
                    source={require('../../res/assets/facebook_logo.png')}
                    style={styles.image} />
            </View>
            <Text>
                Login with Facebook
            </Text>
        </TouchableOpacity>
    )
}