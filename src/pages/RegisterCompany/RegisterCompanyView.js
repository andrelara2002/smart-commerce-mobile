import React from 'react'
import RegisterCompanyStyle from './RegisterCompanyStyles'
import Input from '../../components/Inputs/Input'
import Button from '../../components/Buttons/Button'
import Spacer from '../../components/Util/Spacer'
import Picker from '../../components/Pickers/CustomPicker'
import { UFs } from '../../services/UFs'
import AppendCompany from '../../assets/image/icons/append_company.png'
import Divisor from '../../components/Util/Divisor'

import getCorreiosApi from '../../services/correios'

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

    async function handleCEP(cep) {
        setCep(cep)
        if (cep.length === 8) {
            await getCorreiosApi(cep).then(response => {
                if (response.localidade === undefined) {
                    return
                }
                else {
                    setLogradouro(`${response.logradouro} ${response.complemento}`)
                    setCidade(response.localidade)
                    setBairro(response.bairro)
                    setEstado(response.estado)
                    setCep(response.cep)
                    setEstado(response.uf)
                }

                console.log(response)
            })
        }

    }

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
                label={"descricao"}
                multiline={true}
                onChangeText={setDescricao}
            />
            <Divisor
                height={50}
                text={'Endereço'}
            />
            <Picker
                label='UF'
                onChangeIndex={setEstado}
                items={UFs}
            />
            <Input
                label={"cep"}
                onChangeText={handleCEP}
            />
            <Input
                label={"numero"}
                onChangeText={setNumero}
                value={numero}
            />
            <Input
                label={"endereço"}
                onChangeText={setLogradouro}
                value={logradouro}
            />
            <Input
                label={"bairro"}
                onChangeText={setBairro}
                value={bairro}
            />
            <Input
                label={"cidade"}
                onChangeText={setCidade}
                value={cidade}
            />

            <Spacer height={50} />

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
                        uf: UFs.find(x => x.id == estado).sigla,
                        imagemURL: 'https://c7.alamy.com/comp/2AXAP2A/error-template-icon-dead-site-page-not-found-404-trouble-with-system-eps-10-2AXAP2A.jpg',
                        localProdutos: [
                            {
                                produto: {
                                    nome: "produto 0",
                                    descricao: "descricao do produto teste testando o teste"
                                }
                            }
                        ]
                    })
                }} />

            <Spacer height={30} />
        </ScrollView >
    )
}