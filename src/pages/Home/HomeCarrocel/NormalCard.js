import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import DefaultColors from '../../../assets/colors/DefaultColors';

export default function NormalCard(props) {

    const [initialMargin, setInitialMargin] = React.useState(0);

    React.useEffect(() => {
        if (props.index === 0) {
            setInitialMargin(20);
        }
    })

    const styles = StyleSheet.create({
        item: {
            flexDirection: 'column',
            padding: 10,
            backgroundColor: DefaultColors["dark".backgroundColor],
            marginLeft: initialMargin,
            marginRight: 10,
            marginBottom: 0,
            marginTop: 0,
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

    return (
        <TouchableOpacity style={styles.item} onPress={props.onPress}>
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