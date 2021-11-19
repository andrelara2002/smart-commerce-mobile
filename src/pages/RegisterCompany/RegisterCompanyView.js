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
    Image,
    ActivityIndicator
} from 'react-native'

export default function RegisterCompanyView(props) {

    const { colors, categorias } = props

    //Company Variables
    const [nome, setNome] = React.useState('')
    const [segmentoId, setSegmentoId] = React.useState(0)

    const [logradouro, setLogradouro] = React.useState('')
    const [numero, setNumero] = React.useState('')
    const [cep, setCep] = React.useState('')
    const [cidade, setCidade] = React.useState('')
    const [bairro, setBairro] = React.useState('')
    const [estado, setEstado] = React.useState(0)
    const [descricao, setDescricao] = React.useState('')
    const [loading, setLoading] = React.useState(false)
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
                    setCep(response.cep)
                    setEstado(UFs.find(x => x.sigla == response.uf).id)
                    console.log({ 'response.cep': response })
                }
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
                currentIndex={segmentoId}
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
            <Input
                label={"cep"}
                onChangeText={handleCEP}
            />
            <Picker
                label='UF'
                onChangeIndex={setEstado}
                currentIndex={estado}
                items={UFs}
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
                keyText={loading ? (
                    <ActivityIndicator size="small" color="#FFF" />
                ) : (
                    <Text>{'Adicionar'}</Text>
                )}
                colors={colors}
                onPress={async () => {
                    setLoading(true)

                    await props.onSubmit({
                        nome,
                        segmentoId,
                        descricao,
                        imageURL: 'https://www.shareicon.net/data/128x128/2017/06/05/886722_store_512x512.png',
                        produtos: [],
                        votou: true,
                        totalVotacao: 1,
                        endereco: {
                            numero,
                            cep: cep.replace('-', ''),
                            logradouro,
                            cidade,
                            bairro,
                            uf: UFs.find(x => x.id == estado).sigla,
                        },
                    })

                    setLoading(false)
                }} />

            <Spacer height={30} />
        </ScrollView >
    )
}