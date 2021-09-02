import React from 'react';
import SplashScreen from 'react-native-splash-screen'
import Navigator from './src/routes'

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Navigator />
    )
  }
}