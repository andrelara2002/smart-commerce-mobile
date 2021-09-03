import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

import DefaultColors from '../../../assets/colors/DefaultColors';

export default function HotBarGraph({ image, qtdTotalVotos, qtdVotos, index, title }) {

    const { accent } = DefaultColors["dark"];

    const [
        porcentagem,
        setPorcentagem] = React.useState(0);

    React.useEffect(() => {
        setPorcentagem(qtdVotos / qtdTotalVotos);
    })

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 10,
        }
    })

    return (
        <View style={styles.container}>
            <Image />
            <Text>{index + 1}</Text>
            <View>
                <Text>{title}</Text>
                <ProgressBar
                    progress={porcentagem}
                    color={accent} />
            </View>
        </View>
    )
}