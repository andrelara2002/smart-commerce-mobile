import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import texts from '../../../texts'

import CompanyRank, { renderRank } from '../../../components/Util/CompanyRank'

import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'


export default function CompanyCard(props) {
    const {
        logo,
        name,
        image,
        rank,
        qtdVotacoes,
        colors,
        language
    } = props

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 200,
            alignSelf: 'center',
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: colors.backgroundSecondary,
        },
        name: {
            fontSize: 24,
            fontWeight: 'bold',
            color: colors.textColor,
            marginLeft: 20,
        },
        header: {
            flex: 3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 25
        },
        footer: {
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderTopWidth: 1,
            borderTopColor: colors.background,
        },
        qtdVotacoes: {
            fontSize: 12,
            color: colors.textColor,
            fontWeight: 'bold'
        },
        logo: {
            width: 80,
            height: 80,
            borderRadius: 35,
        }
    })

    function destructureName() {
        const nameArray = name.split(' ')
        return nameArray.map((item, index) => {
            return <Text key={index} style={styles.name}>{item}</Text>
        })
    }

    return (
        <View
            style={styles.container}>
            <View style={styles.header}>
                <Image source={{uri: logo}} style={styles.logo} />
                <View>
                    {destructureName()}
                </View>
            </View>
            <View style={styles.footer}>
                <Text>{renderRank(CompanyRank(rank))}</Text>
                <Text style={styles.qtdVotacoes}>{`${qtdVotacoes} ${texts[language].words.participations}`}</Text>
            </View>
        </View>
    )
}