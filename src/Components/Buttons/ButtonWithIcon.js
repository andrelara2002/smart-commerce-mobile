import React from 'react'

import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'

import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux'

export default function ButtonWithIcon(props) {

    const [colors, setColors] = React.useState(useSelector(state => state.settings.app.colors))

    const {
        iconName,
        iconType,
        label,
        onPress
    } = props

    const styles = StyleSheet.create({
        conatiner: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: label === 'Sair' ? colors.background :  colors.backgroundSecondary,
            borderWidth: 1,
            borderColor: label === 'Sair' ? colors.red :  colors.backgroundSecondary,
            marginBottom: 10,
            padding: 20,
            borderRadius: 5,
            width: '100%',
            height: 65,
        },
        label: {
            fontSize: 18,
            color: colors.textColor,
            fontWeight: 'bold',
            marginLeft: 10,
        },
        icon: {
            marginRight: 10,
        }
    })

    return (
        <TouchableOpacity
            style={styles.conatiner}
            onPress={onPress}
        >
            <Icon
                style={styles.icon}
                name={iconName}
                type={iconType}
                color={label === 'Sair' ? colors.red :  colors.accent}
                size={20}

            />
            <Text
                style={styles.label}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}