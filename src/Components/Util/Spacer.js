import React from 'react'

import { View, StyleSheet } from 'react-native'

export default function Spacer(props) {

    const { height } = props

    const [width, setWidth] = React.useState("100%")

    React.useEffect(() => {
        if (props.width != undefined) {
            setWidth(props.width)
        }
    })

    const styles = StyleSheet.create({
        spacer: {
            height: height,
            width: width,
        }
    })

    return (
        <View style={styles.spacer} />
    )
}