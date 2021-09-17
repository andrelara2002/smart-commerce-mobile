import React from 'react';
import SplashScreen from 'react-native-splash-screen'
import Navigator from './src/routes'
/* import Navigator from './src/routes_new'; */

import { Provider } from 'react-redux'
import store from './src/store'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
        {/* <AppContainer /> */}
      </Provider>
    )
  }
}