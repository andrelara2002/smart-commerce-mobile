import React from 'react'
import texts from '../../../texts'

import defaultLogo from '../../../assets/image/FakeData/Logos/defaultLogo.png'
import { useSelector } from 'react-redux'

import CompanyRank, { renderRank } from '../../../components/Util/CompanyRank'

import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'


export default function CompanyCard(props) {

    const [height, setHeight] = React.useState(200)

    const {
        logo,
        name,
        image,
        rank,
        qtdVotacoes,
    } = props

    const colors = useSelector(state => state.settings.app.colors)
    const language = useSelector(state => state.settings.app.language)

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: height,
            alignSelf: 'center',
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: colors.backgroundSecondary,
        },
        name: {
            fontSize: name.length > 20 ? 18 : 24,
            fontWeight: 'bold',
            color: colors.textColor,
            marginLeft: 20,
            width: name.length > 20 ? 150 : 100,
            flexShrink: 1,
        },
        header: {
            flex: 3,
            flexDirection: 'row',
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

    function mountImage() {
        if (image) {
            return (
                <Image
                    style={styles.logo}
                    source={{ uri: image }}
                />
            )
        } else {
            return (
                <Image
                    style={styles.logo}
                    source={defaultLogo}
                />
            )
        }
    }


    return (
        <View
            style={styles.container}>
            <View style={styles.header}>
                {mountImage()}
                <View>
                    <Text style={styles.name}>{props.name}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text>{renderRank(CompanyRank(rank))}</Text>
                <Text style={styles.qtdVotacoes}>{`${qtdVotacoes} ${texts[language].words.participations}`}</Text>
            </View>
        </View>
    )
}