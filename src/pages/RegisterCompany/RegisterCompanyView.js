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

    const { navigation, colors, language } = props

    //Company Variables
    const [name, setName] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [sugestions, setSugestions] = React.useState([])

    const styles = RegisterCompanyStyle(colors)

    React.useEffect(() => {
        console.log('REGISTER COMPANY VIEW LOADED')
    })

    return (
        <ScrollView style={styles.container}>
            <Image source={AppendCompany} style={styles.image} />
            <Input
                label='Nome'
                colors={colors}
                onChangeText={setName}
            />
            <Input
                label={"category"}
                colors={colors}
                onChangeText={setCategory}
            />
            <Input
                label={"address"}
                colors={colors}
                onChangeText={setAddress}
            />
            <Input
                label={"street number"}
                colors={colors}
                onChangeText={setAddress}
            />
            <Input
                label={"postal code"}
                colors={colors}
                onChangeText={setAddress}
            />
            <Input
                label={"bairro"}
                colors={colors}
                onChangeText={setAddress}
            />
            <Input
                label={"cidade"}
                colors={colors}
                onChangeText={setAddress}
            />
            <Input
                label={"uf"}
                colors={colors}
                onChangeText={setAddress}
            />
            <Input
                label={"description"}
                colors={colors}
                multiline={true}
                onChangeText={setDescription}
            />

            <Spacer height={20} />

            <Button
                keyText={"Finalizar"}
                colors={colors}
                onPress={() => { console.log(name) }} />
            <Spacer height={30} />
        </ScrollView>
    )
}