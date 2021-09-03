import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { getUserToken } from '../../utils'

export default function AuthLoadingScreen(props) {

  useEffect(() => {
    async function handleUserNextScreen() {
      const userToken = await getUserToken();      
      props.navigation.navigate(userToken ? 'App' : 'Auth');
    }

    handleUserNextScreen();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}

AuthLoadingScreen.navigationOptions = () => {
  return {
    header: null,
  };
};