import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

import DefaultColors from '../../../assets/colors/DefaultColors';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';

export default function HotBarGraph({ image, qtdTotalVotos, qtdVotos, index, title }) {

    const colors = useSelector(state => state.settings.app.colors);
    const { accent, textColor, background } = colors;

    const [
        porcentagem,
        setPorcentagem] = React.useState(0);

    React.useEffect(() => {
        setPorcentagem(qtdVotos / qtdTotalVotos);
    })

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
        },
        title: {
            fontSize: 14,
            fontWeight: 'bold',
            color: textColor,
            marginBottom: 5,
        },
        position: {
            color: accent,
            fontSize: 16,
        },
        item: {
            marginLeft: 10,
            width: '80%',
        },
        progressbar: {
            height: 10,
            backgroundColor: background,
            borderRadius: 10,
        },
        image: {
            width: 20,
            height: 20,
            marginRight: 10,
            borderRadius: 10,
        },
        texts: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 0,
            margin: 0
        },
        percent: {
            fontSize: 12,
            color: accent,
        }
    })

    function splitText(title) {
        let limit = 25;
        let response = title;

        if (title.length > limit) {
            response = title.substring(0, limit) + '...';
        }

        return response;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.position}>{index + 1}</Text>
            <View style={styles.item}>
                <View style={styles.texts}>
                    <Text style={styles.title}>{splitText(title)}</Text>
                    <Text style={styles.percent}>{`${qtdVotos}`}
                        <Icon
                            name="vote-outline"
                            type="material-community"
                            size={10}
                            color={textColor}
                            style={{ marginLeft: 5 }}
                        />
                    </Text>

                </View>
                <ProgressBar
                    style={styles.progressbar}
                    progress={porcentagem}
                    color={accent} />
            </View>
        </View>
    )
}