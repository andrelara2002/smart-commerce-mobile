import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './pages/Login/LoginController'
import NavigationTabScreen from './pages/NavigationTab/NavigationTabScreen'
import AuthLoadingScreen from './pages/AuthLoading/AuthLoadingScreen'
import CompanyController from './pages/Company/CompanyController.js'
import HomeController from './pages/Home/HomeController'


const StackNavigator = createStackNavigator(
    {
        Home: NavigationTabScreen,
    },
    {
        name: 'StackNavigator',
        initialRouteName: 'Home',
        headerMode: 'none',
        header: null,
    }
);

const AuthStack = createStackNavigator(
    {
        SignIn: Login,
        App: StackNavigator,
    },
    {
        initialRouteName: 'SignIn',
        headerMode: 'none',
        header: null,
    },
);

const RootStack = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        Auth: AuthStack,
        App: StackNavigator,
    },
    {
        initialRouteName: 'AuthLoading',
        headerMode: 'none',
        header: null,
    },
);

const RootStackContainer = createAppContainer(RootStack)

export default RootStackContainer