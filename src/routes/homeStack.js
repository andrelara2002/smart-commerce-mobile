import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//Auth
import Login from '../pages/Login/LoginView'
import RegisterController from '../pages/Register/RegisterController';
import Loading from '../pages/Login/Loading';
//App
import Home from '../pages/Home/HomeView'

const AppStack = {
    Home: {
        screen: Home
    }
}

const AuthStack = {
    Loading: {
        screen: Loading
    },
    Login: {
        screen: Login
    },
    Register: {
        screen: RegisterController
    }
}

const
    navigationOptions = {
        headerMode: 'none'
    }

const switchNavigator = createSwitchNavigator({
    App: createStackNavigator(AppStack, navigationOptions),
    Auth: createStackNavigator(AuthStack, navigationOptions)
},
    {
        initialRouteName: 'Auth'
    })

export default createAppContainer(switchNavigator)