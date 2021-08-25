import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function GoogleLoginButton() {

    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            justifyContent: "center",
        },
        image: {
            width: 200,
            resizeMode: "contain",
        }
    })

    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <Image source={require('../../res/assets/google_login_button.png')}
                    style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}