import React from 'react'

import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import {StackActions} from '@react-navigation/native'

export default function RegisterProductSuccess(props) {

    const colors = useSelector(state => state.settings.app.colors)
    const {navigation} = props

    React.useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.popToTop())
        }, 2000)
    })

    return (
        <View style={{
            backgroundColor: colors.background || '#000',
            width: "100%",
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={
                {
                    color: colors.textColor || '#fff',
                    fontSize: 20,
                }
            }>Local Adicionado!</Text>
        </View>
    )
}   