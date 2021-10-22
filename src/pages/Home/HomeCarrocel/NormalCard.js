import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import DefaultColors from '../../../assets/colors/DefaultColors';

import { useSelector } from 'react-redux';

export default function NormalCard(props) {

    const [initialMargin, setInitialMargin] = React.useState(0);
    const colors = useSelector(state => state.settings.app.colors)

    React.useEffect(() => {
        if (props.index === 0) {
            setInitialMargin(20);
        }
    })

    const styles = StyleSheet.create({
        item: {
            flexDirection: 'column',
            padding: 10,
            backgroundColor: colors.background === "#ffffff" ? colors.backgroundSecondary : colors.background,
            marginLeft: initialMargin,
            marginRight: 10,
            marginBottom: 0,
            marginTop: 0,
            borderRadius: 10,
        },
        itemHeader: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 15,
        },
        title: {
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.textColor,
            width: 200,
            flexShrink: 1,
        },
        segment: {
            fontSize: 14,
            color: colors.accent,
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

    return (
        <TouchableOpacity style={styles.item} onPress={props.onPress}>
            <Image source={{ uri: props.image }} style={styles.image} />
            <View style={styles.itemHeader}>
                {/* <Image source={{ uri: props.logo }} style={styles.logo} /> */}
                <View style={styles.itemText}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.segment}>{props.segment}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}