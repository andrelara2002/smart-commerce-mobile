import React from 'react'

import { View, Text } from 'react-native'

export default function CompanyRank(rank) {
    switch (rank) {
        case 1:
            return { label: 'Iniciante', color: '#3F8CFF' };
        case 2:
            return { label: 'Conhecida', color: '#FFD700' };
        case 3:
            return { label: 'Renomada', color: '#212121' };
        default:
            return { label: '', color: '' };
    }
}

export function renderRank(values) {
    const { label, color } = values
    return (
        <View
            style={{
                backgroundColor: color,
                padding: 5,
                borderRadius: 5,
            }}>
            <Text
                style={{
                    fontSize: 12,
                    color: '#fff',
                    fontWeight: 'bold'
                }}
            >{label.toUpperCase()}</Text>
        </View>
    )
}