import React from 'react'

import RegisterCompanyStyle from './RegisterCompanyStyles'

import Input from '../../components/Inputs/Input'
import Button from '../../components/Buttons/Button'
import Spacer from '../../components/Util/Spacer'

import AppendCompany from '../../assets/image/icons/append_company.png'

import {
    View,
    Text,
    ScrollView,
    Image
} from 'react-native'

export default function RegisterCompanyView(props) {

    const { navigation, colors, language, categorias } = props

    //Company Variables
    const [name, setName] = React.useState('')
    const [category, setCategory] = React.useState('')

    const [address, setAddress] = React.useState('')
    const [streetNumber, setStreetNumber] = React.useState('')
    const [postalCode, setPostalCode] = React.useState('')
    const [city, setCity] = React.useState('')
    const [bairro, setBairro] = React.useState('')
    const [state, setState] = React.useState('')

    const [description, setDescription] = React.useState('')
    const [sugestions, setSugestions] = React.useState('')

    const styles = RegisterCompanyStyle(colors)

    React.useEffect(() => {
        console.log('REGISTER COMPANY VIEW LOADED')
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Image source={AppendCompany} style={styles.image} />
            <Spacer height={20} />
            <Input
                label='Nome'
                onChangeText={setName}

            />
            <Input
                label={"category"}
                onChangeText={setCategory}
            />
            <Input
                label={"address"}
                onChangeText={setAddress}
            />
            <Input
                label={"street number"}
                onChangeText={setStreetNumber}
            />
            <Input
                label={"postal code"}
                onChangeText={setPostalCode}
            />
            <Input
                label={"bairro"}
                onChangeText={setBairro}
            />
            <Input
                label={"cidade"}
                onChangeText={setCity}
            />
            <Input
                label={"uf"}
                onChangeText={setState}
            />
            <Input
                label={"description"}
                multiline={true}
                onChangeText={setDescription}
            />

            <Spacer height={20} />

            <Button
                keyText={"Recomendar produtos"}
                isDark={true}
                onPress={() => {
                    navigation.navigate('RegisterProduct')
                }}
            />
            <Button
                keyText={"Finalizar"}
                colors={colors}
                onPress={() => {
                    props.onSubmit({
                        name,
                        category,
                        description,
                        sugestions,
                        location: {
                            address,
                            streetNumber,
                            postalCode,
                            city,
                            bairro,
                            state,
                        }
                    })
                }} />

            <Spacer height={30} />
        </ScrollView>
    )
}