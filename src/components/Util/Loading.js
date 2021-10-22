import React from 'react'

import { View, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'

export default function Loading() {
    const colors = useSelector(state => state.settings.app.colors)
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <ActivityIndicator style={{}} size="small" color="#FFF" />
        </View>
    )
}