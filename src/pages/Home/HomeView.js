import React from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import DefaultColors from '../../assets/colors/DefaultColors';
import HomeHeader from '../../components/Headers/HomeHeader';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: DefaultColors["dark"].background,
    }
})

export default function HomeView({ navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView>
                <HomeHeader />
            </ScrollView>
        </View>
    )
}