import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';


import DefaultColors from '../../assets/colors/DefaultColors';
import HomeHeader from '../../components/Headers/HomeHeader';

import { getUser, getUserToken } from '../../utils'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: DefaultColors["dark"].background,
    }
})

export default function HomeView(props) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser().then(user => {
            setUser(user.nomeCliente)
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