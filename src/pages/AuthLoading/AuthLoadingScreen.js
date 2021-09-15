import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { getUserToken } from '../../utils'

import { useSelector, useDispatch } from 'react-redux';
import { getLocal } from '../../utils';
import api from '../../services/api'

export default function AuthLoadingScreen(props) {

  async function getLocals(userToken) {
    /* const state = useSelector(state => state); */
    if (userToken !== null) {
      try {
        const locals = await getLocal();
        useDispatch("SET_LOCALS", locals);
      }
      catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    async function handleUserNextScreen() {
      const userToken = await getUserToken();
      getLocals(userToken);
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