import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'

import { ProgressBar } from 'react-native-paper';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import api from '../../services/api'
import { storeCategoria, storeLocal, storeUser, storeUserToken, getUserToken, getCredentials } from '../../utils'

export default function AuthLoadingScreen(props) {
  const [porcentagem, setPorcentagem] = React.useState(0);
  const colors = useSelector(state => state.settings.app.colors)

  function setProgress(porcentagemAtual, total) {
    const porcentagemUnitario = 100 / total
    const valor = (porcentagemAtual * porcentagemUnitario) / 100
    setPorcentagem(valor)
  }

  async function loadDatasFromAPI() {
    try {

      var localResponse = await api.get('/local');
      var categoriaResponse = await api.get('/segmento');

      const totalPaginas = localResponse.data.totalPages + categoriaResponse.data.totalPages;
      var porcentagemAtual = 0;
      var localDatas = [];
      var categoriaDatas = [];

      while (localResponse.data.pageNumber <= localResponse.data.totalPages && localResponse.data.succeeded == true) {
        localDatas = localDatas.concat(localResponse.data.data);
        localResponse = await api.get('/local?PageNumber=' + (localResponse.data.pageNumber + 1) + '&PageSize=10');
        setProgress(++porcentagemAtual, totalPaginas)
      }

      while (categoriaResponse.data.pageNumber <= categoriaResponse.data.totalPages && categoriaResponse.data.succeeded == true) {
        categoriaDatas = categoriaDatas.concat(categoriaResponse.data.data);
        categoriaResponse = await api.get('/segmento?PageNumber=' + (categoriaResponse.data.pageNumber + 1) + '&PageSize=10');
        setProgress(++porcentagemAtual, totalPaginas)
      }

      setProgress(totalPaginas, totalPaginas)

      await storeLocal(localDatas);
      await storeCategoria(categoriaDatas);
      return true;
    } catch {
      return false;
    }
  }

  async function refreshToken() {
    const credentials = await getCredentials();

    if (credentials) {
      const loginResponse = await api.post('/login', credentials)
      await storeUserToken(loginResponse.data);
    }
  }

  useEffect(() => {
    async function handleUserNextScreen() {

      const userToken = await getUserToken();
      if (userToken) {
        await refreshToken();
      }

      if (userToken && (await loadDatasFromAPI())) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'App' })],
        })

        props.navigation.dispatch(resetAction)
      }
      else {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
        })
        props.navigation.dispatch(resetAction)
      }

    }

    handleUserNextScreen();
  }, []);

  return (
    <View style={{
      backgroundColor: colors.background,
      flex: 1, justifyContent: 'center', alignItems: 'center'
    }}>
      <StatusBar backgroundColor={colors.background} barStyle={
        colors.background === '#ffffff' ? 'dark-content' : 'light-content'
      } />
      <Image source={require('../../assets/image/splash_icon.png')}
        style={{
          resizeMode: 'center'
        }} />

      <ProgressBar
        progress={porcentagem}
        color={colors.accent}
        style={{
          height: 10,
          width: 200,
          borderRadius: 10,
          backgroundColor: colors.backgroundSecondary,
          marginBottom: 20,
        }}
      />

      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.textColor,
        marginBottom: 20,
      }}>ANDROID BETA</Text>


    </View>

  );
}
