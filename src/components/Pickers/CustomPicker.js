import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';

export default function CustomPicker(props) {

    var { currentIndex } = props
    const { onChangeIndex } = props
    const { items } = props

    const {
        background,
        accent,
        sec_accent,
        trd_accent,
        border,
        deactivate,
        textColor,
        backgroundSecondary
    } = useSelector(state => state.settings.app.colors);

    const styles = StyleSheet.create({
        container: {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            width: "100%",
            marginTop: 10,
            borderRadius: 5,
        },
        text: {
            fontSize: 15,
            textTransform: "uppercase",
            color: border,
            marginBottom: 10
        },
        picker: {
            width: "100%",
            backgroundColor: backgroundSecondary,
            textAlign: 'left',
            textAlignVertical: props.multiline ? 'top' : 'center',
            borderRadius: 4,
            padding: 10,
            minHeight: props.multiline ? 120 : 60,
            height: props.multiline ? "auto" : props.numberOfLines ? props.numberOfLines * 20 : 60,
            fontSize: 24,
            color: textColor
        }
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.label}</Text>
            <Picker
                style={styles.picker}
                selectedValue={currentIndex}
                onValueChange={(itemValue, itemIndex) => {
                    onChangeIndex(itemValue)
                    currentIndex = itemIndex
                }}
                mode="dropdown"
            >
                {items.map((item, index) => {
                    return (
                        <Picker.Item
                            label={item.nome}
                            value={item.id}
                            key={item.id}
                            color={textColor}
                        />
                    )
                })}
            </Picker>
        </View>
    )
}