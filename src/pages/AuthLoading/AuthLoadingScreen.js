import React, { useEffect } from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation'

import { ProgressBar } from 'react-native-paper';

import api from '../../services/api'
import { storeCategoria, storeLocal, storeUser, storeUserToken, getUserToken } from '../../utils'
import Error from '../../components/Text/Error';
import { useSelector } from 'react-redux';

export default function AuthLoadingScreen(props) {
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [porcentagem, setPorcentagem] = React.useState(0);
  const colors = useSelector(state => state.settings.app.colors);
  const { accent, textColor, background } = colors;

  function setProgress(porcentagemAtual, total) {
    const porcentagemUnitario = 100 / total

    const valor = (porcentagemAtual * porcentagemUnitario) / 100
    console.log(valor);
    setErrorMessage('atualizando base ' + valor + '%');
    setPorcentagem(valor)
  }

  async function loadDatasFromAPI() {
    var localResponse = await api.get('/local');
    var categoriaResponse = await api.get('/segmento');

    const totalPaginas = localResponse.data.totalPages + categoriaResponse.data.totalPages;
    console.log({ 'totalPaginas': totalPaginas })
    var porcentagemAtual = 0;
    var localDatas = [];
    var categoriaDatas = [];

    while (localResponse.data.pageNumber != localResponse.data.totalPages && localResponse.data.succeeded == true) {
      localDatas = localDatas.concat(localResponse.data.data);
      localResponse = await api.get('/local?PageNumber=' + (localResponse.data.pageNumber + 1) + '&PageSize=10');
      setProgress(++porcentagemAtual, totalPaginas)
    }

    while (categoriaResponse.data.pageNumber != categoriaResponse.data.totalPages && categoriaResponse.data.succeeded == true) {
      categoriaDatas = categoriaDatas.concat(categoriaResponse.data.data);
      categoriaResponse = await api.get('/segmento?PageNumber=' + (categoriaResponse.data.pageNumber + 1) + '&PageSize=10');
      setProgress(++porcentagemAtual, totalPaginas)
    }

    setProgress(totalPaginas, totalPaginas)

    await storeLocal(localDatas);
    await storeCategoria(categoriaDatas);
  }

  useEffect(() => {
    async function handleUserNextScreen() {
      const userToken = await getUserToken();
      if (userToken) {
        await loadDatasFromAPI();
        
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'App' })],
      })

      props.navigation.dispatch(resetAction)
        //props.navigation.navigate('App');
      }
      else {
        props.navigation.navigate('Auth');
      }

    }

    handleUserNextScreen();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/image/splash_icon.png')}
        style={{
          resizeMode: 'center'
        }} />

      {/* <ActivityIndicator size="large" color="#00ff00" /> */}
      <Error errorMessage={errorMessage} />
      <ProgressBar
        progress={porcentagem}
        style={{
          height: 10,
          width: 200,
          borderRadius: 10,
          backgroundColor: 'red'
        }}
      />
    </View>

  );
}

AuthLoadingScreen.navigationOptions = () => {
  return {
    header: null,
  };
};