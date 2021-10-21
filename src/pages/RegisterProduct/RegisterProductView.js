import React from 'react'

import {
    ScrollView,
    Image,
    Text,
    ActivityIndicator
} from 'react-native'

import Input from '../../components/Inputs/Input'
import Spacer from '../../components/Util/Spacer'
import Button from '../../components/Buttons/Button'

import { RegisterProductStyle } from './RegisterProductStyle'

export default function RegisterProductView(props) {

    const { colors, localId } = props
    const [nome, setNome] = React.useState('')
    const [descricao, setDescricao] = React.useState('')
    const [loading, setLoading] = React.useState(false);
    const styles = RegisterProductStyle(colors)

    React.useEffect(() => {
        console.log('REGISTER PRODUCT VIEW LOADED')
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/image/icons/append_product.png')}
            />
            <Spacer height={20} />
            <Input
                label={'Nome do produto'}
                colors={props.colors}
                onChangeText={setNome}
            />
            <Input
                label={'Descrição'}
                onChangeText={setDescricao}
                multiline={true}
                colors={props.colors}
                numberOfLines={4}
            />
            <Spacer height={20} />
            <Button
                keyText={loading ? (
                    <ActivityIndicator size="small" color="#FFF" />
                ) : (
                    <Text>{'Adicionar'}</Text>
                )}

                onPress={async () => {
                    setLoading(true)
                    await props.onSubmit({
                        nome,
                        descricao,
                        localId
                    })
                    setLoading(false)
                }}
            />
        </ScrollView>
    )
}