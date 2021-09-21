import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import api from '../../services/api'
import { storeCategoria, storeLocal, storeUser, storeUserToken, getUserToken } from '../../utils'
import Error from '../../components/Text/Error';


export default function AuthLoadingScreen(props) {
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);

  async function loadDatasFromAPI() {
    var localResponse = await api.get('/local');
    var categoriaResponse = await api.get('/segmento');

    const porcentagemTotal = 100 / (localResponse.data.totalPages + categoriaResponse.data.totalPages)
    var porcentagemAtual = 1;
    var localDatas = [];
    var categoriaDatas = [];

    while (localResponse.data.pageNumber != localResponse.data.totalPages && localResponse.data.succeeded == true) {
      localDatas = localDatas.concat(localResponse.data.data);
      console.log({ 'pagina': localResponse.data.pageNumber });
      var localResponse = await api.get('/local?PageNumber=' + (localResponse.data.pageNumber + 1) + '&PageSize=10');

      porcentagemAtual++;
      setErrorMessage('atualizando base ' + (Math.round(porcentagemTotal * porcentagemAtual)) + '%');
    }

    while (categoriaResponse.data.pageNumber != categoriaResponse.data.totalPages && categoriaResponse.data.succeeded == true) {
      categoriaDatas = categoriaDatas.concat(categoriaResponse.data.data);
      console.log({ 'pagina': categoriaResponse.data.pageNumber });
      var categoriaResponse = await api.get('/segmento?PageNumber=' + (categoriaResponse.data.pageNumber + 1) + '&PageSize=10');

      porcentagemAtual++;
      setErrorMessage('atualizando base ' + (Math.round(porcentagemTotal * porcentagemAtual)) + '%');
    }

    await storeLocal(localDatas);
    await storeCategoria(categoriaDatas);

    setLoading(false);

  }

  useEffect(() => {
    async function handleUserNextScreen() {
      const userToken = await getUserToken();
      if (userToken) {
        await loadDatasFromAPI();
        setLoading(false);
        props.navigation.navigate('App');
      }
      else {
        setLoading(false);
        props.navigation.navigate('Auth');
      }

      /* if (loading == false) {
        props.navigation.navigate(userToken ? 'App' : 'Auth');
      } */
    }

    handleUserNextScreen();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#00ff00" />
      <Error errorMessage={errorMessage} />
    </View>
  );
}

AuthLoadingScreen.navigationOptions = () => {
  return {
    header: null,
  };
};