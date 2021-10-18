import React from 'react'

import {
    ScrollView,
    Image,
    Text
} from 'react-native'

import Input from '../../components/Inputs/Input'
import Spacer from '../../components/Util/Spacer'
import Button from '../../components/Buttons/Button'

import { RegisterProductStyle } from './RegisterProductStyle'

export default function RegisterProductView(props) {
    
    const [product, setProduct] = React.useState({})
    const [productDescription, setProductDescription] = React.useState({})

    const styles = RegisterProductStyle(props.colors)

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={require('../../assets/image/icons/append_product.png')}
            />
            <Spacer height={20} />
            <Input
                label={'Produto'}
                colors={props.colors}
                onChangeText={setProduct}
            />
            <Input
                label={'Descrição'}
                onChangeText={setProductDescription}
                multiline={true}
                colors={props.colors}
                numberOfLines={4}
            />
            <Spacer height={20} />
            <Button
                keyText={'Adicionar'}
                onPress={()=> {props.onSubmit({product, productDescription})}}
                />
        </ScrollView>
    )
}