import React from 'react'

import { View, ActivityIndicator } from 'react-native'

export default function Loading() {
    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: "#252731",
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <ActivityIndicator style={{}} size="small" color="#FFF" />
        </View>
    )
}