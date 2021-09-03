import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import DefaultColors from '../../../assets/colors/DefaultColors';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'column',
        padding: 10,
        backgroundColor: DefaultColors["dark".backgroundColor],
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: DefaultColors["dark"].textColor,
    },
    description: {
        fontSize: 14,
        color: DefaultColors["dark"].border,
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 8,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    itemText: {
        flexDirection: 'column',
        marginLeft: 15,
    },
})

export default function NormalCard(props) {
    return (
        <TouchableOpacity style={styles.item}>
            <Image source={props.image} style={styles.image} />
            <View style={styles.itemHeader}>
                <Image source={props.logo} style={styles.logo} />
                <View style={styles.itemText}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}