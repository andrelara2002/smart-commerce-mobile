import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './pages/Login/LoginView'
import Home from './pages/Home/HomeView'
import AuthLoadingScreen from './pages/AuthLoading/AuthLoadingScreen'

const StackNavigator = createStackNavigator(
    {
        Home,
    },
    {
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