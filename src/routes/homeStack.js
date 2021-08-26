import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../pages/Login/LoginController'
import Home from '../pages/Home/HomeController'

const screens = {
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)