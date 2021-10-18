import React from 'react'

import { View, Text } from 'react-native'

import CompanyCard from '../Company/Components/CompanyCard'
import ButtonWithIcon from '../../components/Buttons/ButtonWithIcon'

export default function UserView(props) {

  const buttons = [
    {
      title: 'Alterar dados',
      icon: 'edit',
      onPress: () => props.navigation.navigate('UserEdit')
    },
    {
      title: 'Histórico de votações',
      icon: 'history',
      onPress: () => props.navigation.navigate('UserVotes')
    },
    {
      title: 'Ajustes de privacidade',
      icon: 'settings',
      onPress: () => props.navigation.navigate('UserPrivacy')
    },
    {
      title: 'Sair',
      icon: 'exit-to-app',
      onPress: () => props.navigation.navigate('Login')
    }
  ]

  const { username, styles } = props

  return (
    <View
      style={styles.container}
    >
      <CompanyCard
        rank={1}
        name={username}
        qtdVotacoes={0}
      />
      <Text>UserView</Text>
      {buttons.map((button, idx) => {
        return (
          <ButtonWithIcon
            key={idx}
            label={button.title}
            iconName={button.icon}
            onPress={button.onPress}
          />
        )
      })}
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        alignSelf: 'center',
      }}>ANDROID BETA</Text>
    </View>
  )
}