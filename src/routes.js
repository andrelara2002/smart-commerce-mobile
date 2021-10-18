import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from './pages/Login/LoginController'
import NavigationTabScreen from './pages/NavigationTab/NavigationTabScreen'
import AuthLoadingScreen from './pages/AuthLoading/AuthLoadingScreen'
import SignUpScreen from './pages/SignUp/SiginUpController'

const AppStack = createStackNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        SignIn: LoginScreen,
        SignUp: SignUpScreen,
        App: NavigationTabScreen,
    },
    {
        initialRouteName: 'AuthLoading',
        headerMode: 'none',
        headerShown: false,        
    },
);

const RootStackContainer = createAppContainer(AppStack)

export default RootStackContainer