import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';


import DefaultColors from '../../assets/colors/DefaultColors';
import HomeHeader from '../../components/Headers/HomeHeader';

import { getUser, getUserToken } from '../../utils'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: DefaultColors["dark"].background,
        padding: 20,
    },
    title: {
        fontSize: 40,
        color: DefaultColors["dark"].text,
    },
    subText: {
        fontSize: 20,
        color: DefaultColors["dark"].border,
    }
})

export default function HomeView(props) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser().then(user => {
            setUser(user.nomeCliente + ' ' + user.sobrenome)
        })
    })


    return (
        <View style={styles.container}>
            <ScrollView>
                <HomeHeader name={user} />
            </ScrollView>
        </View>
    )
}