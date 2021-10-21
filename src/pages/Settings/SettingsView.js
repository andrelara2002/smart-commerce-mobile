import React from 'react'

import {
    ScrollView,
    Text
} from 'react-native'

import SettingStyle from './SettingsStyle'

export default function SettingsView(props) {

    const { colors, theme } = props

    const styles = SettingStyle(colors)

    return (
        <ScrollView
            style={styles.container}
        >
            <Text
                style={styles.title}
            >Tema</Text>
        </ScrollView>
    )
}