import React from 'react'

import { View, Text } from 'react-native'

import CompanyCard from '../Company/Components/CompanyCard'
import ButtonWithIcon from '../../components/Buttons/ButtonWithIcon'
import Spacer from '../../components/Util/Spacer'

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
      title: 'Ajustes',
      icon: 'settings',
      onPress: () => props.navigation.navigate('Settings')
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
      <Spacer height={20} />
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
        position: 'absolute',
        bottom: 0,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
        flex: 1,
      }}>ANDROID BETA</Text>
    </View>
  )
}