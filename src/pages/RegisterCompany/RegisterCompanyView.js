import React from 'react'
import RegisterCompanyStyle from './RegisterCompanyStyles'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Buttons/Button'
import Spacer from '../../components/Util/Spacer'
import Picker from '../../components/Pickers/CustomPicker'
import { UFs } from '../../services/UFs'
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
    const [nome, setNome] = React.useState('')
    const [segmentoId, setSegmentoId] = React.useState(1)

    const [logradouro, setLogradouro] = React.useState('')
    const [numero, setNumero] = React.useState('')
    const [cep, setCep] = React.useState('')
    const [cidade, setCidade] = React.useState('')
    const [bairro, setBairro] = React.useState('')
    const [estado, setEstado] = React.useState(0)

    const [descricao, setDescricao] = React.useState('')
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
                onChangeText={setNome}
            />
            <Picker
                label='categoria'
                onChangeIndex={setSegmentoId}
                items={categorias}
            />
            <Input
                label={"cep"}
                onChangeText={setCep}
            />
            <Input
                label={"numero"}
                onChangeText={setNumero}
            />
            <Input
                label={"endereço"}
                onChangeText={setLogradouro}
            />
            <Input
                label={"bairro"}
                onChangeText={setBairro}
            />
            <Input
                label={"cidade"}
                onChangeText={setCidade}
            />

            <Picker
                label='UF'
                onChangeIndex={setEstado}
                items={UFs}
            />

            <Input
                label={"descricao"}
                multiline={true}
                onChangeText={setDescricao}
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
                        nome,
                        segmentoId,
                        descricao,
                        numero,
                        cep,
                        logradouro,
                        cidade,
                        bairro,
                        estado: UFs.find(x => x.id == estado).sigla,
                        imagemURL: 'https://c7.alamy.com/comp/2AXAP2A/error-template-icon-dead-site-page-not-found-404-trouble-with-system-eps-10-2AXAP2A.jpg'
                    })
                }} />

            <Spacer height={30} />
        </ScrollView >
    )
}