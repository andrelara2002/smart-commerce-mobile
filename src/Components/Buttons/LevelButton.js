import React from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    Text
} from 'react-native';

import DefaultColors from '../../assets/colors/DefaultColors';


const { accent, textColor } = DefaultColors["dark"];

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        height: 60,
        width: 100,

        marginLeft: 10,
        padding: 10,

        borderRadius: 5,
        backgroundColor: accent,
    },

    text: {
        color: textColor,
        fontSize: 20,
        fontWeight: 'bold'
    },
    lvl: {
        color: textColor,
        fontSize: 20,
    },
    image: {
        width: 10,
        height: 10,
        marginRight: 10
    }
}

export default function LevelButton(props) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image source={props.image} style={styles.image} />
                <Text style={styles.lvl}>{"lvl."}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}